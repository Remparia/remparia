"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME, METHODE, PROOF_STATS } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function MethodePage() {
  const { lang } = useLang();
  const t = METHODE[lang];
  const stats = PROOF_STATS[lang];
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

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.aloneTitle}</SectionLabel>
          <h2 className="section__title">{t.aloneTitle}</h2>
          <p className="section__body">{t.aloneBody}</p>
          <LocaleLink href="/solution" className="text-link" style={{ marginTop: 16, display: "inline-block" }}>
            {t.aloneCta}
          </LocaleLink>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.protocolTitle}</SectionLabel>
          <h2 className="section__title">{t.protocolTitle}</h2>
          <p className="section__body">{t.protocolIntro}</p>
        </div>
        <div className="signal-grid" style={{ marginTop: 32 }}>
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
                {"deliverable" in step ? (
                  <dl className="signal-card__meta">
                    <div>
                      <dt>{lang === "fr" ? "Livrable" : "Deliverable"}</dt>
                      <dd>{step.deliverable}</dd>
                    </div>
                    <div>
                      <dt>{lang === "fr" ? "Délai" : "Timeline"}</dt>
                      <dd>{step.timeline}</dd>
                    </div>
                    <div>
                      <dt>{lang === "fr" ? "Artefacts" : "Artifacts"}</dt>
                      <dd>{step.artifacts}</dd>
                    </div>
                  </dl>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.governanceTitle}</SectionLabel>
          <h2 className="section__title">{t.governanceH}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.governanceItems.map((line, i) => (
            <li
              key={line}
              className="proof-badges__item reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.proofTitle}</SectionLabel>
        </div>
        <div className="proof-stats reveal" data-d="2">
          {stats.map((stat) => (
            <div key={stat.label} className="proof-stats__item">
              <div className="proof-stats__value">{stat.value}</div>
              <div className="proof-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.differenceTitle}</SectionLabel>
          <h2 className="section__title">{t.differenceH}</h2>
          <p className="section__body">{t.differenceP}</p>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.acceleratorsTitle}</SectionLabel>
          <h2 className="section__title">{t.acceleratorsTitle}</h2>
          <p className="section__body">{t.acceleratorsSub}</p>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.accelerators.map((item, i) => (
            <article
              key={item.title}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} href="/demarrer" />
    </div>
  );
}
