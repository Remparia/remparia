"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HOME, METHODE, type Lang } from "@/lib/content";

let introPlayed = false;

type Phase = "pending" | "boot" | "lines" | "signal" | "exit" | "off";

export default function HeroIntro({
  lang,
  onComplete,
}: {
  lang: Lang;
  onComplete: () => void;
}) {
  const t = HOME[lang];
  const letters = METHODE[lang].steps;
  const [phase, setPhase] = useState<Phase>("pending");
  const done = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const complete = useCallback(() => {
    if (done.current) return;
    done.current = true;
    introPlayed = true;
    document.documentElement.classList.remove("intro-lock");
    setPhase("off");
    onCompleteRef.current();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || introPlayed) {
      complete();
      return;
    }

    setPhase("boot");
    document.documentElement.classList.add("intro-lock");

    const t1 = window.setTimeout(() => setPhase("lines"), 700);
    const t2 = window.setTimeout(() => setPhase("signal"), 1900);
    const t3 = window.setTimeout(() => setPhase("exit"), 4300);
    const t4 = window.setTimeout(complete, 5600);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
      document.documentElement.classList.remove("intro-lock");
    };
  }, [complete]);

  const skip = () => {
    setPhase("exit");
    window.setTimeout(complete, 1000);
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
      <div className="hero-intro__grain" aria-hidden />
      <div className="hero-intro__raster" aria-hidden />

      <div className="hero-intro__stage">
        <p className="hero-intro__line">// {t.introLine}</p>

        <div className="hero-intro__words">
          <div className="hero-intro__noise" aria-hidden>
            {t.introNoise}
          </div>
          <div className="hero-intro__letters" aria-hidden={phase !== "signal"}>
            {letters.map((step) => (
              <span key={step.letter} title={step.title}>
                {step.letter}
              </span>
            ))}
          </div>
        </div>

        <p className="hero-intro__hint">{t.introHint}_</p>
      </div>

      <button type="button" className="hero-intro__skip" onClick={skip}>
        {t.introSkip} →
      </button>
    </div>
  );
}
