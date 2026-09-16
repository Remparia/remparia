"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import LocaleLink from "@/components/LocaleLink";
import PageFaq from "@/components/PageFaq";
import { useLang } from "@/lib/lang";
import {
  osPage,
  type OsCapability,
  type OsCapabilityId,
  type OsOrbitCopy,
} from "@/lib/os-page";

function HeroVisual({ alt }: { alt: string }) {
  return (
    <div className="os-hero__visual">
      <span className="os-hero__glow" aria-hidden />
      <Image
        src="/remparia-os-hero-signal.png"
        alt={alt}
        width={1024}
        height={682}
        className="os-hero__img"
        priority
        sizes="(max-width: 959px) 94vw, min(748px, 52vw)"
      />
    </div>
  );
}

function ChaosDiagram({ without, withLabel }: { without: string; withLabel: string }) {
  return (
    <div className="os-chaos__diagrams">
      <figure className="os-chaos__panel os-chaos__panel--visual">
        <Image
          src="/os-chaos-without.png"
          alt={without}
          width={640}
          height={520}
          className="os-chaos__img"
          sizes="(max-width: 719px) 100vw, 50vw"
        />
      </figure>
      <span className="os-chaos__arrow" aria-hidden>
        <Image
          src="/os-chaos-arrow.png"
          alt=""
          width={152}
          height={154}
          className="os-chaos__arrow-img"
        />
      </span>
      <figure className="os-chaos__panel os-chaos__panel--visual os-chaos__panel--ordered">
        <Image
          src="/os-chaos-with.png"
          alt={withLabel}
          width={678}
          height={797}
          className="os-chaos__img"
          sizes="(max-width: 719px) 100vw, 50vw"
        />
      </figure>
    </div>
  );
}

function ControlPlaneDiagram({
  layers,
}: {
  layers: readonly { label: string; detail: string }[];
}) {
  return (
    <div className="os-plane" aria-hidden>
      {layers.map((layer, i) => (
        <div
          key={layer.label}
          className="os-plane__layer"
          style={{ "--i": i } as CSSProperties}
        >
          <span className="os-plane__label">{layer.label}</span>
          <span className="os-plane__detail">{layer.detail}</span>
        </div>
      ))}
    </div>
  );
}

