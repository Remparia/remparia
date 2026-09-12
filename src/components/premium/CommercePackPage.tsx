"use client";

import AgentFicheGrid from "@/components/AgentFicheGrid";
import LocaleLink from "@/components/LocaleLink";
import { getAgentsByPack } from "@/lib/agents";
import { commerceAgentPage } from "@/lib/commerce-agent-page";
import { useLang } from "@/lib/lang";

export default function CommercePackPage() {
  const { lang } = useLang();
  const t = commerceAgentPage(lang);
  const agents = getAgentsByPack("commerce", lang);
  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <div className="page page--premium page--premium-inner page--commerce-agent">
      <header className="ph-page-hero">
        <div className="ph-shell">
          <nav className="ph-crumbs" aria-label="Breadcrumb">
            <LocaleLink href="/">{home}</LocaleLink>
            <span aria-hidden>/</span>
            <span>{t.eyebrow}</span>
          </nav>
          <p className="ph-eyebrow">{t.eyebrow}</p>
          <h1 className="ph-hero__title">
            {t.title}
            <span className="ph-accent">{t.titleAccent}</span>
          </h1>
          <p className="ph-hero__sub">{t.sub}</p>
          <div className="ph-hero__actions">
            <LocaleLink href={t.ctaPrimaryHref} className="btn-primary">
              {t.ctaPrimary} →
            </LocaleLink>
            <LocaleLink href={t.ctaSecondaryHref} className="btn-ghost">
              {t.ctaSecondary}
            </LocaleLink>
          </div>
        </div>
      </header>

      <section className="ph-section ca-proof">
        <div className="ph-shell">
          <div className="ca-proof__grid">
            {t.proof.map((item) => (
              <article key={item.label} className="ca-proof__card reveal">
                <strong className="ca-proof__value">{item.value}</strong>
                <p className="ca-proof__label">{item.label}</p>
                <span className="ca-proof__source">{item.source}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="dual">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.dual.eyebrow}</p>
          <h2 className="ph-title">{t.dual.title}</h2>
          <p className="ph-body">{t.dual.body}</p>
          <div className="ca-dual">
            {[t.dual.shopping, t.dual.merchant].map((agent) => (
              <article key={agent.title} className="ca-dual__card reveal">
                <h3>{agent.title}</h3>
                <p className="ca-dual__for">{agent.forWhom}</p>
                <p>{agent.does}</p>
                <ul className="ph-inline-tags">
                  {agent.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className="ca-dual__never">{agent.never}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="security">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.security.eyebrow}</p>
          <h2 className="ph-title">{t.security.title}</h2>
          <p className="ph-body">{t.security.body}</p>
          <div className="ca-rules">
            {t.security.rules.map((rule) => (
              <article key={rule.title} className="ca-rules__item reveal">
                <h3>{rule.title}</h3>
                <p>{rule.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="tracks">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.tracks.eyebrow}</p>
          <h2 className="ph-title">{t.tracks.title}</h2>
          <p className="ph-body">{t.tracks.body}</p>
          <div className="ca-tracks">
            <article className="ca-tracks__card reveal">
              <h3>{t.tracks.own.title}</h3>
              <p>{t.tracks.own.desc}</p>
            </article>
            <article className="ca-tracks__card reveal">
              <h3>{t.tracks.third.title}</h3>
              <p>{t.tracks.third.desc}</p>
            </article>
          </div>
          <p className="ph-note" style={{ marginTop: 18 }}>
            {t.tracks.note}
          </p>
        </div>
      </section>

      <section className="ph-section" id="offer">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.offer.eyebrow}</p>
          <h2 className="ph-title">{t.offer.title}</h2>
          <p className="ph-body">{t.offer.body}</p>
          <div className="ca-offer">
            {t.offer.steps.map((step) => (
              <article key={step.index} className="ca-offer__card reveal">
                <span className="ca-offer__index">{step.index}</span>
                <h3>{step.title}</h3>
                <p className="ca-offer__duration">{step.duration}</p>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="pilot">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.pilot.eyebrow}</p>
          <h2 className="ph-title">{t.pilot.title}</h2>
          <div className="ca-pilot">
            <div className="ca-pilot__head" aria-hidden>
              <span>{lang === "fr" ? "Semaines" : "Weeks"}</span>
              <span>{lang === "fr" ? "Ce que nous faisons" : "What we do"}</span>
              <span>{lang === "fr" ? "Ce que vous voyez" : "What you see"}</span>
            </div>
            {t.pilot.rows.map((row) => (
              <div key={row.weeks} className="ca-pilot__row reveal">
                <strong>{row.weeks}</strong>
                <p>{row.work}</p>
                <p className="ca-pilot__see">{row.see}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="training">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.training.eyebrow}</p>
          <h2 className="ph-title">{t.training.title}</h2>
          <p className="ph-body">{t.training.body}</p>
          <div className="ca-training">
            {t.training.courses.map((course) => (
              <article key={course.code} className="ca-training__card reveal">
                <span className="ca-training__code">{course.code}</span>
                <h3>{course.title}</h3>
                <p className="ca-training__meta">
                  {course.audience} · {course.duration}
                </p>
                <ul>
                  {course.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="audience">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.audience.eyebrow}</p>
          <h2 className="ph-title">{t.audience.title}</h2>
          <div className="ca-audience">
            {t.audience.segments.map((segment) => (
              <article key={segment.title} className="ca-audience__card reveal">
                <h3>{segment.title}</h3>
                <p>{segment.desc}</p>
                <p className="ca-audience__angle">{segment.angle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="agents">
        <div className="ph-shell">
          <p className="ph-eyebrow">
            {lang === "fr" ? "08 / FICHES AGENTS" : "08 / AGENT CARDS"}
          </p>
          <AgentFicheGrid agents={agents} heading={t.agentsHeading} />
          <p className="ph-note" style={{ marginTop: 24 }}>
            <LocaleLink href={t.sectorLink.href} className="text-link">
              {t.sectorLink.label} →
            </LocaleLink>
          </p>
        </div>
      </section>

      <section className="ph-final ph-section--light" id="next">
        <div className="ph-shell ph-final__inner ca-final">
          <h2 className="ph-title">{t.final.title}</h2>
          <p className="ph-body">{t.final.body}</p>
          <ol className="ca-final__steps">
            {t.final.steps.map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
          <LocaleLink href={t.ctaPrimaryHref} className="btn-primary ph-final__cta">
            {t.ctaPrimary} →
          </LocaleLink>
          <div className="ph-final__horizon" aria-hidden />
        </div>
      </section>
    </div>
  );
}
