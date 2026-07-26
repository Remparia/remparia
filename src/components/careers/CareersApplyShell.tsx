"use client";

import { useEffect, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { getCareers } from "@/lib/careers";
import {
  CAREERS_TOTAL_MS,
  formatRemaining,
  loadCareersSession,
} from "@/lib/careers-session";
import { useLang } from "@/lib/lang";

export default function CareersApplyShell({
  step,
  children,
}: {
  step: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  const t = getCareers(lang);
  const [remaining, setRemaining] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add("careers-apply-active");
    return () => document.body.classList.remove("careers-apply-active");
  }, []);

  useEffect(() => {
    const tick = () => {
      const session = loadCareersSession();
      if (!session.timerStartedAt) {
        setRemaining(null);
        return;
      }
      const left = Math.max(0, CAREERS_TOTAL_MS - (Date.now() - session.timerStartedAt));
      setRemaining(formatRemaining(left));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [step]);

  return (
    <div className="careers-iso">
      <header className="careers-iso__bar">
        <div className="careers-iso__brand">
          <span className="careers-iso__eyebrow">// {t.eyebrow}</span>
          <strong>{t.applyTitle}</strong>
        </div>
        <div className="careers-iso__meta">
          <span>
            {t.fields.stepOf} {step} / 3
          </span>
          {remaining ? (
            <span className="careers-iso__timer" aria-live="polite">
              {t.timerLabel}: <strong>{remaining}</strong>
            </span>
          ) : (
            <span className="careers-iso__timer-idle">
              {lang === "fr"
                ? "Chrono au démarrage des infos"
                : "Timer starts after your details"}
            </span>
          )}
          <LocaleLink href="/carrieres" className="careers-iso__exit">
            {t.applyExit}
          </LocaleLink>
        </div>
      </header>
      <div className="careers-iso__progress" aria-hidden>
        <span style={{ width: `${(step / 3) * 100}%` }} />
      </div>
      <div className="careers-iso__body">{children}</div>
    </div>
  );
}
