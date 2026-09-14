"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
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
  const [attempted, setAttempted] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});

  useEffect(() => {
    const s = loadCareersSession();
    if (!s.name || !s.email || !s.role || !s.timerStartedAt) {
      router.replace(withLocale(lang, "/carrieres/candidature/1"));
      return;
    }
    setAnswers(s.answers ?? {});
    setReady(true);
  }, [lang, router]);

  function answerLen(id: string) {
    return (answers[id] ?? "").trim().length;
  }

  function isShort(id: string, min: number) {
    return answerLen(id) < min;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setAttempted(true);
    const firstBad = t.questions.find((q) => isShort(q.id, q.min));
    if (firstBad) {
      setFormError(t.fields.answersTooShort);
      const el = fieldRefs.current[firstBad.id];
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
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
        {t.questions.map((q) => {
          const len = answerLen(q.id);
          const short = isShort(q.id, q.min);
          const showInvalid = attempted && short;
          return (
            <label key={q.id}>
              <span>{q.label}</span>
              <small>{q.hint}</small>
              <textarea
                ref={(el) => {
                  fieldRefs.current[q.id] = el;
                }}
                rows={5}
                value={answers[q.id] ?? ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                }
                required
                minLength={q.min}
                maxLength={4000}
                aria-invalid={showInvalid ? true : undefined}
                aria-describedby={describedBy}
              />
              <small
                className={
                  showInvalid
                    ? "careers-iso-count careers-iso-count--bad"
                    : "careers-iso-count"
                }
              >
                {len} / {q.min} {t.fields.charsMin} ({t.fields.charsOf})
              </small>
            </label>
          );
        })}
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
