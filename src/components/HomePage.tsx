"use client";

import { useState } from "react";
import Image from "next/image";
import HeroIntro from "@/components/HeroIntro";
import LocaleLink from "@/components/LocaleLink";
import { CtaBand, SectionLabel } from "@/components/PageBits";
import {
  APROPOS,
  BRAND,
  HOME,
  METHODE,
  SECTEURS,
  SERVICES,
  getSecteurImage,
} from "@/lib/content";
import { useLang } from "@/lib/lang";

type AdvantageIconName = (typeof HOME.fr.advantages)[number]["icon"];

const HOME_SECTOR_CARDS = [
  { slug: "cabinet-avocat", titleFr: "Juridique", titleEn: "Legal" },
  {
    slug: "finance-assurance",
    titleFr: "Finance & Capital-investissement",
    titleEn: "Finance & Private Equity",
  },
  {
    slug: "expertise-comptable",
    titleFr: "Experts-comptables",
    titleEn: "Accounting Firms",
  },
  {
    slug: "industrie",
    titleFr: "Industrie & Défense",
    titleEn: "Industry & Defense",
  },
  { slug: "services-conseil", titleFr: "Conseil", titleEn: "Consulting" },
  { slug: "sante", titleFr: "Santé", titleEn: "Healthcare" },
  { slug: "courtier-assurance", titleFr: "Assurance", titleEn: "Insurance" },
  { slug: "tech-produit", titleFr: "Tech", titleEn: "Tech" },
];

function AdvantageIcon({ name }: { name: AdvantageIconName }) {
  if (name === "security") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden>
        <path d="M24 5 39 11v11c0 10-6.2 17.2-15 21-8.8-3.8-15-11-15-21V11Z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    );
  }

  if (name === "performance") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden>
        <path d="M7 40h35M10 35l9-10 7 5 13-17" />
        <path d="M31 13h8v8M14 40V31M24 40V26M34 40V20" />
      </svg>
    );
  }

  if (name === "partnership") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden>
        <circle cx="16" cy="16" r="6" />
        <circle cx="32" cy="16" r="6" />
        <path d="M5 40c1-8 5-12 11-12s10 4 11 12M21 40c1-8 5-12 11-12s10 4 11 12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden>
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="5" />
      <path d="M24 3v9M24 36v9M3 24h9M36 24h9" />
    </svg>
  );
}

