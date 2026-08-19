"use client";

import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import { APROPOS, BRAND, HOME, PROOF_STATS, RESSOURCES } from "@/lib/content";
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
      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{lang === "fr" ? "CONVICTION" : "CONVICTION"}</SectionLabel>
          <h2 className="section__title">{t.convictionH}</h2>
          <p className="section__body">{t.convictionP}</p>
        </div>
      </section>

      <section className="section">
        <div className="conviction">
          <div className="reveal">
            <SectionLabel>{brand.visionTag}</SectionLabel>
            <h2 className="section__title">{brand.visionH}</h2>
          </div>
          <div className="conviction__quote reveal" data-d="2">
            <p>{brand.visionP}</p>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 64 }}>
          <SectionLabel>{brand.missionTag}</SectionLabel>
          <h2 className="section__title">{brand.missionH}</h2>
          <p className="section__body">{brand.missionP}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.teamTitle}</SectionLabel>
          <h2 className="section__title">{t.teamTitle}</h2>
          <p className="section__body">{t.teamSub}</p>
        </div>
        <div className="team-grid" style={{ marginTop: 32 }}>
          {team.map((person, i) => (
            <article
              key={person.id}
              className="team-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
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
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{brand.valuesTag}</SectionLabel>
          <h2 className="section__title">{brand.valuesH}</h2>
        </div>
        <div className="card-grid" style={{ marginTop: 32 }}>
          {brand.values.map((value, i) => (
            <article
              key={value.tag}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{value.tag}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
        <p className="section__body reveal" style={{ marginTop: 28 }}>
          {brand.guarantee}
        </p>
      </section>

      <section className="section section--alt">
        <div className="reveal">
          <SectionLabel>{t.collectiveTitle}</SectionLabel>
          <h2 className="section__title">{t.collectiveTitle}</h2>
          <p className="section__body">{t.collectiveSub}</p>
        </div>
        <div className="card-grid" style={{ marginTop: 28 }}>
          {t.collective.map((role, i) => (
            <article
              key={role.tag}
              className="info-card reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="info-card__tag">{role.tag}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal">
          <SectionLabel>{t.engagementTitle}</SectionLabel>
          <h2 className="section__title">{t.engagementTitle}</h2>
        </div>
        <ul className="proof-badges" style={{ marginTop: 24 }}>
          {t.engagement.map((line, i) => (
            <li
              key={line}
              className="proof-badges__item reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="section__body reveal" style={{ marginTop: 28 }}>
          {t.contactLine}{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`}>{LEGAL_ENTITY.email}</a>
          {" · "}
          <LocaleLink href="/mentions-legales">
            {lang === "fr" ? "Mentions légales" : "Legal notice"}
          </LocaleLink>
        </p>
      </section>

      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
