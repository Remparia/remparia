"use client";

import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME, METHODE } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function MethodePage() {
  const { lang } = useLang();
  const t = METHODE[lang];
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
        <div className="signal-grid">
          {t.steps.map((step, i) => (
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
        <div className="conviction">
          <div className="reveal">
            <SectionLabel>{t.differenceTitle}</SectionLabel>
            <h2 className="section__title">{t.differenceH}</h2>
          </div>
          <div className="conviction__quote reveal" data-d="2">
            <p>{t.differenceP}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.acceleratorsTitle}</SectionLabel>
          <h2 className="section__title">{t.acceleratorsTitle}</h2>
          <p className="section__body">{t.acceleratorsSub}</p>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.accelerators.map((a, i) => (
            <article
              key={a.title}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
