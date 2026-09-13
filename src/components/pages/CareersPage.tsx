"use client";

import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCard,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { getCareers } from "@/lib/careers";
import { useLang } from "@/lib/lang";

export default function CareersPage() {
  const { lang } = useLang();
  const t = getCareers(lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "Carrières" : "Careers";

  return (
    <PremiumPageShell className="page--careers">
      <PremiumHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: label },
        ]}
        actions={
          <>
            <ul className="careers-hero__meta" aria-label={t.processTitle}>
              {t.heroMeta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="careers-hero__cta">
              <LocaleLink href="/carrieres/candidature/1" className="btn-primary">
                {t.heroCta} →
              </LocaleLink>
              <a href="#profils" className="btn-ghost">
                {t.heroSecondary} →
              </a>
            </div>
          </>
        }
      />

      <PremiumSection
        id="profils"
        eyebrow={`01 / ${t.rolesTag}`}
        title={t.rolesTitle}
        body={t.rolesSub}
      >
        <div className="ph-workforce careers-roles" style={{ marginTop: 28 }}>
          {t.roles.map((roleItem) => (
            <PremiumCard
              key={roleItem.id}
              tag={roleItem.tag}
              title={roleItem.title}
              desc={roleItem.desc}
            >
              <LocaleLink
                href={`/carrieres/candidature/1?role=${roleItem.id}`}
                className="btn-primary careers-role-pick"
                style={{ marginTop: 16 }}
              >
                {t.applyRoleCta} →
              </LocaleLink>
            </PremiumCard>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="philo"
        light
        eyebrow={`02 / ${t.philTag}`}
        title={t.philTitle}
        body={t.philSub}
        className="careers-phil"
      >
        <div className="careers-phil__grid" style={{ marginTop: 28 }}>
          {t.phil.map((item) => (
            <article key={item.tag} className="careers-phil__item">
              <div className="careers-phil__tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="parcours"
        eyebrow={`03 / ${t.applyTitle}`}
        title={t.processTitle}
        body={t.processSub}
        className="careers-process"
      >
        <p className="ph-body">{t.applyGate}</p>
        <div className="careers-steps" style={{ marginTop: 28 }}>
          {t.steps.map((s) => (
            <article key={s.n} className="careers-step">
              <div className="careers-step__head">
                <div className="careers-step__n">{s.n}</div>
                <div className="careers-step__time">{s.time}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="careers-launch__actions" style={{ marginTop: 32 }}>
          <LocaleLink
            href="/carrieres/candidature/1"
            className="btn-primary careers-process__cta"
          >
            {t.applyCta} →
          </LocaleLink>
          <LocaleLink
            href="/carrieres/candidature/1?role=spontaneous"
            className="btn-ghost careers-process__ghost"
          >
            {t.fields.roleSpontaneous} →
          </LocaleLink>
        </div>
      </PremiumSection>
    </PremiumPageShell>
  );
}
