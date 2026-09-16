"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HOME, type Lang } from "@/lib/content";

let introPlayed = false;

type Phase = "pending" | "boot" | "lock" | "hold" | "exit" | "off";

export default function HeroIntro({
  lang,
  onHoldStart,
  onComplete,
}: {
  lang: Lang;
  onHoldStart?: () => void;
  onComplete: () => void;
}) {
  const t = HOME[lang];
  const [phase, setPhase] = useState<Phase>("pending");
  const done = useRef(false);
  const timers = useRef<number[]>([]);
  const onCompleteRef = useRef(onComplete);
  const onHoldStartRef = useRef(onHoldStart);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    onHoldStartRef.current = onHoldStart;
  }, [onHoldStart]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const complete = useCallback(() => {
    if (done.current) return;
    done.current = true;
    introPlayed = true;
    clearTimers();
    document.documentElement.classList.remove("intro-lock");
    setPhase("off");
    onCompleteRef.current();
  }, [clearTimers]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || introPlayed) {
      complete();
      return;
    }

    onHoldStartRef.current?.();
    setPhase("boot");
    document.documentElement.classList.add("intro-lock");

    timers.current = [
      window.setTimeout(() => setPhase("lock"), 1500),
      window.setTimeout(() => setPhase("hold"), 2400),
      window.setTimeout(() => setPhase("exit"), 4300),
      window.setTimeout(complete, 6000),
    ];

    return () => {
      clearTimers();
      document.documentElement.classList.remove("intro-lock");
    };
  }, [clearTimers, complete]);

  const skip = () => {
    if (done.current || phase === "exit") return;
    clearTimers();
    setPhase("exit");
    timers.current = [window.setTimeout(complete, 1600)];
  };

  if (phase === "off") return null;

  return (
    <div
      className="hero-intro"
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label="Remparia"
    >
      <div className="hero-intro__stage">
        <div className="hero-intro__lockup">
          <div className="hero-intro__seal">
            <span className="hero-intro__orbit" aria-hidden />
            <div className="hero-intro__mark">
              <Image
                src="/logo-remparia-v3.png"
                alt=""
                width={211}
                height={38}
                className="hero-intro__img"
                priority
                unoptimized
              />
            </div>
          </div>
          <div className="hero-intro__word" aria-hidden>
            <Image
              src="/logo-remparia-v3.png"
              alt=""
              width={211}
              height={38}
              className="hero-intro__img hero-intro__img--word"
              priority
              unoptimized
            />
          </div>
        </div>
        <p className="hero-intro__slogan">{t.introSlogan}</p>
      </div>

      <button type="button" className="hero-intro__skip" onClick={skip}>
        {t.introSkip} →
      </button>
    </div>
  );
}
