"use client";

import LocaleLink from "@/components/LocaleLink";
import AgentFicheGrid from "@/components/AgentFicheGrid";
import {
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { HOME } from "@/lib/content";
import { getFlagshipAgent } from "@/lib/agents";
import { CAS_USAGE } from "@/lib/strategy";
import {
  getUseCaseContext,
  USE_CASE_CONTEXT_COPY,
} from "@/lib/use-case-context";
import { useLang } from "@/lib/lang";

export default function CasUsagePage() {
  const { lang } = useLang();
  const t = CAS_USAGE[lang];
  const cta = HOME[lang];
  const contextLabels = USE_CASE_CONTEXT_COPY[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const flagship = getFlagshipAgent(lang);
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
    <PremiumPageShell>
      <PremiumHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: t.eyebrow },
        ]}
      />

      <PremiumSection
        light
        eyebrow="01 / FLAGSHIP"
        title={
          lang === "fr"
            ? "L’Agent Commerce, en tête"
            : "The Commerce Agent, first"
        }
        body={
          lang === "fr"
            ? "Qualification, relances et CRM : le premier agent à industrialiser quand le réseau commercial est le levier."
            : "Qualification, follow-up and CRM: the first agent to industrialize when the sales network is the lever."
        }
      >
        <AgentFicheGrid agents={[flagship]} packHref="/solutions/commerce" />
      </PremiumSection>

      <PremiumSection
        eyebrow={lang === "fr" ? "02 / CAS" : "02 / CASES"}
        title={lang === "fr" ? "Processus concrètes" : "Concrete processes"}
      >
        <div className="use-case-grid" style={{ marginTop: 28 }}>
          {t.items.map((item, i) => {
            const context = getUseCaseContext(item.slug, lang);
            return (
              <article key={item.slug} id={item.slug} className="use-case-card">
                <div className="use-case-card__head">
                  <div className="ph-agent-card__tag">
                    UC-{String(i + 1).padStart(2, "0")}
                  </div>
                  {context ? (
                    <div className="use-case-card__agent">
                      <span>{contextLabels.agent}</span>
                      <strong>{context.agent}</strong>
                    </div>
                  ) : null}
                </div>
                <h2>{item.process}</h2>
                {context ? (
                  <>
                    <div className="use-case-card__sectors">
                      <span>{contextLabels.sectors}</span>
                      <div>
                        {context.sectors.map((sector) => (
                          <LocaleLink
                            key={sector.slug}
                            href={`/secteurs/${sector.slug}`}
                          >
                            {sector.label}
                          </LocaleLink>
                        ))}
                      </div>
                    </div>
                    <div className="use-case-flow">
                      <span className="use-case-flow__label">
                        {contextLabels.workflow}
                      </span>
                      <ol>
                        {context.workflow.map((step, stepIndex) => (
                          <li key={step}>
                            <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </>
                ) : null}
                <dl className="use-case-card__details">
                  <div>
                    <dt>{labels.today}</dt>
                    <dd>{item.today}</dd>
                  </div>
                  <div className="use-case-card__details-agent">
                    <dt>{labels.withAgent}</dt>
                    <dd>{item.withAgent}</dd>
                  </div>
                  <div>
                    <dt>{labels.never}</dt>
                    <dd>{item.never}</dd>
                  </div>
                  <div className="use-case-card__details-metric">
                    <dt>{labels.measure}</dt>
                    <dd>{item.measure}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection light eyebrow={`03 / ${t.osLine}`} body={t.banner}>
        <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <LocaleLink href="/demarrer" className="btn-primary">
            {t.ctaPrimary}
          </LocaleLink>
          <LocaleLink href="/solution" className="btn-ghost">
            {t.osCta}
          </LocaleLink>
        </div>
      </PremiumSection>

      <PremiumCtaBand
        tag={cta.ctaTag}
        title={cta.ctaH}
        text={cta.ctaP}
        href="/demarrer"
      />
    </PremiumPageShell>
  );
}
