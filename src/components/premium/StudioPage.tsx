"use client";

import Image from "next/image";
import { useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCard,
  PremiumCtaBand,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { useLang } from "@/lib/lang";
import {
  studioPage,
  type StudioLayerId,
} from "@/lib/studio-page";

function LayerIcon({ id }: { id: StudioLayerId }) {
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
    case "agents":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19.5c.8-3.2 3.3-5 6.5-5s5.7 1.8 6.5 5" />
        </svg>
      );
    case "skills":
      return (
        <svg {...common}>
          <path d="M8 4h8l3 5-7 11L4 9l4-5z" />
          <path d="M8 9h8" />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="7" height="7" rx="1.2" />
          <rect x="14" y="4" width="7" height="7" rx="1.2" />
          <rect x="3" y="13" width="7" height="7" rx="1.2" />
          <path d="M17.5 13v7M14 16.5h7" />
        </svg>
      );
    case "knowledge":
      return (
        <svg {...common}>
          <path d="M5 5.5h6a3 3 0 013 3V20H8a3 3 0 00-3 3V5.5z" />
          <path d="M19 5.5h-6a3 3 0 00-3 3V20h6a3 3 0 013 3V5.5z" />
        </svg>
      );
    case "workflows":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="12" r="2.2" />
          <circle cx="6" cy="18" r="2.2" />
          <path d="M8.2 7.2L15.8 10.8M8.2 16.8L15.8 13.2" />
        </svg>
      );
    case "approvals":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z" />
          <path d="M8.5 12.2l2.4 2.4 4.6-5" />
        </svg>
      );
  }
}

function BuilderCanvas({
  active,
  mark,
  status,
  mission,
  layers,
  onSelect,
}: {
  active: StudioLayerId;
  mark: string;
  status: string;
  mission: string;
  layers: readonly { id: StudioLayerId; canvas: string }[];
  onSelect: (id: StudioLayerId) => void;
}) {
  return (
    <div className="st-canvas">
      <div className="st-canvas__bar">
        <span className="st-canvas__mark">{mark}</span>
        <span className="st-canvas__status">{status}</span>
      </div>
      <p className="st-canvas__mission">{mission}</p>
      <ul className="st-canvas__nodes">
        {layers.map((layer, index) => (
          <li key={layer.id}>
            <button
              type="button"
              className={`st-canvas__node${layer.id === active ? " is-on" : ""}`}
              onClick={() => onSelect(layer.id)}
              aria-pressed={layer.id === active}
            >
              <span className="st-canvas__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="st-canvas__node-icon">
                <LayerIcon id={layer.id} />
              </span>
              <span>{layer.canvas}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StudioPage() {
  const { lang } = useLang();
  const t = studioPage(lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const [active, setActive] = useState<StudioLayerId>("agents");

  return (
    <PremiumPageShell className="studio-page">
      <header className="ph-page-hero ph-page-hero--split">
        <div className="ph-shell">
          <nav className="ph-crumbs" aria-label={lang === "fr" ? "Fil d'Ariane" : "Breadcrumb"}>
            <span className="ph-crumbs__item">
              <LocaleLink href="/">{home}</LocaleLink>
              <span aria-hidden>/</span>
              <span aria-current="page">{t.crumbs}</span>
            </span>
          </nav>
          <div className="ph-page-hero__grid">
            <div className="ph-page-hero__copy">
              <p className="ph-eyebrow">{t.eyebrow}</p>
              <h1 className="ph-hero__title st-hero__title">
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
            <div className="ph-page-hero__media st-hero__media">
              <BuilderCanvas
                active={active}
                mark={t.canvas.mark}
                status={t.canvas.status}
                mission={t.canvas.mission}
                layers={t.layers.items}
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
        <div className="ph-problem st-problem">
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
        id="couches"
        light
        eyebrow={t.layers.eyebrow}
        title={t.layers.title}
        body={t.layers.body}
      >
        <div className="st-layers">
          {t.layers.items.map((layer) => (
            <button
              key={layer.id}
              type="button"
              className={`st-layer${layer.id === active ? " is-on" : ""}`}
              onClick={() => setActive(layer.id)}
              aria-pressed={layer.id === active}
            >
              <span className="st-layer__icon">
                <LayerIcon id={layer.id} />
              </span>
              <span className="st-layer__tag">{layer.tag}</span>
              <h3>{layer.title}</h3>
              <p>{layer.desc}</p>
            </button>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        id="protocole"
        eyebrow={t.protocol.eyebrow}
        title={t.protocol.titleBefore}
        titleAccent={t.protocol.titleAccent}
        body={t.protocol.body}
      >
        <ol className="st-protocol">
          {t.protocol.steps.map((step) => (
            <li key={step.n} className="st-protocol__step">
              <span className="st-protocol__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </PremiumSection>

      <PremiumSection
        id="workforce"
        className="st-workforce-section"
        eyebrow={t.workforce.eyebrow}
        title={t.workforce.titleBefore}
        titleAccent={t.workforce.titleAccent}
        body={t.workforce.body}
      >
        <div className="st-workforce">
          {t.workforce.agents.map((agent) =>
            "href" in agent && agent.href ? (
              <LocaleLink
                key={agent.tag}
                href={agent.href}
                className="ph-agent-card ph-agent-card--cta"
              >
                <span className="ph-agent-card__plus" aria-hidden>
                  +
                </span>
                <span className="ph-agent-card__tag">{agent.tag}</span>
                <h3>{agent.title}</h3>
                <p>{agent.desc}</p>
              </LocaleLink>
            ) : (
              <PremiumCard
                key={agent.tag}
                tag={agent.tag}
                title={agent.title}
                desc={agent.desc}
              />
            ),
          )}
        </div>
      </PremiumSection>

      <PremiumSection
        id="en-action"
        eyebrow={t.action.eyebrow}
        title={t.action.titleBefore}
        titleAccent={t.action.titleAccent}
        body={t.action.body}
      >
        <p className="st-action__mission">{t.action.mission}</p>
        <ol className="st-action">
          {t.action.nodes.map((node, index) => (
            <li key={node.tag} className="st-action__node">
              <article className="st-action__card">
                <span className="st-action__tag">{node.tag}</span>
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </article>
              {index < t.action.nodes.length - 1 ? (
                <span className="st-action__arrow" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </PremiumSection>

      <PremiumSection
        id="gouverne"
        className="st-governed-section"
        eyebrow={t.governed.eyebrow}
        title={t.governed.titleBefore}
        titleAccent={t.governed.titleAccent}
        body={t.governed.body}
      >
        <div className="st-governed">
          {t.governed.items.map((item) => (
            <PremiumCard key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>
        <LocaleLink href={t.governed.href} className="text-link st-inline-link">
          {t.governed.cta} →
        </LocaleLink>
      </PremiumSection>

      <PremiumSection id="trajectoire" eyebrow={t.path.eyebrow} title={t.path.title}>
        <ol className="st-path">
          {t.path.steps.map((step) => {
            const inner = (
              <>
                <span className="st-path__n">{step.n}</span>
                <span className="st-path__tag">{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </>
            );
            return (
              <li key={step.tag}>
                {"href" in step && step.href ? (
                  <LocaleLink href={step.href} className="st-path__card">
                    {inner}
                  </LocaleLink>
                ) : (
                  <div className="st-path__card st-path__card--here">{inner}</div>
                )}
              </li>
            );
          })}
        </ol>
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
