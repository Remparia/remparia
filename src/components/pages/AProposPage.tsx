"use client";

import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { APROPOS, HOME } from "@/lib/content";
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
        <SectionLabel>{lang === "fr" ? "CONVICTION" : "CONVICTION"}</SectionLabel>
        <h2 className="section__title">{t.convictionH}</h2>
        <p className="section__body">{t.convictionP}</p>
      </section>
      <section className="section">
        <div className="hero__pillars" style={{ borderTop: "none" }}>
          {t.pillars.map((p) => (
            <div key={p.tag} className="hero__pillar">
              <div className="hero__pillar-tag">/ {p.tag}</div>
              <div className="hero__pillar-title">{p.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section--alt">
        <h2 className="section__title">{t.positionH}</h2>
        <div className="position-grid" style={{ marginTop: 32 }}>
          {t.positions.map((p) => (
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
