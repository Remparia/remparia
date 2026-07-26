"use client";

import { CtaBand, PageHero } from "@/components/PageBits";
import { HOME, REALISATIONS } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function RealisationsPage() {
  const { lang } = useLang();
  const t = REALISATIONS[lang];
  const cta = HOME[lang];

  return (
    <div className="page page--inner">
      <PageHero eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="section">
        <div className="stack-cards">
          {t.items.map((item) => (
            <article key={item.tag} className="stack-card stack-card--case">
              <div className="stack-card__tag">{item.tag}</div>
              <div>
                <div className="case-metric">{item.metric}</div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="section__body" style={{ marginTop: 28 }}>
          {t.note}
        </p>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
