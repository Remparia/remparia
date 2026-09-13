"use client";

import Image from "next/image";
import { useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCtaBand,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { useLang } from "@/lib/lang";
import {
  governancePage,
  type GovPillarId,
  type GovPolicyId,
} from "@/lib/governance-page";

function PillarIcon({ id }: { id: GovPillarId }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "identity":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19.5c.8-3.2 3.3-5 6.5-5s5.7 1.8 6.5 5" />
        </svg>
      );
    case "permissions":
      return (
        <svg {...common}>
          <rect x="4" y="10" width="16" height="10" rx="1.5" />
          <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
      );
    case "policies":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
    case "budgets":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v10M9.5 9.5c.6-1 1.5-1.5 2.5-1.5 1.4 0 2.5.8 2.5 2s-1.1 2-2.5 2h-1c-1.4 0-2.5.8-2.5 2s1.1 2 2.5 2c1 0 1.9-.5 2.5-1.5" />
        </svg>
      );
    case "observability":
      return (
        <svg {...common}>
          <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "audit":
      return (
        <svg {...common}>
          <path d="M8 4h8l2 2v14H6V6l2-2z" />
          <path d="M9 11h6M9 15h4" />
        </svg>
      );
  }
}

function ControlPanel({
  active,
  mark,
  status,
  mission,
  pillars,
  onSelect,
}: {
  active: GovPillarId;
  mark: string;
  status: string;
  mission: string;
  pillars: readonly { id: GovPillarId; panel: string }[];
  onSelect: (id: GovPillarId) => void;
}) {
  return (
    <div className="gv-panel">
      <div className="gv-panel__bar">
        <span className="gv-panel__mark">{mark}</span>
        <span className="gv-panel__status">{status}</span>
      </div>
      <p className="gv-panel__mission">{mission}</p>
      <ul className="gv-panel__nodes">
        {pillars.map((pillar, index) => (
          <li key={pillar.id}>
            <button
              type="button"
              className={`gv-panel__node${pillar.id === active ? " is-on" : ""}`}
              onClick={() => onSelect(pillar.id)}
              aria-pressed={pillar.id === active}
            >
              <span className="gv-panel__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="gv-panel__node-icon">
                <PillarIcon id={pillar.id} />
              </span>
              <span>{pillar.panel}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GovernancePage() {
  const { lang } = useLang();
  const t = governancePage(lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const [active, setActive] = useState<GovPillarId>("policies");
  const [policy, setPolicy] = useState<GovPolicyId>("block");

  return (
    <PremiumPageShell className="governance-page">
      <header className="ph-page-hero ph-page-hero--split">
        <div className="ph-shell">
          <nav
            className="ph-crumbs"
            aria-label={lang === "fr" ? "Fil d'Ariane" : "Breadcrumb"}
          >
            <span className="ph-crumbs__item">
              <LocaleLink href="/">{home}</LocaleLink>
              <span aria-hidden>/</span>
              <span aria-current="page">{t.crumbs}</span>
            </span>
          </nav>
          <div className="ph-page-hero__grid">
            <div className="ph-page-hero__copy">
              <h1 className="ph-hero__title gv-hero__title">
                <span>{t.titleLine1}</span>
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
            <div className="ph-page-hero__media gv-hero__media">
              <ControlPanel
                active={active}
                mark={t.panel.mark}
                status={t.panel.status}
                mission={t.panel.mission}
                pillars={t.pillars.items}
                onSelect={setActive}
              />
            </div>
          </div>
        </div>
      </header>

      <PremiumSection
        id="pourquoi"
        eyebrow={t.why.eyebrow}
        title={t.why.titleBefore}
        titleAccent={t.why.titleAccent}
        body={t.why.body}
      >
        <div className="gv-why">
          {t.why.items.map((item) => (
            <article key={item.title} className="gv-why__card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="constat"
        light
        eyebrow={t.problem.eyebrow}
        title={t.problem.titleBefore}
        titleAccent={t.problem.titleAccent}
      >
        <div className="ph-problem gv-problem">
          <div className="ph-compare">
            <div className="ph-compare__head">
              <span>{t.problem.today}</span>
              <span className="ph-compare__arrow" aria-hidden />
              <span>{t.problem.withUs}</span>
            </div>
            {t.problem.rows.map((row) => (
              <div key={row.today} className="ph-compare__row">
                <span>{row.today}</span>
                <span className="ph-compare__arrow" aria-hidden>
                  <Image
                    className="ph-compare__arrow-img"
                    src="/icon-compare-arrow.png"
                    alt=""
                    width={28}
                    height={16}
                  />
                </span>
                <span>{row.withUs}</span>
              </div>
            ))}
          </div>
          <p className="ph-problem__side">
            <span className="ph-problem__side-lead">{t.problem.sideLead}</span>
            <span className="ph-problem__side-rest">
              {t.problem.sideRest}
              <span className="ph-accent">{t.problem.sideAccent}</span>
            </span>
          </p>
        </div>
      </PremiumSection>

      <PremiumSection
        id="rails"
        eyebrow={t.rails.eyebrow}
        title={t.rails.titleBefore}
        titleAccent={t.rails.titleAccent}
        body={t.rails.body}
      >
        <div className="gv-rails">
          {t.rails.items.map((item) => (
            <article key={item.n} className="gv-rails__card">
              <span className="gv-rails__n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="delegation"
        light
        eyebrow={t.heatmap.eyebrow}
        title={t.heatmap.titleBefore}
        titleAccent={t.heatmap.titleAccent}
        body={t.heatmap.body}
      >
        <div className="gv-heatmap">
          {t.heatmap.items.map((item) => (
            <article
              key={item.level}
              className={`gv-heat gv-heat--${item.level}`}
            >
              <span className="gv-heat__tag">
                <span className="status-dot" aria-hidden />
                {item.title}
              </span>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="pillars"
        eyebrow={t.pillars.eyebrow}
        title={t.pillars.title}
        body={t.pillars.body}
      >
        <div className="gv-pillars">
          {t.pillars.items.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              className={`gv-pillar${pillar.id === active ? " is-on" : ""}`}
              onClick={() => setActive(pillar.id)}
              aria-pressed={pillar.id === active}
            >
              <span className="gv-pillar__icon">
                <PillarIcon id={pillar.id} />
              </span>
              <span className="gv-pillar__tag">{pillar.tag}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </button>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="policies"
        light
        eyebrow={t.policies.eyebrow}
        title={t.policies.titleBefore}
        titleAccent={t.policies.titleAccent}
        body={t.policies.body}
      >
        <div className="gv-policies" role="tablist">
          {t.policies.items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={policy === item.id}
              className={`gv-policy gv-policy--${item.id}${policy === item.id ? " is-on" : ""}`}
              onClick={() => setPolicy(item.id)}
            >
              <span className="gv-policy__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="gv-policy__example">{item.example}</span>
            </button>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="outcomes"
        eyebrow={t.outcomes.eyebrow}
        title={t.outcomes.titleBefore}
        titleAccent={t.outcomes.titleAccent}
        body={t.outcomes.body}
      >
        <div className="gv-outcomes">
          {t.outcomes.items.map((item) => (
            <article key={item.n} className="gv-outcomes__card">
              <span className="gv-outcomes__n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="en-action"
        light
        eyebrow={t.action.eyebrow}
        title={t.action.titleBefore}
        titleAccent={t.action.titleAccent}
        body={t.action.body}
      >
        <p className="gv-action__mission">{t.action.mission}</p>
        <ol className="gv-action">
          {t.action.nodes.map((node, index) => (
            <li key={node.tag} className="gv-action__node">
              <article className="gv-action__card">
                <span className="gv-action__tag">{node.tag}</span>
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </article>
              {index < t.action.nodes.length - 1 ? (
                <span className="gv-action__arrow" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <LocaleLink href={t.action.href} className="text-link gv-inline-link">
          {t.action.cta} →
        </LocaleLink>
      </PremiumSection>

      <PremiumSection
        id="journal"
        eyebrow={t.audit.eyebrow}
        title={t.audit.titleBefore}
        titleAccent={t.audit.titleAccent}
      >
        <div className="gv-audit">
          <table>
            <thead>
              <tr>
                {t.audit.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.audit.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${i}`}
                      className={
                        i === 4
                          ? `gv-audit__policy gv-audit__policy--${cell.toLowerCase()}`
                          : undefined
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="gv-note gv-note--dark">{t.audit.note}</p>
      </PremiumSection>

      <PremiumSection
        id="trajectoire"
        light
        eyebrow={t.path.eyebrow}
        title={t.path.title}
      >
        <ol className="gv-path">
          {t.path.steps.map((step) => {
            const inner = (
              <>
                <span className="gv-path__n">{step.n}</span>
                <span className="gv-path__tag">{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </>
            );
            return (
              <li key={step.tag}>
                {"href" in step && step.href ? (
                  <LocaleLink href={step.href} className="gv-path__card">
                    {inner}
                  </LocaleLink>
                ) : (
                  <div className="gv-path__card gv-path__card--here">{inner}</div>
                )}
              </li>
            );
          })}
        </ol>
        <p className="ph-body gv-sov-note">{t.sovereignty.body}</p>
        <LocaleLink
          href={t.sovereignty.href}
          className="text-link gv-inline-link"
        >
          {t.sovereignty.cta} →
        </LocaleLink>
      </PremiumSection>

      <PremiumSection
        id="faq"
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        body={t.faq.sub}
      >
        <div className="gv-faq">
          {t.faq.items.map((item) => (
            <details key={item.q} className="gv-faq__item">
              <summary className="gv-faq__question">{item.q}</summary>
              <p className="gv-faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </PremiumSection>

      <PremiumCtaBand
        tag={t.cta.tag}
        title={t.cta.title}
        text={t.cta.text}
        href={t.cta.href}
        ctaLabel={t.cta.label}
      />
    </PremiumPageShell>
  );
}
