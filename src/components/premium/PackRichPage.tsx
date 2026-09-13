"use client";

import Image from "next/image";
import AgentFicheGrid from "@/components/AgentFicheGrid";
import LocaleLink from "@/components/LocaleLink";
import { PremiumHero } from "@/components/premium/PremiumShell";
import { getAgentsByPack, type AgentPack } from "@/lib/agents";
import type { PackRichPageCopy } from "@/lib/pack-rich-page";
import { getSecteurMeta } from "@/lib/secteurs-meta";
import { useLang } from "@/lib/lang";

export default function PackRichPage({
  pack,
  copy,
}: {
  pack: AgentPack;
  copy: PackRichPageCopy;
}) {
  const { lang } = useLang();
  const agents = getAgentsByPack(pack, lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const heroImage = getSecteurMeta(copy.heroSecteurSlug).image;

  return (
    <div className="page page--premium page--premium-inner page--pack-rich">
      <PremiumHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        titleAccent={copy.titleAccent}
        sub={copy.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: copy.eyebrow },
        ]}
        actions={
          <>
            <LocaleLink href={copy.ctaPrimaryHref} className="btn-primary">
              {copy.ctaPrimary} →
            </LocaleLink>
            <LocaleLink href={copy.ctaSecondaryHref} className="btn-ghost">
              {copy.ctaSecondary}
            </LocaleLink>
          </>
        }
        media={
          <Image
            src={heroImage}
            alt=""
            fill
            sizes="(max-width: 960px) 100vw, 48vw"
            priority
            quality={85}
          />
        }
      />

      <section className="ph-section ca-proof">
        <div className="ph-shell">
          <div className="ca-proof__grid">
            {copy.proof.map((item) => (
              <article key={item.label} className="ca-proof__card reveal">
                <strong className="ca-proof__value">{item.value}</strong>
                <p className="ca-proof__label">{item.label}</p>
                <span className="ca-proof__source">{item.source}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="workforce">
        <div className="ph-shell">
          <p className="ph-eyebrow">{copy.workforce.eyebrow}</p>
          <h2 className="ph-title">{copy.workforce.title}</h2>
          <p className="ph-body">{copy.workforce.body}</p>
          <div className="ca-dual">
            {copy.workforce.agents.map((agent) => (
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

      <section className="ph-section" id="governance">
        <div className="ph-shell">
          <p className="ph-eyebrow">{copy.governance.eyebrow}</p>
          <h2 className="ph-title">{copy.governance.title}</h2>
          <p className="ph-body">{copy.governance.body}</p>
          <div className="ca-rules">
            {copy.governance.rules.map((rule) => (
              <article key={rule.title} className="ca-rules__item reveal">
                <h3>{rule.title}</h3>
                <p>{rule.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="path">
        <div className="ph-shell">
          <p className="ph-eyebrow">{copy.path.eyebrow}</p>
          <h2 className="ph-title">{copy.path.title}</h2>
          <p className="ph-body">{copy.path.body}</p>
          <div className="ca-tracks">
            {copy.path.steps.map((step) => (
              <article key={step.title} className="ca-tracks__card reveal">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
          <p className="ph-note" style={{ marginTop: 18 }}>
            {copy.path.note}
          </p>
        </div>
      </section>

      <section className="ph-section" id="offer">
        <div className="ph-shell">
          <p className="ph-eyebrow">{copy.offer.eyebrow}</p>
          <h2 className="ph-title">{copy.offer.title}</h2>
          <p className="ph-body">{copy.offer.body}</p>
          <div className="ca-offer">
            {copy.offer.steps.map((step) => (
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
          <p className="ph-eyebrow">{copy.pilot.eyebrow}</p>
          <h2 className="ph-title">{copy.pilot.title}</h2>
          <div className="ca-pilot">
            <div className="ca-pilot__head" aria-hidden>
              <span>{lang === "fr" ? "Semaines" : "Weeks"}</span>
              <span>{lang === "fr" ? "Ce que nous faisons" : "What we do"}</span>
              <span>{lang === "fr" ? "Ce que vous voyez" : "What you see"}</span>
            </div>
            {copy.pilot.rows.map((row) => (
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
          <p className="ph-eyebrow">{copy.training.eyebrow}</p>
          <h2 className="ph-title">{copy.training.title}</h2>
          <p className="ph-body">{copy.training.body}</p>
          <div className="ca-training">
            {copy.training.courses.map((course) => (
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
          <p className="ph-eyebrow">{copy.audience.eyebrow}</p>
          <h2 className="ph-title">{copy.audience.title}</h2>
          <div className="ca-audience">
            {copy.audience.segments.map((segment) => (
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
          <AgentFicheGrid agents={agents} heading={copy.agentsHeading} />
          <ul className="ph-check" style={{ marginTop: 24 }}>
            {copy.sectorLinks.map((link) => (
              <li key={link.href}>
                <LocaleLink href={link.href} className="text-link">
                  {link.label} →
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ph-final ph-section--light" id="next">
        <div className="ph-shell ph-final__inner ca-final">
          <h2 className="ph-title">{copy.final.title}</h2>
          <p className="ph-body">{copy.final.body}</p>
          <ol className="ca-final__steps">
            {copy.final.steps.map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
          <LocaleLink
            href={copy.ctaPrimaryHref}
            className="btn-primary ph-final__cta"
          >
            {copy.ctaPrimary} →
          </LocaleLink>
          <div className="ph-final__horizon" aria-hidden />
        </div>
      </section>
    </div>
  );
}
