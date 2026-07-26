"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { APROPOS, HOME } from "@/lib/content";
import { LEGAL_ENTITY } from "@/lib/legal";
import { useLang } from "@/lib/lang";

export default function AProposPage() {
  const { lang } = useLang();
  const t = APROPOS[lang];
  const cta = HOME[lang];

  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "À propos" : "About";

  return (
    <div className="page page--inner">
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: label },
        ]}
      />
      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{lang === "fr" ? "CONVICTION" : "CONVICTION"}</SectionLabel>
          <h2 className="section__title">{t.convictionH}</h2>
          <p className="section__body">{t.convictionP}</p>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.collectiveTitle}</SectionLabel>
          <h2 className="section__title">{t.collectiveTitle}</h2>
          <p className="section__body">{t.collectiveSub}</p>
        </div>
        <div className="card-grid" style={{ marginTop: 28 }}>
          {t.collective.map((role, i) => (
            <article
              key={role.tag}
              className="info-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="info-card__tag">{role.tag}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.engagementTitle}</SectionLabel>
          <h2 className="section__title">{t.engagementTitle}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.engagement.map((line, i) => (
            <li
              key={line}
              className="proof-badges__item reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="section__body reveal" style={{ marginTop: 28 }}>
          {t.contactLine}{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`}>{LEGAL_ENTITY.email}</a>
          {" · "}
          <LocaleLink href="/mentions-legales">
            {lang === "fr" ? "Mentions légales" : "Legal notice"}
          </LocaleLink>
        </p>
      </section>

      <section className="section">
        <div className="hero__pillars" style={{ borderTop: "none" }}>
          {t.pillars.map((p, i) => (
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
      </section>
      <section className="section section--alt">
        <h2 className="section__title reveal">{t.positionH}</h2>
        <div className="position-grid" style={{ marginTop: 32 }}>
          {t.positions.map((p, i) => (
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
                style={{ color: p.highlight ? "#c8ff00" : "rgba(255,255,255,.5)" }}
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
                <div className="position-card__desc" style={{ color: "rgba(255,255,255,.55)" }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
