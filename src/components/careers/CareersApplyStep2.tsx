"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import CareersApplyShell from "@/components/careers/CareersApplyShell";
import { getCareers } from "@/lib/careers";
import {
  loadCareersSession,
  saveCareersSession,
} from "@/lib/careers-session";
import { withLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

export default function CareersApplyStep2() {
  const { lang } = useLang();
  const t = getCareers(lang);
  const router = useRouter();
  const errorId = useId();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const s = loadCareersSession();
    if (!s.name || !s.email || !s.role || !s.timerStartedAt) {
      router.replace(withLocale(lang, "/carrieres/candidature/1"));
      return;
    }
    setAnswers(s.answers ?? {});
    setReady(true);
  }, [lang, router]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = t.questions.every(
      (q) => (answers[q.id] ?? "").trim().length >= q.min,
    );
    if (!ok) {
      setFormError(t.fields.formIncomplete);
      return;
    }
    setFormError("");
    saveCareersSession({ answers });
    router.push(withLocale(lang, "/carrieres/candidature/3"));
  }

  if (!ready) return null;

  const describedBy = formError ? errorId : undefined;

  return (
    <CareersApplyShell step={2}>
      <form className="careers-iso-form" onSubmit={onSubmit} noValidate>
        <h1>{t.steps[1].title}</h1>
        <p>{t.steps[1].desc}</p>
        {t.questions.map((q) => (
          <label key={q.id}>
            <span>{q.label}</span>
            <small>{q.hint}</small>
            <textarea
              rows={5}
              value={answers[q.id] ?? ""}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
              }
              required
              minLength={q.min}
              maxLength={4000}
              aria-invalid={
                formError && (answers[q.id] ?? "").trim().length < q.min
                  ? true
                  : undefined
              }
              aria-describedby={describedBy}
            />
          </label>
        ))}
        {formError ? (
          <p
            id={errorId}
            className="contact-feedback contact-feedback--err"
            role="alert"
          >
            {formError}
          </p>
        ) : null}
        <div className="careers-iso-actions">
          <button
            type="button"
            className="btn-ghost"
            onClick={() =>
              router.push(withLocale(lang, "/carrieres/candidature/1"))
            }
          >
            ← {t.fields.back}
          </button>
          <button type="submit" className="btn-primary">
            {t.fields.next} →
          </button>
        </div>
      </form>
    </CareersApplyShell>
  );
}
