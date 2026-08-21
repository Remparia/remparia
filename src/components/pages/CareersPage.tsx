"use client";

import LocaleLink from "@/components/LocaleLink";
import { PageHero, SectionLabel } from "@/components/PageBits";
import { getCareers } from "@/lib/careers";
import { useLang } from "@/lib/lang";

export default function CareersPage() {
  const { lang } = useLang();
  const t = getCareers(lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "Carrières" : "Careers";

  return (
    <div className="page page--inner page--careers">
      <PageHero
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

      <section id="profils" className="section">
        <div className="reveal">
          <SectionLabel>{t.rolesTag}</SectionLabel>
          <h2 className="section__title">{t.rolesTitle}</h2>
          <p className="section__body">{t.rolesSub}</p>
        </div>
        <div className="card-grid careers-roles" style={{ marginTop: 28 }}>
          {t.roles.map((roleItem, i) => (
            <article
              key={roleItem.id}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{roleItem.tag}</div>
              <h3>{roleItem.title}</h3>
              <p>{roleItem.desc}</p>
              <LocaleLink
                href={`/carrieres/candidature/1?role=${roleItem.id}`}
                className="btn-primary careers-role-pick"
              >
                {t.applyRoleCta} →
              </LocaleLink>
            </article>
          ))}
        </div>
      </section>

      <section id="philo" className="section section--alt careers-phil">
        <div className="reveal">
          <SectionLabel>{t.philTag}</SectionLabel>
          <h2 className="section__title">{t.philTitle}</h2>
          <p className="section__body">{t.philSub}</p>
        </div>
        <div className="careers-phil__grid">
          {t.phil.map((item, i) => (
            <article
              key={item.tag}
              className="careers-phil__item reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="careers-phil__tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="parcours" className="section careers-process">
        <div className="careers-launch reveal">
          <div className="section__tag">// {t.applyTitle}</div>
          <h2 className="section__title">{t.processTitle}</h2>
          <p className="section__body">{t.processSub}</p>
          <p className="section__body">{t.applyGate}</p>
        </div>
        <div className="careers-steps">
          {t.steps.map((s, i) => (
            <article
              key={s.n}
              className="careers-step reveal"
              data-d={String(Math.min(i + 1, 3))}
            >
              <div className="careers-step__head">
                <div className="careers-step__n">{s.n}</div>
                <div className="careers-step__time">{s.time}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="careers-launch__actions reveal">
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
      </section>
    </div>
  );
}
