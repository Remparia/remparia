"use client";

import { FormEvent, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { PageHero } from "@/components/PageBits";
import { CONTACT } from "@/lib/content";
import { useLang } from "@/lib/lang";

type Status = "idle" | "loading" | "success" | "error" | "config" | "rate";

export default function ContactPage() {
  const { lang } = useLang();
  const t = CONTACT[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus("success");
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
          : status === "error"
            ? t.error
            : null;

  return (
    <div className="page page--inner">
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
          <form className="contact-form reveal" onSubmit={onSubmit}>
            <label className="contact-hp" aria-hidden="true">
              <span>Website</span>
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              <span>{t.fields.name}</span>
              <input name="name" required maxLength={120} />
            </label>
            <label>
              <span>{t.fields.company}</span>
              <input name="company" maxLength={160} />
            </label>
            <label>
              <span>{t.fields.email}</span>
              <input type="email" name="email" required maxLength={200} />
            </label>
            <label>
              <span>{t.fields.message}</span>
              <textarea name="message" rows={5} required minLength={10} maxLength={5000} />
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
                className={
                  status === "success"
                    ? "contact-feedback contact-feedback--ok"
                    : "contact-feedback contact-feedback--err"
                }
                role="status"
              >
                {feedback}
              </p>
            ) : null}
            <p className="contact-privacy">
              <LocaleLink href="/confidentialite">
                {lang === "fr" ? "Politique de confidentialité" : "Privacy policy"}
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
