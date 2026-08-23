"use client";

import LocaleLink from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import { CtaBand, SectionLabel } from "@/components/PageBits";
import { SecteurHero } from "@/components/SecteurHero";
import {
  getSecteur,
  getSecteurDetail,
  getService,
  HOME,
  SECTEURS,
} from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function SecteurDetailPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const item = getSecteur(slug, lang);
  const detail = getSecteurDetail(slug, lang);
  const all = SECTEURS[lang];
  const labels = all.labels;
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "Secteurs" : "Industries";

  if (!item || !detail) {
    notFound();
  }

  const relatedServices = detail.serviceSlugs
    .map((s) => getService(s, lang))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const siblings = all.items.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <div className="page page--inner page--secteur">
      <SecteurHero
        slug={slug}
        title={detail.heroH}
        eyebrow={all.eyebrow}
        sub={detail.heroP}
        crumbs={[
          { name: home, href: "/" },
          { name: label, href: "/pour-qui" },
          { name: item.title },
        ]}
        ctaLabel={labels.cta}
        secondaryLabel={
          lang === "fr" ? "Voir le protocole SIGNAL" : "See the SIGNAL protocol"
        }
      />

      <section className="section secteur-signals-wrap">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.signals}</SectionLabel>
          <div className="secteur-signals">
            {detail.signals.map((signal, i) => (
              <div
                key={signal.label}
                className="secteur-signal reveal"
                data-d={String(Math.min(i + 1, 3))}
              >
                <div className="secteur-signal__value">{signal.value}</div>
                <div className="secteur-signal__label">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.pains}</SectionLabel>
          <h2 className="secteur-section-title">{labels.painsH}</h2>
          <ol className="pain-list">
            {detail.pains.map((pain, index) => (
              <li
                key={pain.title}
                className="pain-list__item reveal"
                data-d={String(Math.min(index + 1, 3))}
              >
                <span className="pain-list__num" aria-hidden>
                  {index + 1}
                </span>
                <div>
                  <h3>{pain.title}</h3>
                  <p>{pain.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.deliver}</SectionLabel>
          <h2 className="secteur-section-title">{labels.deliverH}</h2>
          <ul className="detail-points">
            {detail.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.scenarios}</SectionLabel>
          <h2 className="secteur-section-title">{labels.scenariosH}</h2>
          {labels.scenariosNote ? (
            <p className="secteur-scenarios-note">{labels.scenariosNote}</p>
          ) : null}
          <div className="scenario-stack">
            {detail.scenarios.map((scenario, i) => (
              <article
                key={scenario.who}
                className="scenario-card reveal"
                data-d={String(Math.min(i + 1, 3))}
              >
                <div className="scenario-card__who">{scenario.who}</div>
                <div className="scenario-card__block">
                  <span className="scenario-card__tag">{labels.need}</span>
                  <p>{scenario.need}</p>
                </div>
                <div className="scenario-card__block scenario-card__block--accent">
                  <span className="scenario-card__tag">{labels.remparia}</span>
                  <p>{scenario.remparia}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.services}</SectionLabel>
          <h2 className="secteur-section-title">{labels.servicesH}</h2>
          <div className="secteur-services">
            {relatedServices.map((service, i) => (
              <LocaleLink
                key={service.slug}
                href="/solution"
                className="secteur-service-link reveal"
                data-d={String(Math.min(i + 1, 3))}
              >
                <span className="secteur-service-link__tag">{service.tag}</span>
                <strong>{service.title}</strong>
                <span aria-hidden>→</span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.faq}</SectionLabel>
          <h2 className="secteur-section-title">{labels.faqH}</h2>
          <div className="faq-list">
            {detail.faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="faq-item reveal"
                data-d={String(Math.min((i % 3) + 1, 3))}
              >
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="secteur-readable reveal">
          <SectionLabel>{labels.more}</SectionLabel>
          <h2 className="secteur-section-title">{labels.moreH}</h2>
          <div className="detail-siblings secteur-more">
            {siblings.map((s) => (
              <LocaleLink key={s.slug} href={`/secteurs/${s.slug}`}>
                {s.title}
              </LocaleLink>
            ))}
          </div>
          <div className="detail-nav" style={{ marginTop: 24 }}>
            <LocaleLink href="/pour-qui" className="text-link">
              ← {all.overview}
            </LocaleLink>
          </div>
        </div>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
