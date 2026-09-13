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
  sovereigntyPage,
  type SovModeId,
} from "@/lib/sovereignty-page";

function ModeIcon({ id }: { id: SovModeId }) {
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
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h11a4 4 0 00.4-8 6 6 0 00-11.5-1.6A4.5 4.5 0 007 18z" />
        </svg>
      );
    case "sovereign":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z" />
          <path d="M9 12h6" />
        </svg>
      );
    case "onprem":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="6" rx="1.2" />
          <rect x="4" y="14" width="16" height="6" rx="1.2" />
          <path d="M8 7h.01M8 17h.01" />
        </svg>
      );
  }
}

function PerimeterPanel({
  active,
  mark,
  status,
  mission,
  modes,
  onSelect,
}: {
  active: SovModeId;
  mark: string;
  status: string;
  mission: string;
  modes: readonly { id: SovModeId; panel: string }[];
  onSelect: (id: SovModeId) => void;
}) {
  return (
    <div className="sv-panel">
      <div className="sv-panel__bar">
        <span className="sv-panel__mark">{mark}</span>
        <span className="sv-panel__status">{status}</span>
      </div>
      <p className="sv-panel__mission">{mission}</p>
      <ul className="sv-panel__nodes">
        {modes.map((mode, index) => (
          <li key={mode.id}>
            <button
              type="button"
              className={`sv-panel__node${mode.id === active ? " is-on" : ""}`}
              onClick={() => onSelect(mode.id)}
              aria-pressed={mode.id === active}
            >
              <span className="sv-panel__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="sv-panel__node-icon">
                <ModeIcon id={mode.id} />
              </span>
              <span>{mode.panel}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SovereigntyPage() {
  const { lang } = useLang();
  const t = sovereigntyPage(lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const [active, setActive] = useState<SovModeId>("sovereign");
  const activeMode = t.modes.items.find((m) => m.id === active) ?? t.modes.items[1];

  return (
    <PremiumPageShell className="sovereignty-page">
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
              <h1 className="ph-hero__title sv-hero__title">
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
            <div className="ph-page-hero__media sv-hero__media">
              <PerimeterPanel
                active={active}
                mark={t.panel.mark}
                status={t.panel.status}
                mission={t.panel.mission}
                modes={t.modes.items}
                onSelect={setActive}
              />
            </div>
          </div>
        </div>
      </header>

      <PremiumSection
        id="constat"
        eyebrow={t.problem.eyebrow}
        title={t.problem.titleBefore}
        titleAccent={t.problem.titleAccent}
      >
        <div className="ph-problem sv-problem">
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
        id="pourquoi"
        light
        eyebrow={t.why.eyebrow}
        title={t.why.titleBefore}
        titleAccent={t.why.titleAccent}
        body={t.why.body}
      >
        <div className="sv-why">
          {t.why.items.map((item) => (
            <article key={item.title} className="sv-why__card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="piliers"
        eyebrow={t.pillars.eyebrow}
        title={t.pillars.titleBefore}
        titleAccent={t.pillars.titleAccent}
        body={t.pillars.body}
      >
        <div className="sv-position">
          {t.pillars.items.map((item) => (
            <article key={item.tag} className="sv-position__card">
              <span className="sv-position__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="sv-defs">
          {t.pillars.defs.map((item) => (
            <article key={item.title} className="sv-defs__card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="modes"
        light
        eyebrow={t.modes.eyebrow}
        title={t.modes.title}
        body={t.modes.body}
      >
        <p className="sv-spectrum">{t.modes.spectrum}</p>
        <div className="sv-modes">
          {t.modes.items.map((mode) => (
            <button
              key={mode.id}
              type="button"
              className={`sv-mode sv-mode--${mode.id}${mode.id === active ? " is-on" : ""}`}
              onClick={() => setActive(mode.id)}
              aria-pressed={mode.id === active}
            >
              <span className="sv-mode__icon">
                <ModeIcon id={mode.id} />
              </span>
              <span className="sv-mode__tag">{mode.tag}</span>
              <h3>{mode.title}</h3>
              <p className="sv-mode__sub">{mode.subtitle}</p>
              <p>{mode.desc}</p>
              <ul>
                {mode.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span className="sv-mode__fit">{mode.fit}</span>
            </button>
          ))}
        </div>
        <p className="sv-mode-focus">
          <span className="sv-mode-focus__label">{activeMode.tag}</span>
          {activeMode.fit}
        </p>
      </PremiumSection>

      <PremiumSection
        id="invariant"
        eyebrow={t.invariant.eyebrow}
        title={t.invariant.titleBefore}
        titleAccent={t.invariant.titleAccent}
        body={t.invariant.body}
      >
        <div className="sv-invariant">
          {t.invariant.items.map((item) => (
            <article key={item.title} className="sv-invariant__card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="architecture"
        light
        eyebrow={t.where.eyebrow}
        title={t.where.titleBefore}
        titleAccent={t.where.titleAccent}
      >
        <div className="sv-table">
          <table>
            <thead>
              <tr>
                {t.where.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.where.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="sv-note">{t.where.note}</p>
      </PremiumSection>

      <PremiumSection
        id="choix"
        eyebrow={t.compare.eyebrow}
        title={t.compare.title}
      >
        <div className="sv-table sv-table--compare">
          <table>
            <thead>
              <tr>
                <th />
                {t.compare.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compare.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value) => (
                    <td key={`${row.label}-${value}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
        <p className="sv-action__mission">{t.action.mission}</p>
        <ol className="sv-action">
          {t.action.nodes.map((node, index) => (
            <li key={node.tag} className="sv-action__node">
              <article className="sv-action__card">
                <span className="sv-action__tag">{node.tag}</span>
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </article>
              {index < t.action.nodes.length - 1 ? (
                <span className="sv-action__arrow" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </PremiumSection>

      <PremiumSection
        id="trajectoire"
        eyebrow={t.path.eyebrow}
        title={t.path.title}
        body={t.path.body}
      >
        <ol className="sv-path">
          {t.path.steps.map((step) => (
            <li key={step.tag}>
              <LocaleLink href={step.href} className="sv-path__card">
                <span className="sv-path__n">{step.n}</span>
                <span className="sv-path__tag">{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </LocaleLink>
            </li>
          ))}
        </ol>
        <div className="sv-links">
          <LocaleLink href={t.path.hrefGov} className="text-link">
            {t.path.ctaGov} →
          </LocaleLink>
          <LocaleLink href={t.path.hrefOs} className="text-link">
            {t.path.ctaOs} →
          </LocaleLink>
        </div>
      </PremiumSection>

      <PremiumSection
        id="faq"
        light
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        body={t.faq.sub}
      >
        <div className="sv-faq">
          {t.faq.items.map((item) => (
            <details key={item.q} className="sv-faq__item">
              <summary className="sv-faq__question">{item.q}</summary>
              <p className="sv-faq__answer">{item.a}</p>
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
