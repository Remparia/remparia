"use client";

import { FormEvent, useId, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { PageHero } from "@/components/PageBits";
import {
  apiErrorToField,
  type ContactField,
  type ContactFormErrors,
  validateContactForm,
} from "@/lib/contact-form-validation";
import { CONTACT } from "@/lib/content";
import { useLang } from "@/lib/lang";

type Status = "idle" | "loading" | "success" | "error" | "config" | "rate";

const FIELD_ORDER: ContactField[] = ["name", "company", "email", "message"];

function readForm(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    company: String(data.get("company") ?? ""),
    email: String(data.get("email") ?? ""),
    message: String(data.get("message") ?? ""),
  };
}

export default function ContactPage() {
  const { lang } = useLang();
  const t = CONTACT[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const feedbackId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});

  function validate(form: HTMLFormElement) {
    const result = validateContactForm(readForm(form), t.validation);
    setFieldErrors(result.errors);
    return result;
  }

  function validateField(form: HTMLFormElement, field: ContactField) {
    const result = validateContactForm(readForm(form), t.validation);
    setFieldErrors((prev) => ({
      ...prev,
      [field]: result.errors[field],
    }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const result = validate(form);

    if (!result.valid) {
      setStatus("idle");
      const errKey = FIELD_ORDER.find((field) => result.errors[field]);
      if (errKey) {
        form.querySelector<HTMLElement>(`[name="${errKey}"]`)?.focus();
      }
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.values,
          website: new FormData(form).get("website"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus("success");
        setFieldErrors({});
        form.reset();
        return;
      }
      if (res.status === 503 || json.error === "not_configured") {
        setStatus("config");
        return;
      }
      if (res.status === 429 || json.error === "rate_limited") {
        setStatus("rate");
        return;
      }

      const apiField = apiErrorToField(json.error);
      if (apiField) {
        const fallback = validateContactForm(result.values, t.validation);
        setFieldErrors({
          [apiField]: fallback.errors[apiField] ?? t.error,
        });
        form.querySelector<HTMLElement>(`[name="${apiField}"]`)?.focus();
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const feedback =
    status === "success"
      ? t.success
      : status === "config"
        ? t.errorConfig
        : status === "rate"
          ? t.errorRate
          : status === "error" && Object.keys(fieldErrors).length === 0
            ? t.error
            : null;

  function fieldProps(field: ContactField) {
    const err = fieldErrors[field];
    const errId = `${field}-error`;
    return {
      error: err,
      describedBy: err ? errId : undefined,
      invalid: Boolean(err) || undefined,
      errId,
    };
  }

  const name = fieldProps("name");
  const company = fieldProps("company");
  const email = fieldProps("email");
  const message = fieldProps("message");

  return (
    <div className="page page--premium page--premium-inner">
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: t.title },
        ]}
      />
      <section className="section">
        <div className="contact-grid">
          <form
            className="contact-form reveal"
            onSubmit={onSubmit}
            noValidate
          >
            <label className="contact-hp">
              <span>Website</span>
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              <span>{t.fields.name}</span>
              <input
                name="name"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                aria-describedby={name.describedBy}
                aria-invalid={name.invalid}
                onBlur={(e) =>
                  validateField(e.currentTarget.form!, "name")
                }
              />
              {name.error ? (
                <span id={name.errId} className="contact-field-error" role="alert">
                  {name.error}
                </span>
              ) : null}
            </label>
            <label>
              <span>{t.fields.company}</span>
              <input
                name="company"
                required
                minLength={2}
                maxLength={160}
                autoComplete="organization"
                aria-describedby={company.describedBy}
                aria-invalid={company.invalid}
                onBlur={(e) =>
                  validateField(e.currentTarget.form!, "company")
                }
              />
              {company.error ? (
                <span id={company.errId} className="contact-field-error" role="alert">
                  {company.error}
                </span>
              ) : null}
            </label>
            <label>
              <span>{t.fields.email}</span>
              <input
                type="email"
                name="email"
                required
                maxLength={200}
                autoComplete="work email"
                inputMode="email"
                spellCheck={false}
                aria-describedby={email.describedBy}
                aria-invalid={email.invalid}
                onBlur={(e) =>
                  validateField(e.currentTarget.form!, "email")
                }
              />
              {email.error ? (
                <span id={email.errId} className="contact-field-error" role="alert">
                  {email.error}
                </span>
              ) : null}
            </label>
            <label>
              <span>{t.fields.message}</span>
              <textarea
                name="message"
                rows={5}
                required
                minLength={20}
                maxLength={5000}
                aria-describedby={message.describedBy}
                aria-invalid={message.invalid}
                onBlur={(e) =>
                  validateField(e.currentTarget.form!, "message")
                }
              />
              {message.error ? (
                <span id={message.errId} className="contact-field-error" role="alert">
                  {message.error}
                </span>
              ) : null}
            </label>
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? t.fields.sending : `${t.fields.submit} →`}
            </button>
            {feedback ? (
              <p
                id={feedbackId}
                className={
                  status === "success"
                    ? "contact-feedback contact-feedback--ok"
                    : "contact-feedback contact-feedback--err"
                }
                role={status === "success" ? "status" : "alert"}
              >
                {feedback}
              </p>
            ) : null}
            <p className="contact-privacy">
              <LocaleLink href="/confidentialite">
                {lang === "fr"
                  ? "Politique de confidentialité"
                  : "Privacy policy"}
              </LocaleLink>
            </p>
          </form>
          <div className="contact-aside reveal" data-d="2">
            <div className="section__tag">// EMAIL</div>
            <a href={`mailto:${t.email}`} className="contact-email">
              {t.email}
            </a>
            <a href={`mailto:${t.email}`} className="btn-primary">
              {t.cta} →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
