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
import { POUR_QUI } from "@/lib/strategy";
import { useLang } from "@/lib/lang";

export default function PourQuiPage() {
  const { lang } = useLang();
  const t = POUR_QUI[lang];
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";

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

      <PremiumSection eyebrow={`01 / ${t.familiesTitle}`} title={t.familiesTitle}>
        <div className="ph-workforce" style={{ marginTop: 32 }}>
          {t.families.map((family) => (
            <PremiumCard
              key={family.tag}
              tag={family.tag}
              title={family.title}
              desc={family.desc}
            >
              <ul style={{ marginTop: 16, paddingLeft: 18 }}>
                {family.hrefs.map((link) => (
                  <li key={link.href}>
                    <LocaleLink href={link.href} className="text-link">
                      {link.label} →
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </PremiumCard>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        light
        eyebrow={`02 / ${t.openTitle}`}
        title={t.openTitle}
        body={t.openBody}
      />

      <PremiumSection eyebrow={`03 / ${t.notTitle}`} title={t.notTitle}>
        <ul className="ph-check" style={{ marginTop: 24 }}>
          {t.notItems.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div
          style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <LocaleLink href="/demarrer" className="btn-primary">
            {t.ctaPrimary}
          </LocaleLink>
          <LocaleLink href="/cas-d-usage" className="btn-ghost">
            {t.ctaSecondary}
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
