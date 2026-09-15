"use client";

import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCard,
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { APROPOS, BRAND, HOME } from "@/lib/content";
import { LEGAL_ENTITY } from "@/lib/legal";
import { useLang } from "@/lib/lang";
import { getTeamMembers } from "@/lib/team";

export default function AProposPage() {
  const { lang } = useLang();
  const t = APROPOS[lang];
  const brand = BRAND[lang];
  const cta = HOME[lang];
  const team = getTeamMembers(lang);

  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "À propos" : "About";

  return (
    <PremiumPageShell className="page--apropos">
      <PremiumHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: label },
        ]}
      />
      <PremiumSection
        light
        eyebrow={lang === "fr" ? "01 / CONVICTION" : "01 / CONVICTION"}
        title={t.convictionH}
        body={t.convictionP}
      />

      <PremiumSection eyebrow={`02 / ${brand.visionTag}`} title={brand.visionH}>
        <div className="conviction__quote" style={{ marginTop: 28 }}>
          <p>{brand.visionP}</p>
        </div>
        <p className="ph-eyebrow" style={{ marginTop: 64 }}>
          {brand.missionTag}
        </p>
        <h2 className="ph-title">{brand.missionH}</h2>
        <p className="ph-body">{brand.missionP}</p>
      </PremiumSection>

      <PremiumSection
        light
        eyebrow={`03 / ${t.teamTitle}`}
        title={t.teamTitle}
        body={t.teamSub}
      >
        <div className="team-grid" style={{ marginTop: 32 }}>
          {team.map((person) => (
            <article key={person.id} className="team-card">
              <div className="team-card__initial" aria-hidden>
                {person.name
                  .split(/\s+/)
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <h3 className="team-card__name">{person.name}</h3>
              <div className="team-card__role">{person.role}</div>
              <p className="team-card__bio">{person.bio}</p>
              <p className="team-card__cred">{person.credentials}</p>
              {person.linkedin ? (
                <a
                  href={person.linkedin}
                  className="text-link team-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow={`04 / ${brand.valuesTag}`} title={brand.valuesH}>
        <div className="ph-workforce" style={{ marginTop: 32 }}>
          {brand.values.map((value) => (
            <PremiumCard
              key={value.tag}
              tag={value.tag}
              title={value.title}
              desc={value.desc}
            />
          ))}
        </div>
        <p className="ph-body" style={{ marginTop: 28 }}>
          {brand.guarantee}
        </p>
      </PremiumSection>

      <PremiumSection
        light
        eyebrow={`05 / ${t.collectiveTitle}`}
        title={t.collectiveTitle}
        body={t.collectiveSub}
      >
        <div className="ph-workforce" style={{ marginTop: 28 }}>
          {t.collective.map((role) => (
            <PremiumCard
              key={role.tag}
              tag={role.tag}
              title={role.title}
              desc={role.desc}
            />
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="engagements"
        className="ap-commitments-section"
        backgroundSrc="/apropos-commitments-bg.jpg"
        eyebrow={`06 / ${t.engagementTitle}`}
        title={t.engagementTitle}
      >
        <ul className="ph-check" style={{ marginTop: 24 }}>
          {t.engagement.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="ph-body" style={{ marginTop: 28 }}>
          {t.contactLine}{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`}>{LEGAL_ENTITY.email}</a>
          {" · "}
          <LocaleLink href="/mentions-legales">
            {lang === "fr" ? "Mentions légales" : "Legal notice"}
          </LocaleLink>
        </p>
      </PremiumSection>

      <PremiumCtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </PremiumPageShell>
  );
}
