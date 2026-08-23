"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME } from "@/lib/content";
import { SOLUTION } from "@/lib/strategy";
import { useLang } from "@/lib/lang";

export default function SolutionPage() {
  const { lang } = useLang();
  const t = SOLUTION[lang];
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
          { name: t.eyebrow },
        ]}
        actions={
          <>
            <LocaleLink href="/demarrer" className="btn-primary">
              {t.ctaPrimary} →
            </LocaleLink>
            <LocaleLink href="/demarrer" className="btn-ghost">
              {t.ctaSecondary}
            </LocaleLink>
          </>
        }
      />

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.problemTitle}</SectionLabel>
          <h2 className="section__title">{t.problemTitle}</h2>
          <p className="section__body">{t.problemBody}</p>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.capsTitle}</SectionLabel>
          <h2 className="section__title">{t.capsTitle}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.caps.map((cap, i) => (
            <article
              key={cap.tag}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{cap.tag}</div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.teamTitle}</SectionLabel>
          <h2 className="section__title">{t.teamTitle}</h2>
          <p className="section__body">{t.teamBody}</p>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.heatmapTitle}</SectionLabel>
          <h2 className="section__title">{t.heatmapTitle}</h2>
          <p className="section__body">{t.heatmapIntro}</p>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.heatmap.map((row, i) => (
            <article
              key={row.level}
              className={`info-card reveal heatmap-card heatmap-card--${row.level}`}
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="info-card__tag">
                {row.level === "green" ? "🟢" : row.level === "amber" ? "🟡" : "🔴"}{" "}
                {row.title}
              </div>
              <p>{row.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.layersTitle}</SectionLabel>
          <h2 className="section__title">{t.layersTitle}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.layers.map((layer, i) => (
            <article
              key={layer.tag}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{layer.tag}</div>
              <h3>{layer.title}</h3>
              <p>{layer.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.securityTitle}</SectionLabel>
          <h2 className="section__title">{t.securityTitle}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.security.map((line, i) => (
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

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.principlesTitle}</SectionLabel>
          <h2 className="section__title">{t.principlesTitle}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.principles.map((line, i) => (
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
          <SectionLabel>{t.dayTitle}</SectionLabel>
          <h2 className="section__title">{t.dayTitle}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.day.map((block, i) => (
            <article
              key={block.tag}
              className="info-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="info-card__tag">{block.tag}</div>
              <h3>{block.title}</h3>
              <p>{block.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.notTitle}</SectionLabel>
          <h2 className="section__title">{t.notTitle}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.notItems.map((line, i) => (
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
          <SectionLabel>{t.deployTitle}</SectionLabel>
          <h2 className="section__title">{t.deployTitle}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {t.deploy.map((item, i) => (
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

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.bridgeTitle}</SectionLabel>
          <h2 className="section__title">{t.bridgeTitle}</h2>
          <p className="section__body">{t.bridgeBody}</p>
          <LocaleLink href="/methode" className="text-link" style={{ marginTop: 16, display: "inline-block" }}>
            {t.bridgeCta}
          </LocaleLink>
        </div>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} href="/demarrer" />
    </div>
  );
}
