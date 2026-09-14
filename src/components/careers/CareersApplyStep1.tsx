"use client";

import { FormEvent, Suspense, useEffect, useId, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CareersApplyShell from "@/components/careers/CareersApplyShell";
import { getCareers, type CareerRoleId } from "@/lib/careers";
import {
  loadCareersSession,
  saveCareersSession,
} from "@/lib/careers-session";
import {
  type CareersIdentityErrors,
  type CareersIdentityField,
  validateCareersIdentity,
} from "@/lib/contact-form-validation";
import { withLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

const ROLE_IDS: CareerRoleId[] = [
  "agent-engineer",
  "platform-engineer",
  "ai-consultant",
  "delivery-ai",
  "compliance-data",
  "business-developer",
  "spontaneous",
];

const FIELD_ORDER: CareersIdentityField[] = [
  "name",
  "email",
  "linkedin",
  "city",
  "role",
];

function isRoleId(value: string): value is CareerRoleId {
  return ROLE_IDS.includes(value as CareerRoleId);
}

function Step1Inner() {
  const { lang } = useLang();
  const t = getCareers(lang);
  const router = useRouter();
  const searchParams = useSearchParams();
  const preset = searchParams.get("role") ?? "";
  const formErrorId = useId();
  const ids = {
    name: useId(),
    email: useId(),
    linkedin: useId(),
    city: useId(),
    role: useId(),
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState<CareerRoleId | "">("");
  const [errors, setErrors] = useState<CareersIdentityErrors>({});
  const [formError, setFormError] = useState("");
  const fieldRefs = useRef<
    Partial<Record<CareersIdentityField, HTMLElement | null>>
  >({});

  useEffect(() => {
    const s = loadCareersSession();
    setName(s.name);
    setEmail(s.email);
    setLinkedin(s.linkedin);
    setCity(s.city);
    if (s.role) setRole(s.role);
    else if (preset && isRoleId(preset)) setRole(preset);
  }, [preset]);

  function runValidation() {
    return validateCareersIdentity(
      { name, email, linkedin, city, role },
      t.validation,
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = runValidation();
    setErrors(result.errors);
    if (!result.valid) {
      setFormError(t.fields.formIncomplete);
      const first = FIELD_ORDER.find((f) => result.errors[f]);
      if (first) {
        const el = fieldRefs.current[first];
        el?.focus({ preventScroll: true });
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setFormError("");
    saveCareersSession({
      name: result.values.name,
      email: result.values.email,
      linkedin: result.values.linkedin,
      city: result.values.city,
      role: result.values.role as CareerRoleId,
      timerStartedAt: Date.now(),
    });
    router.push(withLocale(lang, "/carrieres/candidature/2"));
  }

  function fieldProps(field: CareersIdentityField) {
    const err = errors[field];
    const errId = ids[field];
    const describedBy = [err ? errId : null, formError ? formErrorId : null]
      .filter(Boolean)
      .join(" ") || undefined;
    return {
      errId,
      error: err,
      invalid: err ? true : undefined,
      describedBy,
    };
  }

  const nameF = fieldProps("name");
  const emailF = fieldProps("email");
  const linkedinF = fieldProps("linkedin");
  const cityF = fieldProps("city");
  const roleF = fieldProps("role");

  return (
    <CareersApplyShell step={1}>
      <form className="careers-iso-form" onSubmit={onSubmit} noValidate>
        <h1>{t.steps[0].title}</h1>
        <p>{t.steps[0].desc}</p>
        <label>
          <span>{t.fields.name}</span>
          <input
            ref={(el) => {
              fieldRefs.current.name = el;
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            onBlur={() => {
              const r = runValidation();
              setErrors((prev) => ({ ...prev, name: r.errors.name }));
            }}
            required
            autoComplete="name"
            maxLength={120}
            aria-invalid={nameF.invalid}
            aria-describedby={nameF.describedBy}
          />
          {nameF.error ? (
            <span id={nameF.errId} className="contact-field-error" role="alert">
              {nameF.error}
            </span>
          ) : null}
        </label>
        <label>
          <span>{t.fields.email}</span>
          <input
            ref={(el) => {
              fieldRefs.current.email = el;
            }}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email)
                setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            onBlur={() => {
              const r = runValidation();
              setErrors((prev) => ({ ...prev, email: r.errors.email }));
            }}
            required
            autoComplete="email"
            inputMode="email"
            maxLength={200}
            aria-invalid={emailF.invalid}
            aria-describedby={emailF.describedBy}
          />
          {emailF.error ? (
            <span id={emailF.errId} className="contact-field-error" role="alert">
              {emailF.error}
            </span>
          ) : null}
        </label>
        <label>
          <span>{t.fields.linkedin}</span>
          <input
            ref={(el) => {
              fieldRefs.current.linkedin = el;
            }}
            value={linkedin}
            onChange={(e) => {
              setLinkedin(e.target.value);
              if (errors.linkedin)
                setErrors((prev) => ({ ...prev, linkedin: undefined }));
            }}
            onBlur={() => {
              const r = runValidation();
              setErrors((prev) => ({ ...prev, linkedin: r.errors.linkedin }));
            }}
            inputMode="url"
            placeholder="https://www.linkedin.com/in/…"
            maxLength={300}
            aria-invalid={linkedinF.invalid}
            aria-describedby={linkedinF.describedBy}
          />
          {linkedinF.error ? (
            <span
              id={linkedinF.errId}
              className="contact-field-error"
              role="alert"
            >
              {linkedinF.error}
            </span>
          ) : null}
        </label>
        <label>
          <span>{t.fields.city}</span>
          <input
            ref={(el) => {
              fieldRefs.current.city = el;
            }}
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (errors.city)
                setErrors((prev) => ({ ...prev, city: undefined }));
            }}
            onBlur={() => {
              const r = runValidation();
              setErrors((prev) => ({ ...prev, city: r.errors.city }));
            }}
            required
            autoComplete="address-level2"
            maxLength={120}
            aria-invalid={cityF.invalid}
            aria-describedby={cityF.describedBy}
          />
          {cityF.error ? (
            <span id={cityF.errId} className="contact-field-error" role="alert">
              {cityF.error}
            </span>
          ) : null}
        </label>
        <label>
          <span>{t.fields.role}</span>
          <select
            ref={(el) => {
              fieldRefs.current.role = el;
            }}
            value={role}
            onChange={(e) => {
              setRole(e.target.value as CareerRoleId);
              if (errors.role)
                setErrors((prev) => ({ ...prev, role: undefined }));
            }}
            required
            aria-invalid={roleF.invalid}
            aria-describedby={roleF.describedBy}
          >
            <option value="" disabled>
              —
            </option>
            {t.roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.title}
              </option>
            ))}
            <option value="spontaneous">{t.fields.roleSpontaneous}</option>
          </select>
          {roleF.error ? (
            <span id={roleF.errId} className="contact-field-error" role="alert">
              {roleF.error}
            </span>
          ) : null}
        </label>
        {formError ? (
          <p
            id={formErrorId}
            className="contact-feedback contact-feedback--err"
            role="alert"
          >
            {formError}
          </p>
        ) : null}
        <button type="submit" className="btn-primary">
          {t.fields.next} →
        </button>
      </form>
    </CareersApplyShell>
  );
}

export default function CareersApplyStep1() {
  return (
    <Suspense
      fallback={
        <CareersApplyShell step={1}>
          <p className="sr-only">…</p>
        </CareersApplyShell>
      }
    >
      <Step1Inner />
    </Suspense>
  );
}
