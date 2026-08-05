"use client";

import { useEffect, useRef, useState } from "react";
import { getCareers } from "@/lib/careers";
import { useLang } from "@/lib/lang";

const MAX_MS = 12 * 60 * 1000;
const MIN_MS = 30 * 1000;

type Props = {
  onUploaded: (url: string) => void;
  existingUrl?: string;
};

export default function CareerVideoRecorder({ onUploaded, existingUrl }: Props) {
  const { lang } = useLang();
  const t = getCareers(lang);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startedAtRef = useRef<number>(0);
  const lengthRef = useRef<number>(0);

  const [phase, setPhase] = useState<
    "idle" | "preview" | "recording" | "review" | "uploading" | "done" | "error"
  >(existingUrl ? "done" : "idle");
  const [error, setError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState(existingUrl ?? "");
  const [phaseAnnounce, setPhaseAnnounce] = useState("");

  useEffect(() => {
    return () => {
      mediaRef.current?.getTracks().forEach((tr) => tr.stop());
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  useEffect(() => {
    if (phase === "recording") {
      setPhaseAnnounce(
        lang === "fr" ? "Enregistrement démarré" : "Recording started",
      );
    } else if (phase === "review") {
      setPhaseAnnounce(
        lang === "fr" ? "Enregistrement terminé" : "Recording stopped",
      );
    }
  }, [phase, lang]);

  useEffect(() => {
    if (phase !== "recording") return;
    const id = window.setInterval(() => {
      const ms = Date.now() - startedAtRef.current;
      lengthRef.current = ms;
      setElapsed(ms);
      if (ms >= MAX_MS) stopRecording();
    }, 250);
    return () => window.clearInterval(id);
  }, [phase]);

  function mediaErrorMessage(err: unknown): string {
    if (typeof window !== "undefined" && !window.isSecureContext) {
      return t.videoInsecure;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      return t.videoInsecure;
    }
    const name =
      err && typeof err === "object" && "name" in err
        ? String((err as { name: string }).name)
        : "";
    if (name === "NotAllowedError" || name === "PermissionDeniedError") {
      return t.videoDenied;
    }
    if (name === "NotFoundError" || name === "DevicesNotFoundError") {
      return t.videoNoDevice;
    }
    if (
      name === "NotReadableError" ||
      name === "TrackStartError" ||
      name === "AbortError"
    ) {
      return t.videoUnavailable;
    }
    if (name === "SecurityError") {
      return t.videoInsecure;
    }
    return t.videoNeedPerm;
  }

  async function enableCamera() {
    setError(null);
    if (typeof window !== "undefined" && !window.isSecureContext) {
      setError(t.videoInsecure);
      setPhase("error");
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      setError(t.videoInsecure);
      setPhase("error");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: true,
      });
      mediaRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setPhase("preview");
    } catch (err) {
      setError(mediaErrorMessage(err));
      setPhase("error");
    }
  }

  function startRecording() {
    const stream = mediaRef.current;
    if (!stream) return;
    chunksRef.current = [];
    const mime = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")
      ? "video/webm;codecs=vp9,opus"
      : MediaRecorder.isTypeSupported("video/webm")
        ? "video/webm"
        : undefined;
    const recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    recorderRef.current = recorder;
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    recorder.onstop = () => {
      const file = new Blob(chunksRef.current, {
        type: recorder.mimeType || "video/webm",
      });
      const url = URL.createObjectURL(file);
      setBlob(file);
      setBlobUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
      if (videoRef.current) {
        videoRef.current.srcObject = null;
        videoRef.current.src = url;
      }
      setPhase("review");
    };
    startedAtRef.current = Date.now();
    setElapsed(0);
    recorder.start(1000);
    setPhase("recording");
  }

  function stopRecording() {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
  }

  function retake() {
    setBlob(null);
    setUploadedUrl("");
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    setBlobUrl(null);
    setPhase("idle");
    void enableCamera();
  }

  async function upload() {
    if (!blob) return;
    const length = lengthRef.current || elapsed;
    if (length < MIN_MS) {
      setError(t.videoTooShort);
      return;
    }
    if (length > MAX_MS + 5000) {
      setError(t.videoTooLong);
      return;
    }

    setPhase("uploading");
    setError(null);
    try {
      const res = await fetch(
        `/api/careers/video?filename=intro-${Date.now()}.webm`,
        {
          method: "POST",
          headers: {
            "content-type": blob.type || "video/webm",
          },
          body: blob,
        },
      );
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        url?: string;
        error?: string;
      };
      if (!res.ok || !json.url) {
        if (json.error === "not_configured") setError(t.videoNoBlob);
        else setError(t.videoError);
        setPhase("review");
        return;
      }
      setUploadedUrl(json.url);
      onUploaded(json.url);
      setPhase("done");
      mediaRef.current?.getTracks().forEach((tr) => tr.stop());
    } catch {
      setError(t.videoError);
      setPhase("review");
    }
  }

  const elapsedLabel = `${Math.floor(elapsed / 60000)}:${String(
    Math.floor((elapsed % 60000) / 1000),
  ).padStart(2, "0")}`;

  return (
    <div className="careers-video">
      <ul className="careers-video-rules">
        {t.videoRules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>

      <div className="careers-video__stage">
        <video
          ref={videoRef}
          className="careers-video__preview"
          playsInline
          muted={phase === "preview" || phase === "recording"}
          controls={phase === "review" || phase === "done"}
          aria-label={
            phase === "review" || phase === "done"
              ? lang === "fr"
                ? "Lecture de votre enregistrement"
                : "Playback of your recording"
              : phase === "recording"
                ? lang === "fr"
                  ? "Enregistrement en cours"
                  : "Recording in progress"
                : lang === "fr"
                  ? "Aperçu caméra"
                  : "Camera preview"
          }
        />
        {phase === "recording" ? (
          <div className="careers-video__rec" aria-hidden="true">
            REC {elapsedLabel}
          </div>
        ) : null}
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {phaseAnnounce}
        </span>
      </div>

      <div className="careers-video__actions">
        {phase === "idle" || phase === "error" ? (
          <button type="button" className="btn-primary" onClick={enableCamera}>
            {t.videoStart} →
          </button>
        ) : null}
        {phase === "preview" ? (
          <button type="button" className="btn-primary" onClick={startRecording}>
            {t.videoStart} →
          </button>
        ) : null}
        {phase === "recording" ? (
          <button type="button" className="btn-ghost" onClick={stopRecording}>
            {t.videoStop}
          </button>
        ) : null}
        {phase === "review" ? (
          <>
            <button type="button" className="btn-ghost" onClick={retake}>
              {t.videoRetake}
            </button>
            <button type="button" className="btn-primary" onClick={upload}>
              {t.videoUpload} →
            </button>
          </>
        ) : null}
        {phase === "uploading" ? (
          <span className="careers-video__status">{t.videoUploading}</span>
        ) : null}
        {phase === "done" && uploadedUrl ? (
          <div className="careers-video__done">
            <span className="contact-feedback contact-feedback--ok">
              {t.videoReady}
            </span>
            <button type="button" className="btn-ghost" onClick={retake}>
              {t.videoRetake}
            </button>
          </div>
        ) : null}
      </div>
      {error ? (
        <p className="contact-feedback contact-feedback--err" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
