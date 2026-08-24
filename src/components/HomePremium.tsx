"use client";

import { useId, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { homePremium } from "@/lib/home-premium";
import { useLang } from "@/lib/lang";

function AccentTitle({
  before,
  accent,
  after = "",
}: {
  before: string;
  accent: string;
  after?: string;
}) {
  return (
    <h2 className="ph-title">
      {before}
      <span className="ph-accent">{accent}</span>
      {after}
    </h2>
  );
}

function HeroVisual({
  osLabel,
  agents,
}: {
  osLabel: string;
  agents: readonly string[];
}) {
  return (
    <div className="ph-hero-visual" aria-hidden="true">
      <div className="ph-hero-glow" />
      <div className="ph-hero-core">
        <span className="ph-hero-core__label">{osLabel}</span>
      </div>
      {agents.map((agent, i) => (
        <div
          key={agent}
          className={`ph-hero-node ph-hero-node--${i + 1}`}
        >
          <span className="ph-hero-node__dot" />
          <span>{agent}</span>
        </div>
      ))}
      <svg className="ph-hero-lines" viewBox="0 0 480 420" fill="none">
        <path d="M240 210 L90 70" />
        <path d="M240 210 L390 70" />
        <path d="M240 210 L70 250" />
        <path d="M240 210 L410 250" />
        <path d="M240 210 L240 360" />
      </svg>
    </div>
  );
}

function RoiCalculator({
  labels,
}: {
  labels: {
    employees: string;
    hours: string;
    cost: string;
    capacity: string;
    fte: string;
    annual: string;
    note: string;
    cta: string;
  };
}) {
  const [employees, setEmployees] = useState(50);
  const [hours, setHours] = useState(240);
  const [cost, setCost] = useState(38);
  const fte = Math.max(
    0,
    Math.min(employees * 0.2, (hours * 0.35) / 35),
  );
  const annual = Math.round(hours * 0.35 * cost * 48);

  return (
    <div className="ph-roi">
      <div className="ph-roi__inputs">
        <label className="ph-roi__field">
          <span>{labels.employees}</span>
          <div className="ph-roi__stepper">
            <button
              type="button"
              aria-label="−"
              onClick={() => setEmployees((v) => Math.max(1, v - 1))}
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value) || 1)}
            />
            <button
              type="button"
              aria-label="+"
              onClick={() => setEmployees((v) => v + 1)}
            >
              +
            </button>
          </div>
        </label>
        <label className="ph-roi__field">
          <span>{labels.hours}</span>
          <input
            type="number"
            min={0}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value) || 0)}
          />
        </label>
        <label className="ph-roi__field">
          <span>{labels.cost}</span>
          <input
            type="number"
            min={0}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value) || 0)}
          />
        </label>
      </div>
      <div className="ph-roi__out">
        <div>
          <div className="ph-roi__out-label">{labels.capacity}</div>
          <div className="ph-roi__out-value">
            {fte.toFixed(1)} {labels.fte}
          </div>
        </div>
        <div>
          <div className="ph-roi__out-label">{labels.annual}</div>
          <div className="ph-roi__out-value">
            €{annual.toLocaleString("fr-FR")}
          </div>
        </div>
        <p className="ph-roi__note">{labels.note}</p>
        <LocaleLink href="/demarrer" className="btn-primary">
          {labels.cta} →
        </LocaleLink>
      </div>
    </div>
  );
}

