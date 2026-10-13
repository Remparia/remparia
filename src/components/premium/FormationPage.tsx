"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { useLang } from "@/lib/lang";
import { formationPage } from "@/lib/formation-page";

export default function FormationPage() {
  const { lang } = useLang();
  const t = formationPage(lang);

  return (
    <main className="fm-page">
      <header className="fm-hero">
        <div className="fm-shell fm-hero__grid">
          <div className="fm-hero__copy">
            <p className="fm-badge">{t.badge}</p>
            <h1>
              {t.hero.titleBefore}
              <span>{t.hero.titleAccent}</span>
            </h1>
            <p className="fm-hero__body">{t.hero.body}</p>
            <div className="fm-actions">
              <LocaleLink className="offer-btn offer-btn--dark" href={t.hero.primaryHref}>
                {t.hero.primary} <span aria-hidden="true">↗</span>
              </LocaleLink>
              <a className="offer-text-link" href={t.hero.secondaryHref}>
                {t.hero.secondary} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="fm-console">
            <Image
              className="fm-console__photo"
              src="/assets/formation/formation-hero-v5.png"
              alt={t.hero.imageAlt}
              width={655}
              height={655}
              priority
            />
          </div>
        </div>
      </header>

      <div className="offer-hero-bar fm-shell">
        <span>{t.heroBar.left}</span>
        <span>
          {t.heroBar.right} <span aria-hidden="true">↓</span>
        </span>
      </div>

      <ul className="offer-pillars fm-shell" aria-hidden="true">
        {t.journey.steps.map((step) => (
          <li key={step.number}>
            <small>{step.number}</small>
            <span>{step.title}</span>
          </li>
        ))}
      </ul>

      <section className="fm-proof" aria-labelledby="fm-proof-title">
        <div className="fm-shell">
          <div className="fm-heading">
            <p className="fm-kicker">{t.proof.eyebrow}</p>
            <h2 id="fm-proof-title">
              {t.proof.titleBefore}
              <span>{t.proof.titleAccent}</span>
            </h2>
            <p>{t.proof.body}</p>
          </div>
          <div className="fm-proof__stats">
            {t.proof.stats.map((stat) => (
              <article key={stat.value}>
                <p className="fm-proof__value">{stat.value}</p>
                <p className="fm-proof__label">{stat.label}</p>
                <p className="fm-proof__source">{stat.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fm-compare" aria-labelledby="fm-compare-title">
        <div className="fm-shell">
          <div className="fm-heading fm-heading--ink">
            <p className="fm-kicker">{t.compare.eyebrow}</p>
            <h2 id="fm-compare-title">
              {t.compare.titleBefore}
              <span>{t.compare.titleAccent}</span>
            </h2>
            <p>{t.compare.body}</p>
          </div>
          <div className="fm-compare__grid">
            <article className="fm-compare__side fm-compare__side--before">
              <p className="fm-compare__label">{t.compare.beforeTitle}</p>
              <ul>
                {t.compare.before.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="fm-compare__side fm-compare__side--after">
              <p className="fm-compare__label">{t.compare.afterTitle}</p>
              <ul>
                {t.compare.after.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="fm-audiences" aria-labelledby="fm-audiences-title">
        <div className="fm-shell">
          <div className="fm-heading">
            <p className="fm-kicker">{t.audiences.eyebrow}</p>
            <h2 id="fm-audiences-title">
              {t.audiences.titleBefore}
              <span>{t.audiences.titleAccent}</span>
            </h2>
            <p>{t.audiences.body}</p>
          </div>
          <div className="fm-audiences__list">
            {t.audiences.items.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="fm-journey"
        id={lang === "fr" ? "parcours" : "journey"}
        aria-labelledby="fm-journey-title"
      >
        <div className="fm-shell">
          <div className="fm-heading fm-heading--ink">
            <p className="fm-kicker">{t.journey.eyebrow}</p>
            <h2 id="fm-journey-title">
              {t.journey.titleBefore}
              <span>{t.journey.titleAccent}</span>
            </h2>
            <p>{t.journey.body}</p>
          </div>
          <ol className="fm-journey__list">
            {t.journey.steps.map((step) => (
              <li key={step.number}>
                <span className="fm-journey__number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <p className="fm-journey__output">{step.output}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fm-deliverable" aria-labelledby="fm-deliverable-title">
        <div className="fm-shell fm-deliverable__grid">
          <div>
            <div className="fm-heading">
              <p className="fm-kicker">{t.deliverable.eyebrow}</p>
              <h2 id="fm-deliverable-title">
                {t.deliverable.titleBefore}
                <span>{t.deliverable.titleAccent}</span>
              </h2>
              <p>{t.deliverable.body}</p>
            </div>
            <ul className="fm-deliverable__list">
              {t.deliverable.list.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <article className="fm-runbook">
            <p className="fm-runbook__label">{t.deliverable.artifact.label}</p>
            <h3>{t.deliverable.artifact.title}</h3>
            <dl>
              {t.deliverable.artifact.rows.map((row) => (
                <div key={row.key}>
                  <dt>{row.key}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section className="fm-faq" aria-labelledby="fm-faq-title">
        <div className="fm-shell fm-faq__grid">
          <div>
            <p className="fm-kicker">{t.faq.eyebrow}</p>
            <h2 id="fm-faq-title">{t.faq.title}</h2>
          </div>
          <div className="fm-faq__items">
            {t.faq.items.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="fm-final">
        <div className="fm-shell fm-final__grid">
          <div className="fm-final__copy">
            <p className="fm-kicker">{t.final.eyebrow}</p>
            <h2>
              {t.final.titleBefore}
              <span>{t.final.titleAccent}</span>
            </h2>
            <p>{t.final.body}</p>
            <LocaleLink className="fm-final__cta" href={t.final.href}>
              {t.final.cta} <span aria-hidden="true">→</span>
            </LocaleLink>
          </div>
          <figure className="fm-final__media">
            <video
              className="fm-final__video"
              src="/assets/ged/faq-questions.mp4"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden="true"
              tabIndex={-1}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