function AgentCore() {
  return (
    <span className="os-orbit__core">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function OrbitNode({
  label,
  deg,
  className = "",
}: {
  label: string;
  deg: number;
  className?: string;
}) {
  return (
    <span
      className={`os-orbit__node ${className}`.trim()}
      style={{ "--deg": `${deg}deg` } as CSSProperties}
    >
      <span className="os-orbit__dot" />
      <span className="os-orbit__label">{label}</span>
    </span>
  );
}

function CapabilityOrbit({
  mode,
  copy,
}: {
  mode: OsCapabilityId;
  copy: OsOrbitCopy;
}) {
  return (
    <div className="os-caps__radar-host">
      <div
        key={mode}
        className={`os-caps__radar os-orbit os-orbit--${mode}`}
        data-mode={mode}
        aria-hidden
      >
        <span className="os-orbit__ring os-orbit__ring--1" />
        <span className="os-orbit__ring os-orbit__ring--2" />
        <span className="os-orbit__ring os-orbit__ring--3" />

        {mode === "identity" ? (
          <>
            {copy.identity.map((label, i) => (
              <OrbitNode
                key={label}
                label={label}
                deg={[-90, 30, 150][i] ?? 0}
                className={`os-orbit__node--id os-orbit__node--d${i}`}
              />
            ))}
            <span className="os-orbit__spin os-orbit__spin--id">
              <span className="os-orbit__sat" />
            </span>
          </>
        ) : null}

        {mode === "policies" ? (
          <>
            {copy.policies.map((label, i) => (
              <span
                key={label}
                className={`os-orbit__gate os-orbit__gate--${i}`}
                style={{ "--deg": `${[-70, 0, 70][i]}deg` } as CSSProperties}
              >
                {label}
              </span>
            ))}
            <span className="os-orbit__spin os-orbit__spin--policy">
              <span className="os-orbit__sat os-orbit__sat--inbound" />
            </span>
          </>
        ) : null}

        {mode === "memory" ? (
          <>
            {copy.memory.map((label, i) => (
              <span
                key={label}
                className={`os-orbit__particle os-orbit__particle--${i}`}
                style={{ "--deg": `${[-80, 40, 160][i]}deg` } as CSSProperties}
              >
                <span className="os-orbit__dot" />
                <span className="os-orbit__label">{label}</span>
              </span>
            ))}
          </>
        ) : null}

        {mode === "tools" ? (
          <>
            <svg className="os-orbit__links" viewBox="0 0 100 100">
              <line className="os-orbit__link os-orbit__link--0" x1="50" y1="50" x2="50" y2="12" />
              <line className="os-orbit__link os-orbit__link--1" x1="50" y1="50" x2="88" y2="50" />
              <line className="os-orbit__link os-orbit__link--2" x1="50" y1="50" x2="50" y2="88" />
              <line className="os-orbit__link os-orbit__link--3" x1="50" y1="50" x2="12" y2="50" />
            </svg>
            {copy.tools.map((label, i) => (
              <OrbitNode
                key={label}
                label={label}
                deg={[-90, 0, 90, 180][i] ?? 0}
                className={`os-orbit__node--tool os-orbit__node--d${i}`}
              />
            ))}
          </>
        ) : null}

        {mode === "observability" ? (
          <>
            <span className="os-orbit__sweep" />
            <span className="os-orbit__blip os-orbit__blip--0" />
            <span className="os-orbit__blip os-orbit__blip--1" />
            <span className="os-orbit__blip os-orbit__blip--2" />
            {copy.observability.map((m, i) => (
              <span
                key={m.k}
                className={`os-orbit__metric os-orbit__metric--${i}`}
              >
                <strong>{m.v}</strong>
                <em>{m.k}</em>
              </span>
            ))}
          </>
        ) : null}

        {mode === "audit" ? (
          <>
            <span className="os-orbit__spin os-orbit__spin--audit">
              <span className="os-orbit__sat" />
            </span>
            <span className="os-orbit__spin os-orbit__spin--audit os-orbit__ghost os-orbit__ghost--1">
              <span className="os-orbit__sat os-orbit__sat--ghost" />
            </span>
            <span className="os-orbit__spin os-orbit__spin--audit os-orbit__ghost os-orbit__ghost--2">
              <span className="os-orbit__sat os-orbit__sat--ghost" />
            </span>
            <span className="os-orbit__spin os-orbit__spin--audit os-orbit__ghost os-orbit__ghost--3">
              <span className="os-orbit__sat os-orbit__sat--ghost" />
            </span>
            <ol className="os-orbit__log">
              {copy.audit.map((row) => (
                <li key={row.t}>
                  <time>{row.t}</time>
                  <span>{row.e}</span>
                </li>
              ))}
            </ol>
          </>
        ) : null}

        {mode === "security" ? (
          <>
            <span className="os-orbit__shield" />
            <span className="os-orbit__block os-orbit__block--0" />
            <span className="os-orbit__block os-orbit__block--1" />
            {copy.security.map((label, i) => (
              <OrbitNode
                key={label}
                label={label}
                deg={[-50, 40, 130, 220][i] ?? 0}
                className={`os-orbit__node--sec os-orbit__node--d${i}`}
              />
            ))}
            <span className="os-orbit__spin os-orbit__spin--sec">
              <span className="os-orbit__sat" />
            </span>
          </>
        ) : null}

        <AgentCore />
      </div>
    </div>
  );
}

function CapabilityPanel({
  items,
  orbit,
  activeId,
  onSelect,
}: {
  items: readonly OsCapability[];
  orbit: OsOrbitCopy;
  activeId: OsCapabilityId;
  onSelect: (id: OsCapabilityId) => void;
}) {
  const active = items.find((c) => c.id === activeId) ?? items[0];
  const navRef = useRef<HTMLUListElement>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const activate = (target: EventTarget | null) => {
      const button = (target as Element | null)?.closest<HTMLButtonElement>(
        "button[data-cap-id]",
      );
      if (!button || !nav.contains(button)) return;
      const id = button.dataset.capId as OsCapabilityId | undefined;
      if (id) onSelectRef.current(id);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.button !== 0) return;
      activate(event.target);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (!(event.target instanceof HTMLButtonElement)) return;
      if (!nav.contains(event.target)) return;
      event.preventDefault();
      activate(event.target);
    };

    nav.addEventListener("pointerup", onPointerUp);
    nav.addEventListener("keydown", onKeyDown);
    return () => {
      nav.removeEventListener("pointerup", onPointerUp);
      nav.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="os-caps">
      <ul ref={navRef} className="os-caps__nav">
        {items.map((cap) => (
          <li key={cap.id}>
            <button
              type="button"
              data-cap-id={cap.id}
              className={
                cap.id === activeId ? "os-caps__tab is-active" : "os-caps__tab"
              }
              aria-current={cap.id === activeId ? "true" : undefined}
            >
              {cap.label}
              {cap.id === activeId ? (
                <span className="os-caps__arrow" aria-hidden>
                  →
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
      <CapabilityOrbit mode={activeId} copy={orbit} />
      <article className="os-caps__detail">
        <h3>{active.title}</h3>
        <p>{active.body}</p>
        <ul>
          {active.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

const OS_FEATURE_ICONS = {
  human: "/os-icon-human.png",
  orchestrator: "/os-icon-orchestrator.png",
  sales: "/os-icon-sales.png",
  doc: "/os-icon-doc.png",
  ops: "/os-icon-ops.png",
  cloud: "/os-icon-cloud.png",
} as const;

const AGENT_ICONS = [OS_FEATURE_ICONS.sales, OS_FEATURE_ICONS.doc, OS_FEATURE_ICONS.ops];

const MODEL_ICONS: Record<string, string> = {
  OpenAI: "/icon-model-openai.png",
  Anthropic: "/icon-model-anthropic.png",
  Mistral: "/icon-model-mistral.png",
  Llama: "/icon-model-llama.png",
  Local: "/icon-model-local.png",
};

const OS_HUB_ICON = "/icon-remparia-os-hub.png";

function OsHub({ className }: { className: string }) {
  return (
    <span className={className}>
      <Image
        src={OS_HUB_ICON}
        alt=""
        width={28}
        height={28}
        className="os-hub__icon"
        aria-hidden
      />
      REMPARIA OS
    </span>
  );
}

function OsFeatureIcon({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <span className={`os-feat-icon ${className}`.trim()}>
      <Image
        src={src}
        alt=""
        width={52}
        height={52}
        className="os-feat-icon__img"
        aria-hidden
      />
      <span className="os-feat-icon__label">{label}</span>
    </span>
  );
}

function OrchestrationPanel({
  copy,
}: {
  copy: {
    humanReview: string;
    orchestrator: string;
    agents: readonly { label: string; tool: string }[];
    logTitle: string;
    log: readonly { time: string; event: string }[];
    footer: string;
  };
}) {
  return (
    <div className="os-orch">
      <div className="os-orch__body">
        <div className="os-orch__tree" aria-hidden>
          <OsFeatureIcon src={OS_FEATURE_ICONS.human} label={copy.humanReview} />
          <span className="os-orch__vline" />
          <OsFeatureIcon
            src={OS_FEATURE_ICONS.orchestrator}
            label={copy.orchestrator}
            className="os-feat-icon--hub"
          />
          <span className="os-orch__vline os-orch__vline--branch" />
          <span className="os-orch__branch-h" aria-hidden />
          <div className="os-orch__agents">
            {copy.agents.map((agent, i) => (
              <div key={agent.label} className="os-orch__agent-col">
                <OsFeatureIcon
                  src={AGENT_ICONS[i] ?? OS_FEATURE_ICONS.ops}
                  label={agent.label}
                />
                <span className="os-orch__hline" />
                <span className="os-orch__tool">{agent.tool}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="os-orch__log">
          <p className="os-log__head">{copy.logTitle}</p>
          {copy.log.map((row) => (
            <p key={row.time} className="os-log__row">
              <time>{row.time}</time>
              <span>{row.event}</span>
              <span className="os-log__dot" aria-hidden />
            </p>
          ))}
        </div>
      </div>
      <p className="os-card__foot">{copy.footer}</p>
    </div>
  );
}

function HumanControlPanel({
  copy,
}: {
  copy: {
    stages: readonly string[];
    activeStage: number;
    policies: readonly { label: string; desc: string; tone: string }[];
  };
}) {
  return (
    <div className="os-human2">
      <div className="os-human2__track">
        {copy.stages.map((stage, i) => (
          <span
            key={stage}
            className={
              i === copy.activeStage
                ? "os-human2__stage is-active"
                : "os-human2__stage"
            }
          >
            {stage}
            {i === copy.activeStage ? (
              <span className="os-human2__thumb">
                <Image
                  src={OS_FEATURE_ICONS.human}
                  alt=""
                  width={28}
                  height={28}
                  className="os-human2__thumb-img"
                />
              </span>
            ) : null}
          </span>
        ))}
        <span className="os-human2__rail" />
      </div>
      <ul className="os-human2__policies">
        {copy.policies.map((policy) => (
          <li key={policy.label} className={`os-human2__policy os-human2__policy--${policy.tone}`}>
            <span className="os-human2__policy-icon" aria-hidden />
            <span className="os-human2__policy-copy">
              <strong>{policy.label}</strong>
              <em>{policy.desc}</em>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AiWorkforceRow({ label }: { label: string }) {
  return (
    <div className="os-workforce" aria-hidden>
      <p className="os-workforce__label">{label}</p>
      <div className="os-workforce__row">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="os-workforce__slot">
            <Image
              src="/icon-customer.png"
              alt=""
              width={24}
              height={24}
              className="os-workforce__avatar"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function ModelStack({
  models,
  workforceLabel,
}: {
  models: readonly string[];
  workforceLabel: string;
}) {
  return (
    <div className="os-stack" aria-hidden>
      <div className="os-models__sources">
        {models.map((m) => {
          const icon = MODEL_ICONS[m];
          return icon ? (
            <span key={m} className="os-models__source os-models__source--icon">
              <Image
                src={icon}
                alt={m}
                width={32}
                height={32}
                className="os-models__icon"
              />
            </span>
          ) : (
            <span key={m} className="os-models__source">
              {m}
            </span>
          );
        })}
      </div>
      <span className="os-stack__arrow">↓</span>
      <OsHub className="os-models__hub" />
      <span className="os-stack__dots" aria-hidden />
      <AiWorkforceRow label={workforceLabel} />
    </div>
  );
}

function DeployPanel({
  options,
}: {
  options: readonly { label: string; desc: string }[];
}) {
  return (
    <ul className="os-deploy2" aria-hidden>
      {options.map((opt) => (
        <li key={opt.label} className="os-deploy2__item">
          <span className="os-deploy2__icon-wrap">
            <Image
              src={OS_FEATURE_ICONS.cloud}
              alt=""
              width={36}
              height={36}
              className="os-deploy2__icon"
            />
          </span>
          <span className="os-deploy2__copy">
            <strong>{opt.label}</strong>
            <span>{opt.desc}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function ConnectPanel({
  integrations,
  workforceLabel,
  footer,
}: {
  integrations: readonly string[];
  workforceLabel: string;
  footer: string;
}) {
  return (
    <div className="os-connect">
      <div className="os-integrations">
        {integrations.map((name) => (
          <span key={name} className="os-integrations__chip">
            {name}
          </span>
        ))}
      </div>
      <span className="os-stack__arrow">↓</span>
      <OsHub className="os-integrations__hub" />
      <span className="os-stack__dots" aria-hidden />
      <AiWorkforceRow label={workforceLabel} />
      <p className="os-card__foot">{footer}</p>
    </div>
  );
}

function MeasureDashboard({
  copy,
}: {
  copy: {
    liveLabel: string;
    metrics: readonly { label: string; value: string; trend?: string }[];
    tableHead: readonly string[];
    agents: readonly {
      name: string;
      status: string;
      tasks: string;
      success: string;
    }[];
    footer: string;
  };
}) {
  return (
    <div className="os-measure">
      <div className="os-measure__head">
        <span className="os-measure__brand">{copy.liveLabel}</span>
        <span className="os-measure__live">
          <span className="os-measure__pulse" aria-hidden />
          LIVE
        </span>
      </div>
      <div className="os-measure__metrics">
        {copy.metrics.map((m) => (
          <div key={m.label} className="os-measure__metric">
            <strong>
              {m.value}
              {m.trend ? <span className="os-measure__trend">{m.trend}</span> : null}
            </strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
      <table className="os-measure__table">
        <thead>
          <tr>
            {copy.tableHead.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {copy.agents.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>
                <span className="os-measure__status">
                  <span className="os-measure__status-dot" aria-hidden />
                  {a.status}
                </span>
              </td>
              <td>{a.tasks}</td>
              <td>{a.success}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="os-card__foot os-card__foot--accent">{copy.footer}</p>
    </div>
  );
}

export default function OsPage() {
  const { lang } = useLang();
  const t = osPage(lang);
  const [activeCap, setActiveCap] = useState<OsCapabilityId>("identity");

  return (
    <div className="page page--solution">
      <header className="os-hero">
        <div className="os-shell os-hero__grid">
          <div className="os-hero__copy">
            <p className="os-index">{t.hero.index}</p>
            <h1 className="os-hero__title">
              {t.hero.titleBefore}
              <span className="os-accent">{t.hero.titleAccent}</span>
            </h1>
            <p className="os-hero__sub">{t.hero.sub}</p>
            <div className="os-hero__actions">
              {t.hero.ctaPrimaryHref.startsWith("#") ? (
                <a href={t.hero.ctaPrimaryHref} className="os-btn os-btn--solid">
                  {t.hero.ctaPrimary} ↓
                </a>
              ) : (
                <LocaleLink href={t.hero.ctaPrimaryHref} className="os-btn os-btn--solid">
                  {t.hero.ctaPrimary} →
                </LocaleLink>
              )}
              {t.hero.ctaSecondaryHref.startsWith("#") ? (
                <a href={t.hero.ctaSecondaryHref} className="os-btn os-btn--ghost">
                  {t.hero.ctaSecondary} ↓
                </a>
              ) : (
                <LocaleLink href={t.hero.ctaSecondaryHref} className="os-btn os-btn--ghost">
                  {t.hero.ctaSecondary} →
                </LocaleLink>
              )}
            </div>
          </div>
          <HeroVisual alt={t.hero.visualAlt} />
        </div>
      </header>

      <div className="os-ribbon" aria-label="OS capabilities">
        <div className="os-shell os-ribbon__inner">
          {t.ribbon.map((item) => (
            <span key={item.id} className="os-ribbon__item">
              <span className="os-ribbon__icon-wrap" data-icon={item.id}>
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="os-ribbon__icon"
                  aria-hidden
                />
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <section className="os-section" aria-labelledby="os-chaos-title">
        <div className="os-shell os-chaos">
          <div className="os-chaos__copy">
            <p className="os-index">{t.chaos.index}</p>
            <h2 id="os-chaos-title" className="os-section__title">
              {t.chaos.title}
            </h2>
            <p className="os-section__body">{t.chaos.body}</p>
          </div>
          <ChaosDiagram without={t.chaos.without} withLabel={t.chaos.with} />
        </div>
      </section>

      <section
        id="architecture"
        className="os-section os-section--plane"
        aria-labelledby="os-plane-title"
      >
        <div className="os-shell os-plane__grid">
          <div className="os-plane__copy">
            <p className="os-index">{t.controlPlane.index}</p>
            <h2 id="os-plane-title" className="os-section__title">
              {t.controlPlane.title}
            </h2>
            <p className="os-plane__body">{t.controlPlane.body}</p>
            <ul className="os-plane__list">
              {t.controlPlane.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="os-plane__closing">{t.controlPlane.closing}</p>
          </div>
          <ControlPlaneDiagram layers={t.controlPlane.layers} />
        </div>
      </section>

      <section className="os-section" aria-labelledby="os-caps-title">
        <div className="os-shell">
          <header className="os-section__head">
            <p className="os-index">{t.capabilities.index}</p>
            <h2 id="os-caps-title" className="os-section__title">
              {t.capabilities.title}
            </h2>
          </header>
          <CapabilityPanel
            items={t.capabilities.items}
            orbit={t.capabilities.orbit}
            activeId={activeCap}
            onSelect={setActiveCap}
          />
        </div>
      </section>

      <section className="os-section os-section--grid" aria-label="OS features">
        <div className="os-shell os-grid3">
          <article className="os-card">
            <p className="os-index">{t.grid.orchestration.index}</p>
            <h3 className="os-card__title">{t.grid.orchestration.title}</h3>
            <p className="os-card__sub">{t.grid.orchestration.sub}</p>
            <OrchestrationPanel copy={t.grid.orchestration} />
          </article>

          <article className="os-card">
            <p className="os-index">{t.grid.humanControl.index}</p>
            <h3 className="os-card__title">{t.grid.humanControl.title}</h3>
            <p className="os-card__sub">{t.grid.humanControl.sub}</p>
            <HumanControlPanel copy={t.grid.humanControl} />
          </article>

          <article className="os-card">
            <p className="os-index">{t.grid.openDesign.index}</p>
            <h3 className="os-card__title">{t.grid.openDesign.title}</h3>
            <p className="os-card__sub">{t.grid.openDesign.sub}</p>
            <ModelStack
              models={t.grid.openDesign.models}
              workforceLabel={t.grid.openDesign.workforceLabel}
            />
          </article>

          <article className="os-card">
            <p className="os-index">{t.grid.deploy.index}</p>
            <h3 className="os-card__title">{t.grid.deploy.title}</h3>
            <p className="os-card__sub">{t.grid.deploy.sub}</p>
            <DeployPanel options={t.grid.deploy.options} />
          </article>

          <article className="os-card">
            <p className="os-index">{t.grid.connect.index}</p>
            <h3 className="os-card__title">{t.grid.connect.title}</h3>
            <p className="os-card__sub">{t.grid.connect.sub}</p>
            <ConnectPanel
              integrations={t.grid.connect.integrations}
              workforceLabel={t.grid.connect.workforceLabel}
              footer={t.grid.connect.footer}
            />
          </article>

          <article className="os-card">
            <p className="os-index">{t.grid.operations.index}</p>
            <h3 className="os-card__title">{t.grid.operations.title}</h3>
            <p className="os-card__sub">{t.grid.operations.sub}</p>
            <MeasureDashboard copy={t.grid.operations} />
          </article>
        </div>
      </section>

      <section className="os-section os-pipeline" aria-labelledby="os-pipeline-title">
        <div className="os-shell">
          <h2 id="os-pipeline-title" className="os-pipeline__title">
            {t.pipeline.title}
          </h2>
          <ol className="os-pipeline__steps">
            {t.pipeline.steps.map((step, i) => (
              <li
                key={step.label}
                className={"image" in step && step.image ? "os-pipeline__step--media" : undefined}
              >
                <div className="os-pipeline__body">
                  {"image" in step && step.image ? (
                    <Image
                      src={step.image}
                      alt=""
                      width={96}
                      height={96}
                      className="os-pipeline__media"
                    />
                  ) : null}
                  <span className="os-pipeline__copy">
                    <span className="os-pipeline__label">{step.label}</span>
                    <span className="os-pipeline__desc">{step.desc}</span>
                  </span>
                </div>
                {i < t.pipeline.steps.length - 1 ? (
                  <span className="os-pipeline__arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageFaq
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        sub={t.faq.sub}
        items={t.faq.items}
      />

      <section className="os-final" aria-labelledby="os-final-title">
        <div className="os-shell os-final__inner">
          <h2 id="os-final-title" className="os-final__title">
            {t.final.title}
          </h2>
          <div className="os-final__actions">
            <LocaleLink href={t.final.ctaPrimaryHref} className="btn-primary os-final__cta">
              {t.final.ctaPrimary} →
            </LocaleLink>
            <LocaleLink href={t.final.ctaSecondaryHref} className="os-btn os-btn--ghost-dark">
              {t.final.ctaSecondary}
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  );
}
