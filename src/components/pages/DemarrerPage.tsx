"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { HOME } from "@/lib/content";
import { DEMARRER } from "@/lib/strategy";
import { useLang } from "@/lib/lang";

export default function DemarrerPage() {
  const { lang } = useLang();
  const t = DEMARRER[lang];
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const labels =
    lang === "fr"
      ? {
          forWho: "Pour qui",
          what: "Ce que c’est",
          leaveWith: "Ce que vous repartez avec",
          duration: "Durée",
          price: "Prix",
          next: "Suite",
        }
      : {
          forWho: "For whom",
          what: "What it is",
          leaveWith: "What you leave with",
          duration: "Duration",
          price: "Price",
          next: "Next",
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
        actions={
          <>
            <LocaleLink href="/contact" className="btn-primary">
              {t.ctaPrimary}
            </LocaleLink>
            <LocaleLink href="/solution" className="btn-ghost">
              {t.ctaSecondary}
            </LocaleLink>
          </>
        }
      />

      <section className="section">
        <div className="card-grid">
          {t.paths.map((path, i) => (
            <article
              key={path.tag}
              className="info-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="info-card__tag">{path.tag}</div>
              <h3>{path.title}</h3>
              <dl className="signal-card__meta" style={{ marginTop: 12 }}>
                <div>
                  <dt>{labels.forWho}</dt>
                  <dd>{path.forWho}</dd>
                </div>
                <div>
                  <dt>{labels.what}</dt>
                  <dd>{path.what}</dd>
                </div>
                <div>
                  <dt>{labels.leaveWith}</dt>
                  <dd>{path.leaveWith}</dd>
                </div>
                <div>
                  <dt>{labels.duration}</dt>
                  <dd>{path.duration}</dd>
                </div>
                <div>
                  <dt>{labels.price}</dt>
                  <dd>{path.price}</dd>
                </div>
                <div>
                  <dt>{labels.next}</dt>
                  <dd>{path.next}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.pricingTitle}</SectionLabel>
          <h2 className="section__title">{t.pricingTitle}</h2>
          <p className="section__body">{t.pricingBody}</p>
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.nextTitle}</SectionLabel>
          <h2 className="section__title">{t.nextTitle}</h2>
          <p className="section__body">{t.nextBody}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.methodTitle}</SectionLabel>
          <h2 className="section__title">{t.methodTitle}</h2>
          <p className="section__body">{t.methodBody}</p>
          <LocaleLink href="/methode" className="text-link" style={{ marginTop: 16, display: "inline-block" }}>
            {t.methodCta}
          </LocaleLink>
        </div>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} href="/contact" />
    </div>
  );
}
