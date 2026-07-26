"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { CtaBand, SectionLabel } from "@/components/PageBits";
import StatCount from "@/components/StatCount";
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
            quality={100}
            unoptimized
            sizes="100vw"
            className="hero__bg-img"
          />
        </div>
        <div className="hero__veil" aria-hidden />
        <div className="hero__orb" aria-hidden />

        <div className="hero__grid">
          <div className="hero__main">
            <div className="hero__eyebrow reveal">// {t.eyebrow}</div>
            <div className="hero__title">
              <div className="clip">{t.h1a}</div>
              <div className="clip hero__title-outline" data-d="1">
                {t.h1b}
              </div>
            </div>
            <p className="hero__sub reveal" data-d="2">
              {t.sub}
            </p>
            <div className="hero__actions reveal" data-d="3">
              <LocaleLink href="/contact" className="btn-primary">
                {t.cta} →
              </LocaleLink>
              <LocaleLink href="/methode" className="btn-ghost">
                SIGNAL →
              </LocaleLink>
            </div>
          </div>

          <div className="hero__stats reveal" data-d="2">
            <div className="hero__stats-label">// {t.constat}_</div>
            {stats.map((s) => (
              <div key={s.value + s.label} className="hero__stat">
                <StatCount
                  value={s.value}
                  color={s.color}
                  className="hero__stat-value"
                />
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__pillars">
          {pillars.map((p, i) => (
            <div
              key={p.tag}
              className="hero__pillar reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="hero__pillar-tag">/ {p.tag}</div>
              <div className="hero__pillar-title">{p.title}</div>
            </div>
          ))}
        </div>
      </header>

      <section id="constat" className="section">
        <div className="reveal">
          <SectionLabel>01 — {t.constat}</SectionLabel>
        </div>
        <h2 className="section__title reveal" data-d="1">
          {t.constatH}
        </h2>
        <p className="section__body reveal" data-d="2">
          {t.constatP}
        </p>
      </section>

      <section className="section section--alt">
        <div className="conviction">
          <div className="reveal">
            <SectionLabel>02 — {t.conviction}</SectionLabel>
            <h2 className="section__title">
              {t.convH1}{" "}
              <span className="conviction__accent">{t.convH2}</span>
            </h2>
          </div>
          <div className="conviction__quote reveal" data-d="2">
            <p>{t.convP}</p>
          </div>
        </div>
      </section>

      <section id="signal" className="section">
        <div className="reveal">
          <SectionLabel>03 — {t.method}</SectionLabel>
        </div>
        <div className="section__head reveal" data-d="1">
          <h2 className="section__title">{t.methodH}</h2>
          <LocaleLink href="/methode" className="text-link">
            {t.methodCta} →
          </LocaleLink>
        </div>
        <div className="signal-grid">
          {signal.map((step, i) => (
            <div
              key={step.letter}
              className="signal-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
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
        <div className="reveal">
          <SectionLabel>{t.servicesEyebrow}</SectionLabel>
        </div>
        <div className="section__head reveal" data-d="1">
          <h2 className="section__title">{t.servicesH}</h2>
          <LocaleLink href="/services" className="text-link">
            {t.servicesCta} →
          </LocaleLink>
        </div>
        <div className="card-grid">
          {services.map((s, i) => (
            <LocaleLink
              key={s.slug}
              href={`/services/${s.slug}`}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </LocaleLink>
          ))}
        </div>
      </section>

      <section id="position" className="section">
        <div className="reveal">
          <SectionLabel>04 — {t.position}</SectionLabel>
        </div>
        <h2 className="section__title reveal" data-d="1">
          {t.positionH}
        </h2>
        <div className="position-grid">
          {positions.map((p, i) => (
            <div
              key={p.tag}
              className="position-card reveal"
              data-d={String(Math.min(i + 1, 3))}
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
