"use client";

import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCard,
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
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
    <PremiumPageShell>
      <PremiumHero
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

      <PremiumSection
        eyebrow={lang === "fr" ? "01 / PARCOURS" : "01 / PATHS"}
        title={lang === "fr" ? "Choisir comment démarrer" : "Choose how to start"}
      >
        <div className="ph-workforce" style={{ marginTop: 28 }}>
          {t.paths.map((path) => (
            <PremiumCard key={path.tag} tag={path.tag} title={path.title}>
              <dl className="ph-audit" style={{ marginTop: 12 }}>
                <div className="ph-audit__row">
                  <span>{labels.forWho}</span>
                  <strong>{path.forWho}</strong>
                </div>
                <div className="ph-audit__row">
                  <span>{labels.what}</span>
                  <strong>{path.what}</strong>
                </div>
                <div className="ph-audit__row">
                  <span>{labels.leaveWith}</span>
                  <strong>{path.leaveWith}</strong>
                </div>
                <div className="ph-audit__row">
                  <span>{labels.duration}</span>
                  <strong>{path.duration}</strong>
                </div>
                <div className="ph-audit__row">
                  <span>{labels.price}</span>
                  <strong>{path.price}</strong>
                </div>
                <div className="ph-audit__row">
                  <span>{labels.next}</span>
                  <strong>{path.next}</strong>
                </div>
              </dl>
            </PremiumCard>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection light eyebrow={`02 / ${t.pricingTitle}`} title={t.pricingTitle} body={t.pricingBody} />

      <PremiumSection eyebrow={`03 / ${t.nextTitle}`} title={t.nextTitle} body={t.nextBody}>
        <div id="agentops" className="ph-workforce" style={{ marginTop: 28 }}>
          {t.nextSteps.map((step) => (
            <PremiumCard key={step.tag} tag={step.tag} title={step.title} desc={step.desc} />
          ))}
        </div>
        <p style={{ marginTop: 20 }}>
          <LocaleLink href="/solution" className="text-link">
            {lang === "fr"
              ? "Voir AgentOps dans les offres Remparia OS →"
              : "See AgentOps in Remparia OS offers →"}
          </LocaleLink>
        </p>
      </PremiumSection>

      <PremiumSection light eyebrow={`04 / ${t.methodTitle}`} title={t.methodTitle} body={t.methodBody}>
        <LocaleLink
          href="/signal"
          className="text-link"
          style={{ marginTop: 16, display: "inline-block" }}
        >
          {t.methodCta}
        </LocaleLink>
      </PremiumSection>

      <PremiumCtaBand
        tag={cta.ctaTag}
        title={cta.ctaH}
        text={cta.ctaP}
        href="/contact"
      />
    </PremiumPageShell>
  );
}