export default function HomePremium() {
  const { lang } = useLang();
  const t = homePremium(lang);
  const sovId = useId();
  const indId = useId();
  const [sovTab, setSovTab] = useState<string>(t.sovereignty.tabs[0].id);
  const [indTab, setIndTab] = useState<string>(t.industries.tabs[0].id);
  const activeIndustry =
    t.industries.tabs.find((tab) => tab.id === indTab) ?? t.industries.tabs[0];

  return (
    <div className="page page--premium">
      <header className="ph-hero">
        <div className="ph-shell ph-hero__grid">
          <div className="ph-hero__copy">
            <h1 className="ph-hero__title">
              {t.hero.titleBefore}
              <span className="ph-accent">{t.hero.titleAccent}</span>
              {t.hero.titleAfter}
            </h1>
            <p className="ph-hero__sub">{t.hero.sub}</p>
            <div className="ph-hero__actions">
              <LocaleLink href="/demarrer" className="btn-primary">
                {t.hero.ctaPrimary} →
              </LocaleLink>
              <a href="#en-action" className="btn-ghost">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <ul className="ph-hero__badges">
              {t.hero.badges.map((badge) => (
                <li key={badge}>{badge}</li>
              ))}
            </ul>
          </div>
          <HeroVisual osLabel={t.hero.osLabel} agents={t.hero.agents} />
        </div>
      </header>

      <section className="ph-section" id="constat">
        <div className="ph-shell ph-problem">
          <div>
            <p className="ph-eyebrow">{t.problem.eyebrow}</p>
            <AccentTitle
              before={t.problem.titleBefore}
              accent={t.problem.titleAccent}
            />
          </div>
          <div className="ph-compare">
            <div className="ph-compare__head">
              <span>{t.problem.today}</span>
              <span>{t.problem.withUs}</span>
            </div>
            {t.problem.rows.map((row) => (
              <div key={row.today} className="ph-compare__row">
                <span>{row.today}</span>
                <span>{row.withUs}</span>
              </div>
            ))}
          </div>
          <p className="ph-problem__side">{t.problem.side}</p>
        </div>
      </section>

      <section className="ph-section ph-section--tight" id="modele">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.model.eyebrow}</p>
          <h2 className="ph-title">{t.model.title}</h2>
          <div className="ph-model">
            {t.model.steps.map((step, i) => (
              <article key={step.tag} className="ph-model__card">
                <div className="ph-model__n">{step.n}</div>
                <div className="ph-model__tag">{step.tag}</div>
                <h3>{step.title}</h3>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {i < t.model.steps.length - 1 ? (
                  <span className="ph-model__arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="en-action">
        <div className="ph-shell ph-org">
          <div className="ph-org__copy">
            <p className="ph-eyebrow">{t.org.eyebrow}</p>
            <AccentTitle
              before={t.org.titleBefore}
              accent={t.org.titleAccent}
            />
            <p className="ph-body">{t.org.body}</p>
            <LocaleLink href="/solution" className="btn-primary">
              {t.org.cta} →
            </LocaleLink>
          </div>
          <div className="ph-org__panel">
            <div className="ph-org__log">
              <div className="ph-org__log-title">{t.org.logTitle}</div>
              <ul>
                {t.org.logs.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="ph-org__flow">
              <div className="ph-org__node ph-org__node--human">{t.org.human}</div>
              <div className="ph-org__node">{t.org.orchestrator}</div>
              <div className="ph-org__agents">
                {t.org.agents.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
              <div className="ph-org__node ph-org__node--os">REMPARIA OS</div>
              <div className="ph-org__tools">
                {t.org.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--tight" id="workforce">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.workforce.eyebrow}</p>
          <AccentTitle
            before={t.workforce.titleBefore}
            accent={t.workforce.titleAccent}
          />
          <div className="ph-workforce">
            {t.workforce.agents.map((agent) => (
              <article key={agent.tag} className="ph-agent-card">
                <div className="ph-agent-card__tag">{agent.tag}</div>
                <h3>{agent.title}</h3>
                <p>{agent.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="souverainete">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.sovereignty.eyebrow}</p>
          <AccentTitle
            before={t.sovereignty.titleBefore}
            accent={t.sovereignty.titleAccent}
          />
          <div
            className="ph-tabs"
            role="tablist"
            aria-label={t.sovereignty.eyebrow}
          >
            {t.sovereignty.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${sovId}-${tab.id}`}
                aria-selected={sovTab === tab.id}
                className={sovTab === tab.id ? "is-active" : undefined}
                onClick={() => setSovTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="ph-sov">
            <div className="ph-sov__diagram" data-mode={sovTab}>
              <div className="ph-sov__models">
                {t.sovereignty.models.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
              <div className="ph-sov__os">{t.sovereignty.os}</div>
              <div className="ph-sov__base">
                <span>{t.sovereignty.data}</span>
                <span>{t.sovereignty.agents}</span>
              </div>
            </div>
            <ul className="ph-check">
              {t.sovereignty.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--tight" id="industries">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.industries.eyebrow}</p>
          <AccentTitle
            before={t.industries.titleBefore}
            accent={t.industries.titleAccent}
            after={t.industries.titleAfter}
          />
          <div
            className="ph-industry-tabs"
            role="tablist"
            aria-label={t.industries.eyebrow}
          >
            {t.industries.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${indId}-${tab.id}`}
                aria-selected={indTab === tab.id}
                className={indTab === tab.id ? "is-active" : undefined}
                onClick={() => setIndTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="ph-industry-panel">
            <h3>{activeIndustry.title}</h3>
            <div className="ph-industry-flow">
              <div className="ph-org__node">ORCHESTRATOR</div>
              <div className="ph-org__agents">
                {activeIndustry.agents.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
              <div className="ph-org__tools">
                {t.industries.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section" id="roi">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.roi.eyebrow}</p>
          <AccentTitle before={t.roi.titleBefore} accent={t.roi.titleAccent} />
          <RoiCalculator labels={t.roi} />
        </div>
      </section>

      <section className="ph-section ph-section--tight" id="operations">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.ops.eyebrow}</p>
          <AccentTitle before={t.ops.titleBefore} accent={t.ops.titleAccent} />
          <ul className="ph-ops">
            {t.ops.items.map((item) => (
              <li key={item}>
                <span className="ph-ops__dot" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ph-final">
        <div className="ph-shell ph-final__inner">
          <AccentTitle
            before={t.finalCta.titleBefore}
            accent={t.finalCta.titleAccent}
          />
          <LocaleLink href="/demarrer" className="btn-primary ph-final__cta">
            {t.finalCta.cta} →
          </LocaleLink>
          <div className="ph-final__horizon" aria-hidden />
        </div>
      </section>
    </div>
  );
}
