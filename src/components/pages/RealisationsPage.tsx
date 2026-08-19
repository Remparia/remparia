"use client";

import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME, REALISATIONS } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function RealisationsPage() {
  const { lang } = useLang();
  const t = REALISATIONS[lang];
  const cta = HOME[lang];

  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "Cas d'usage" : "Use cases";

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

      <div className="content-notice reveal" role="note">
        {t.disclaimer}
      </div>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.proofsTitle}</SectionLabel>
        </div>
        <ul className="proof-badges">
          {t.proofs.map((p, i) => (
            <li
              key={p}
              className="proof-badges__item reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="stack-cards">
          {t.items.map((item, i) => (
            <article
              key={item.tag}
              className="stack-card stack-card--case reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="stack-card__tag">{item.tag}</div>
              <div>
                <div className="case-metric">{item.metric}</div>
                <h2>{item.title}</h2>
                <dl className="case-meta">
                  <div>
                    <dt>{t.labels.context}</dt>
                    <dd>{item.context}</dd>
                  </div>
                  <div>
                    <dt>{t.labels.problem}</dt>
                    <dd>{item.problem}</dd>
                  </div>
                  <div>
                    <dt>{t.labels.approach}</dt>
                    <dd>{item.approach}</dd>
                  </div>
                  <div>
                    <dt>{t.labels.result}</dt>
                    <dd>{item.result}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <p className="section__body reveal" style={{ marginTop: 28 }}>
          {t.note}
        </p>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
