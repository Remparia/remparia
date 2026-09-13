"use client";

import LocaleLink from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import AgentFicheGrid from "@/components/AgentFicheGrid";
import { SecteurHero } from "@/components/SecteurHero";
import {
  PremiumCtaBand,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import {
  getSecteur,
  getSecteurDetail,
  getService,
  HOME,
  SECTEURS,
} from "@/lib/content";
import { getAgentsForSecteur } from "@/lib/agents";
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

  const agents = getAgentsForSecteur(slug, lang);
  const packHref =
    slug === "e-commerce" || slug === "retail-distribution"
      ? "/solutions/commerce"
      : slug === "agence-immobiliere"
        ? "/solutions/real-estate"
        : slug === "cabinet-avocat" || slug === "etude-notariale"
          ? "/solutions/legal"
          : slug === "finance-assurance" || slug === "courtier-assurance"
            ? "/solutions/finance"
            : undefined;

  const siblings = all.items.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <PremiumPageShell className="page--secteur">
      <SecteurHero
        slug={slug}
        title={detail.heroH}
        eyebrow={all.eyebrow}
        sub={detail.heroP}
        crumbs={[
          { name: home, href: "/" },
          { name: label, href: "/secteurs" },
          { name: item.title },
        ]}
        ctaLabel={labels.cta}
        secondaryLabel={
          lang === "fr" ? "Voir le protocole SIGNAL" : "See the SIGNAL protocol"
        }
      />

      <PremiumSection eyebrow={`01 / ${labels.signals}`}>
        <div className="secteur-signals">
          {detail.signals.map((signal) => (
            <div key={signal.label} className="secteur-signal">
              <div className="secteur-signal__value">{signal.value}</div>
              <div className="secteur-signal__label">{signal.label}</div>
            </div>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection light eyebrow={`02 / ${labels.pains}`} title={labels.painsH}>
        <ol className="pain-list" style={{ marginTop: 28 }}>
          {detail.pains.map((pain, index) => (
            <li key={pain.title} className="pain-list__item">
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
      </PremiumSection>

      <PremiumSection eyebrow={`03 / ${labels.deliver}`} title={labels.deliverH}>
        <ul className="detail-points ph-check" style={{ marginTop: 28 }}>
          {detail.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </PremiumSection>

      {agents.length ? (
        <PremiumSection light eyebrow={`04 / ${labels.agents}`} title={labels.agentsH}>
          <AgentFicheGrid agents={agents} packHref={packHref} />
        </PremiumSection>
      ) : null}

      <PremiumSection
        eyebrow={`05 / ${labels.scenarios}`}
        title={labels.scenariosH}
        body={labels.scenariosNote}
      >
        <div className="scenario-stack" style={{ marginTop: 28 }}>
          {detail.scenarios.map((scenario) => (
            <article key={scenario.who} className="scenario-card">
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
      </PremiumSection>

      <PremiumSection light eyebrow={`06 / ${labels.services}`} title={labels.servicesH}>
        <div className="secteur-services" style={{ marginTop: 28 }}>
          {relatedServices.map((service) => (
            <LocaleLink
              key={service.slug}
              href="/solution"
              className="secteur-service-link"
            >
              <span className="secteur-service-link__tag">{service.tag}</span>
              <strong>{service.title}</strong>
              <span aria-hidden>→</span>
            </LocaleLink>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow={`07 / ${labels.faq}`} title={labels.faqH}>
        <div className="faq-list" style={{ marginTop: 28 }}>
          {detail.faqs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection light eyebrow={`08 / ${labels.more}`} title={labels.moreH}>
        <div className="detail-siblings secteur-more" style={{ marginTop: 24 }}>
          {siblings.map((s) => (
            <LocaleLink key={s.slug} href={`/secteurs/${s.slug}`}>
              {s.title}
            </LocaleLink>
          ))}
        </div>
        <div className="detail-nav" style={{ marginTop: 24 }}>
          <LocaleLink href="/secteurs" className="text-link">
            ← {all.overview}
          </LocaleLink>
        </div>
      </PremiumSection>

      <PremiumCtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </PremiumPageShell>
  );
}
