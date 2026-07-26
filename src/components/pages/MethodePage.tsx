"use client";

import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME, METHODE } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function MethodePage() {
  const { lang } = useLang();
  const t = METHODE[lang];
  const cta = HOME[lang];

  return (
    <div className="page page--inner">
      <PageHero eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="section">
        <div className="signal-grid">
          {t.steps.map((step) => (
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
        <SectionLabel>{t.acceleratorsTitle}</SectionLabel>
        <h2 className="section__title">{t.acceleratorsTitle}</h2>
        <p className="section__body">{t.acceleratorsSub}</p>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.accelerators.map((a) => (
            <article key={a.title} className="info-card">
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
