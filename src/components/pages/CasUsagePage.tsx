"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME } from "@/lib/content";
import { CAS_USAGE } from "@/lib/strategy";
import { useLang } from "@/lib/lang";

export default function CasUsagePage() {
  const { lang } = useLang();
  const t = CAS_USAGE[lang];
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const labels =
    lang === "fr"
      ? {
          today: "Aujourd’hui",
          withAgent: "Avec l’agent",
          never: "Ce qu’il ne fait jamais",
          measure: "Ce qu’on mesure",
        }
      : {
          today: "Today",
          withAgent: "With the agent",
          never: "What it never does",
          measure: "What we measure",
        };

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
        <div className="card-grid">
          {t.items.map((item, i) => (
            <article
              key={item.slug}
              id={item.slug}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3>{item.process}</h3>
              <dl className="signal-card__meta" style={{ marginTop: 12 }}>
                <div>
                  <dt>{labels.today}</dt>
                  <dd>{item.today}</dd>
                </div>
                <div>
                  <dt>{labels.withAgent}</dt>
                  <dd>{item.withAgent}</dd>
                </div>
                <div>
                  <dt>{labels.never}</dt>
                  <dd>{item.never}</dd>
                </div>
                <div>
                  <dt>{labels.measure}</dt>
                  <dd>{item.measure}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.osLine}</SectionLabel>
          <p className="section__body">{t.banner}</p>
          <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <LocaleLink href="/demarrer" className="btn-primary">
              {t.ctaPrimary}
            </LocaleLink>
            <LocaleLink href="/solution" className="btn-ghost">
              {t.osCta}
            </LocaleLink>
          </div>
        </div>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} href="/demarrer" />
    </div>
  );
}
