"use client";

import { PageHero } from "@/components/PageBits";
import { CONTACT } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function ContactPage() {
  const { lang } = useLang();
  const t = CONTACT[lang];

  return (
    <div className="page page--inner">
      <PageHero eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="section">
        <div className="contact-grid">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${t.email}`;
            }}
          >
            <label>
              <span>{t.fields.name}</span>
              <input name="name" required />
            </label>
            <label>
              <span>{t.fields.company}</span>
              <input name="company" />
            </label>
            <label>
              <span>{t.fields.email}</span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span>{t.fields.message}</span>
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="btn-primary">
              {t.fields.submit} →
            </button>
          </form>
          <div className="contact-aside">
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
