"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME } from "@/lib/content";
import { POUR_QUI } from "@/lib/strategy";
import { useLang } from "@/lib/lang";

export default function PourQuiPage() {
  const { lang } = useLang();
  const t = POUR_QUI[lang];
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <div className="page page--premium page--premium-inner">
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: t.eyebrow },
        ]}
      />

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.familiesTitle}</SectionLabel>
          <h2 className="section__title">{t.familiesTitle}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.families.map((family, i) => (
            <article
              key={family.tag}
              className="info-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="info-card__tag">{family.tag}</div>
              <h3>{family.title}</h3>
              <p>{family.desc}</p>
              <ul style={{ marginTop: 16, paddingLeft: 18 }}>
                {family.hrefs.map((link) => (
                  <li key={link.href}>
                    <LocaleLink href={link.href} className="text-link">
                      {link.label} →
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.openTitle}</SectionLabel>
          <h2 className="section__title">{t.openTitle}</h2>
          <p className="section__body">{t.openBody}</p>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.notTitle}</SectionLabel>
          <h2 className="section__title">{t.notTitle}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.notItems.map((line, i) => (
            <li
              key={line}
              className="proof-badges__item reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              {line}
            </li>
          ))}
        </ul>
        <div className="reveal" data-d="2" style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <LocaleLink href="/demarrer" className="btn-primary">
            {t.ctaPrimary}
          </LocaleLink>
          <LocaleLink href="/cas-d-usage" className="btn-ghost">
            {t.ctaSecondary}
          </LocaleLink>
        </div>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} href="/demarrer" />
    </div>
  );
}
