"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME, PROOF_STATS, RESSOURCES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function RessourcesPage() {
  const { lang } = useLang();
  const t = RESSOURCES[lang];
  const stats = PROOF_STATS[lang];
  const cta = HOME[lang];

  const home = lang === "fr" ? "Accueil" : "Home";

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
        <div className="reveal">
          <SectionLabel>{t.guidesTitle}</SectionLabel>
        </div>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {t.items.map((item, i) => (
            <LocaleLink
              key={item.title}
              href={item.href}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{item.tag}</div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </LocaleLink>
          ))}
        </div>
      </section>
      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.statsTitle}</SectionLabel>
        </div>
        <div className="proof-stats reveal" data-d="2" style={{ marginTop: 24 }}>
          {stats.map((stat) => (
            <div key={stat.label} className="proof-stats__item">
              <div className="proof-stats__value">{stat.value}</div>
              <div className="proof-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
