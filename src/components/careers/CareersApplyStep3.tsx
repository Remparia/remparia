"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CareersApplyShell from "@/components/careers/CareersApplyShell";
import CareerVideoRecorder from "@/components/careers/CareerVideoRecorder";
import LocaleLink from "@/components/LocaleLink";
import { getCareers } from "@/lib/careers";
import {
  clearCareersSession,
  loadCareersSession,
  saveCareersSession,
} from "@/lib/careers-session";
import { withLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

type Status = "idle" | "loading" | "success" | "error" | "config" | "rate";

export default function CareersApplyStep3() {
  const { lang } = useLang();
  const t = getCareers(lang);
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const s = loadCareersSession();
    if (!s.name || !s.email || !s.role || !s.timerStartedAt) {
      router.replace(withLocale(lang, "/carrieres/candidature/1"));
      return;
    }
    if (!Object.keys(s.answers || {}).length) {
      router.replace(withLocale(lang, "/carrieres/candidature/2"));
      return;
    }
    setVideoUrl(s.videoUrl || "");
    setReady(true);
  }, [lang, router]);

  async function submit() {
    const s = loadCareersSession();
    if (!videoUrl) return;
    setStatus("loading");

    const roleLabel =
      s.role === "spontaneous" || !s.role
        ? t.fields.roleSpontaneous
        : t.roles.find((r) => r.id === s.role)?.title ?? s.role;

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: s.name,
          email: s.email,
          linkedin: s.linkedin,
          city: s.city,
          role: s.role,
          roleLabel,
          answers: t.questions.map((q) => ({
            id: q.id,
            label: q.label,
            value: s.answers[q.id] ?? "",
          })),
          videoUrl,
          lang,
          website: "",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && json.ok) {
        clearCareersSession();
        setStatus("success");
        return;
      }
      if (res.status === 503 || json.error === "not_configured") {
        setStatus("config");
        return;
      }
      if (res.status === 429) {
        setStatus("rate");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (!ready) return null;

  if (status === "success") {
    return (
      <CareersApplyShell step={3}>
        <div className="careers-iso-form">
          <h1>{t.applyTitle}</h1>
          <p className="contact-feedback contact-feedback--ok">{t.success}</p>
          <LocaleLink href="/carrieres" className="btn-primary">
            ← {t.applyBack}
          </LocaleLink>
        </div>
      </CareersApplyShell>
    );
  }

  const feedback =
    status === "config"
      ? t.errorConfig
      : status === "rate"
        ? t.errorRate
        : status === "error"
          ? t.error
          : null;

  return (
    <CareersApplyShell step={3}>
      <div className="careers-iso-form">
        <h1>{t.videoTitle}</h1>
        <p>{t.steps[2].desc}</p>
        <CareerVideoRecorder
          existingUrl={videoUrl || undefined}
          onUploaded={(url) => {
            setVideoUrl(url);
            saveCareersSession({ videoUrl: url });
          }}
        />
        <div className="careers-iso-actions">
          <button
            type="button"
            className="btn-ghost"
            onClick={() => router.push(withLocale(lang, "/carrieres/candidature/2"))}
          >
            ← {t.fields.back}
          </button>
          <button
            type="button"
            className="btn-primary"
            disabled={!videoUrl || status === "loading"}
            onClick={submit}
          >
            {status === "loading" ? t.fields.sending : `${t.fields.submit} →`}
          </button>
        </div>
        {feedback ? (
          <p className="contact-feedback contact-feedback--err">{feedback}</p>
        ) : null}
        <p className="contact-privacy">{t.privacyNote}</p>
      </div>
    </CareersApplyShell>
  );
}
