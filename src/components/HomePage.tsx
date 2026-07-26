"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand, SectionLabel } from "@/components/PageBits";
import {
  APROPOS,
  HOME,
  METHODE,
  PILLARS,
  SERVICES,
  STATS,
} from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function HomePage() {
  const { lang } = useLang();
  const t = HOME[lang];
  const stats = STATS[lang];
  const pillars = PILLARS[lang];
  const signal = METHODE[lang].steps;
  const positions = APROPOS[lang].positions;
  const services = SERVICES[lang].items.slice(0, 4);

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__bg" aria-hidden>
          <Image
            src="/hero-temporal.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__bg-img"
          />
        </div>
        <div className="hero__veil" aria-hidden />
        <div className="hero__orb" aria-hidden />

        <div className="hero__grid">
          <div className="hero__main">
            <div className="hero__eyebrow">// {t.eyebrow}</div>
            <div className="hero__title">
              <div className="clip in">{t.h1a}</div>
              <div className="clip in hero__title-outline">{t.h1b}</div>
            </div>
            <p className="hero__sub">{t.sub}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn-primary">
                {t.cta} →
              </Link>
              <Link href="/methode" className="btn-ghost">
                SIGNAL →
              </Link>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stats-label">// {t.constat}_</div>
            {stats.map((s) => (
              <div key={s.value + s.label} className="hero__stat">
                <div className="hero__stat-value" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__pillars">
          {pillars.map((p) => (
            <div key={p.tag} className="hero__pillar">
              <div className="hero__pillar-tag">/ {p.tag}</div>
              <div className="hero__pillar-title">{p.title}</div>
            </div>
          ))}
        </div>
      </header>

      <section id="constat" className="section">
        <SectionLabel>01 — {t.constat}</SectionLabel>
        <h2 className="section__title">{t.constatH}</h2>
        <p className="section__body">{t.constatP}</p>
      </section>

      <section className="section section--alt">
        <div className="conviction">
          <div>
            <SectionLabel>02 — {t.conviction}</SectionLabel>
            <h2 className="section__title">
              {t.convH1}{" "}
              <span className="conviction__accent">{t.convH2}</span>
            </h2>
          </div>
          <div className="conviction__quote">
            <p>{t.convP}</p>
          </div>
        </div>
      </section>

      <section id="signal" className="section">
        <SectionLabel>03 — {t.method}</SectionLabel>
        <div className="section__head">
          <h2 className="section__title">{t.methodH}</h2>
          <Link href="/methode" className="text-link">
            {t.methodCta} →
          </Link>
        </div>
        <div className="signal-grid">
          {signal.map((step) => (
            <div key={step.letter} className="signal-card">
              <div className="signal-card__letter">{step.letter}</div>
              <div>
                <div className="signal-card__title">{step.title}</div>
                <div className="signal-card__desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <SectionLabel>{t.servicesEyebrow}</SectionLabel>
        <div className="section__head">
          <h2 className="section__title">{t.servicesH}</h2>
          <Link href="/services" className="text-link">
            {t.servicesCta} →
          </Link>
        </div>
        <div className="card-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="info-card">
              <div className="info-card__tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="position" className="section">
        <SectionLabel>04 — {t.position}</SectionLabel>
        <h2 className="section__title">{t.positionH}</h2>
        <div className="position-grid">
          {positions.map((p) => (
            <div
              key={p.tag}
              className="position-card"
              style={{
                border: `1px solid ${p.highlight ? "#c8ff00" : "rgba(255,255,255,.12)"}`,
                background: p.highlight ? "rgba(200,255,0,.07)" : "transparent",
              }}
            >
              <div
                className="position-card__tag"
                style={{
                  color: p.highlight ? "#c8ff00" : "rgba(255,255,255,.5)",
                }}
              >
                {p.tag}
              </div>
              <div>
                <div
                  className="position-card__title"
                  style={{ color: p.highlight ? "#c8ff00" : "#fff" }}
                >
                  {p.title}
                </div>
                <div
                  className="position-card__desc"
                  style={{ color: "rgba(255,255,255,.55)" }}
                >
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand tag={t.ctaTag} title={t.ctaH} text={t.ctaP} />
    </div>
  );
}