export default function HomePage() {
  const { lang } = useLang();
  const t = HOME[lang];
  const brand = BRAND[lang];
  const signal = METHODE[lang].steps;
  const services = SERVICES[lang].items;
  const positions = APROPOS[lang].positions;
  const sectors = SECTEURS[lang];
  const sectorsCtaLabel = sectors.discoverAll;
  const [holding, setHolding] = useState(true);

  return (
    <div className="page">
      <HeroIntro lang={lang} onComplete={() => setHolding(false)} />
      <header
        className={`hero hero--advantage${holding ? " is-holding" : ""}`}
      >
        <div className="hero__bg" aria-hidden>
          <Image
            src="/4a7fe64c-880c-4c2d-b5ff-451c58be4fc0.png"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            className="hero__bg-img"
          />
        </div>
        <div className="hero__veil" aria-hidden />
        <div className="hero__orb" aria-hidden />

        <div className="hero__grid">
          <div className="hero__main hero__main--advantage">
            <div className="hero__eyebrow reveal">
              {"// "}
              {t.eyebrow}
            </div>
            <h1 className="hero__title hero__title--advantage">
              <span className="clip">
                {t.h1a}
                {" "}
              </span>
              <span className="clip hero__title-accent" data-d="1">
                {t.h1b}
              </span>
            </h1>
            <p className="hero__lead reveal" data-d="2">
              {t.subBefore}
              <strong>{t.subAccent}</strong>
              {t.subAfter}
            </p>
            <div className="hero__actions reveal" data-d="3">
              <LocaleLink href="/contact" className="btn-primary">
                {t.cta} →
              </LocaleLink>
              <LocaleLink href="/methode" className="btn-ghost">
                SIGNAL →
              </LocaleLink>
            </div>

            <div className="hero__advantage-grid">
              {t.advantages.map((advantage, index) => (
                <article
                  key={advantage.title}
                  className="hero__advantage-card reveal"
                  data-d={String(Math.min(index + 1, 3))}
                >
                  <div className="hero__advantage-icon">
                    <AdvantageIcon name={advantage.icon} />
                  </div>
                  <h2>{advantage.title}</h2>
                  <p>{advantage.desc}</p>
                </article>
              ))}
            </div>

            <div className="hero__closing reveal" data-d="3">
              <span>{t.closingBefore}</span>
              <strong>{t.closingAccent}</strong>
            </div>
          </div>
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

      <section className="section">
        <div className="conviction">
          <div className="reveal">
            <SectionLabel>03 — {brand.visionTag}</SectionLabel>
            <h2 className="section__title">{brand.visionH}</h2>
          </div>
          <div className="conviction__quote reveal" data-d="2">
            <p>{brand.visionP}</p>
          </div>
        </div>
        <div className="reveal section-breakout section-breakout--light">
          <div className="section-breakout__inner">
            <SectionLabel>{brand.missionTag}</SectionLabel>
            <h2 className="section__title">{brand.missionH}</h2>
            <p className="section__body">{brand.missionP}</p>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 64 }}>
          <SectionLabel>{brand.valuesTag}</SectionLabel>
          <h2 className="section__title">{brand.valuesH}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 40 }}>
          {brand.values.map((value, i) => (
            <article
              key={value.tag}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{value.tag}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
        <p className="section__body reveal" style={{ marginTop: 32 }}>
          {brand.guarantee}
        </p>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>04 — {t.audience}</SectionLabel>
        </div>
        <h2 className="section__title reveal" data-d="1">
          {t.audienceH}
        </h2>
        <p className="section__body reveal" data-d="2">
          {t.audienceP}
        </p>

        <div className="home-sectors-grid" style={{ marginTop: 40 }}>
          {HOME_SECTOR_CARDS.map((sector, i) => (
            <LocaleLink
              key={sector.slug}
              href={`/secteurs/${sector.slug}`}
              className="home-sector-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <Image
                src={getSecteurImage(sector.slug)}
                alt={lang === "fr" ? sector.titleFr : sector.titleEn}
                fill
                sizes="(max-width: 960px) 100vw, (max-width: 1400px) 50vw, 25vw"
                className="home-sector-card__img"
              />
              <span className="home-sector-card__title">
                {lang === "fr" ? sector.titleFr : sector.titleEn}
              </span>
            </LocaleLink>
          ))}
        </div>

        <div className="reveal" data-d="3" style={{ marginTop: 28 }}>
          <LocaleLink href="/secteurs" className="btn-primary">
            {sectorsCtaLabel} →
          </LocaleLink>
        </div>
      </section>

      <section id="signal" className="section">
        <div className="reveal">
          <SectionLabel>05 — {t.method}</SectionLabel>
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
              data-d={String(Math.min((i % 3) + 1, 3))}
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
          <SectionLabel>06 — {t.servicesEyebrow}</SectionLabel>
        </div>
        <div className="section__head reveal" data-d="1">
          <h2 className="section__title">{t.servicesH}</h2>
          <LocaleLink href="/services" className="text-link">
            {t.servicesCta} →
          </LocaleLink>
        </div>
        <div className="card-grid">
          {services.map((service, i) => (
            <LocaleLink
              key={service.slug}
              href={`/services/${service.slug}`}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{service.tag}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </LocaleLink>
          ))}
        </div>
      </section>

      <section id="position" className="section">
        <div className="reveal">
          <SectionLabel>07 — {t.position}</SectionLabel>
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
