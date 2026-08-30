"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { useLang } from "@/lib/lang";
import {
  signalPage,
  type SignalMetric,
} from "@/lib/signal-page";

function MetricIcon({ icon }: { icon: SignalMetric["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (icon) {
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </svg>
      );
    case "db":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "repeat":
      return (
        <svg {...common}>
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 014-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 01-4 4H3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z" />
        </svg>
      );
    case "value":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M9.5 9.5c.6-1 1.5-1.5 2.5-1.5 1.4 0 2.5.8 2.5 2s-1.1 2-2.5 2h-1c-1.4 0-2.5.8-2.5 2s1.1 2 2.5 2c1 0 1.9-.5 2.5-1.5" />
        </svg>
      );
  }
}

function ScorePips({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="sg-pips" aria-label={`${value}/${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < value ? "sg-pips__cell is-on" : "sg-pips__cell"}
        />
      ))}
    </span>
  );
}

function EuroValue({ n }: { n: 1 | 2 | 3 }) {
  return <span className="sg-euros">{"€".repeat(n)}</span>;
}

function HeroRadar({
  company,
  processes,
  data,
  people,
  systems,
  core,
}: {
  company: string;
  processes: string;
  data: string;
  people: string;
  systems: string;
  core: string;
}) {
  const alt = `${core} — ${company}, ${processes}, ${data}, ${people}, ${systems}`;
  return (
    <div className="sg-radar">
      <Image
        className="sg-radar__img"
        src="/signal-hero-radar.png"
        alt={alt}
        width={1024}
        height={1024}
        priority
        sizes="(max-width: 959px) 94vw, min(748px, 56vw)"
      />
    </div>
  );
}

function SpiderChart({
  axes,
  scores,
}: {
  axes: readonly { label: string; detail: string }[];
  scores: readonly number[];
}) {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 96;
  const n = axes.length;

  function point(i: number, r: number) {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r,
    };
  }

  const rings = [0.25, 0.5, 0.75, 1].map((t) =>
    Array.from({ length: n }, (_, i) => point(i, maxR * t))
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
      .join(" ") + " Z",
  );

  const dataPath =
    Array.from({ length: n }, (_, i) =>
      point(i, maxR * Math.max(0.08, Math.min(1, scores[i] ?? 0))),
    )
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
      .join(" ") + " Z";

  return (
    <div className="sg-spider">
      <svg viewBox={`0 0 ${size} ${size}`} className="sg-spider__svg">
        {rings.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgba(204,252,65,0.2)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: n }, (_, i) => {
          const p = point(i, maxR);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="rgba(204,252,65,0.22)"
              strokeWidth="1"
            />
          );
        })}
        <path
          d={dataPath}
          fill="rgba(204,252,65,0.28)"
          stroke="#ccfc41"
          strokeWidth="2"
        />
      </svg>
      {axes.map((axis, i) => {
        const p = point(i, maxR + 28);
        return (
          <div
            key={axis.label}
            className="sg-spider__label"
            style={{ left: `${(p.x / size) * 100}%`, top: `${(p.y / size) * 100}%` }}
          >
            <strong>{axis.label}</strong>
            <span>{axis.detail}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function SignalPage() {
  const { lang } = useLang();
  const t = signalPage(lang);

  return (
    <div className="page page--signal">
      <header className="sg-hero">
        <div className="sg-shell sg-hero__grid">
          <div className="sg-hero__copy">
            <span className="sg-badge">{t.badge}</span>
            <h1 className="sg-hero__title">
              {t.titleLead}
              <span className="sg-accent">{t.titleAccent1}</span>
              {t.titleMid}
              <span className="sg-accent">{t.titleAccent2}</span>
            </h1>
            <p className="sg-hero__sub">{t.sub}</p>
            <div className="sg-hero__actions">
              <LocaleLink href={t.ctaPrimaryHref} className="sg-btn sg-btn--outline">
                {t.ctaPrimary} →
              </LocaleLink>
              <a href={t.ctaSecondaryHref} className="sg-link-play">
                <span className="sg-link-play__icon" aria-hidden>
                  ▶
                </span>
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <HeroRadar {...t.radar} />
        </div>
      </header>

      <section className="sg-section" aria-labelledby="sg-results-title">
        <div className="sg-shell sg-split">
          <article className="sg-panel">
            <h2 id="sg-results-title" className="sg-panel__title">
              {t.results.title}
            </h2>
            <p className="sg-panel__sub">{t.results.sub}</p>
            <ul className="sg-metrics">
              {t.metrics.map((m) => (
                <li key={m.id} className="sg-metric">
                  <span className="sg-metric__icon">
                    <MetricIcon icon={m.icon} />
                  </span>
                  <div className="sg-metric__body">
                    <div className="sg-metric__row">
                      <span className="sg-metric__label">{m.label}</span>
                      <span className="sg-metric__value">{m.valueLabel}</span>
                    </div>
                    <div className="sg-metric__bar" aria-hidden>
                      <span style={{ width: `${m.score}%` }} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="sg-panel sg-panel--map">
            <h2 className="sg-panel__title">{t.map.title}</h2>
            <SpiderChart axes={t.map.axes} scores={t.map.scores} />
          </article>
        </div>
      </section>

      <section
        id={t.journey.id}
        className="sg-section sg-section--journey"
        aria-labelledby="sg-journey-title"
      >
        <div className="sg-shell">
          <header className="sg-protocol__head">
            <h2 id="sg-journey-title" className="sg-section__title">
              {t.journey.title}
            </h2>
            {"sub" in t.journey && t.journey.sub ? (
              <p className="sg-section__sub">{t.journey.sub}</p>
            ) : null}
          </header>

          <ol className="sg-protocol">
            {t.journey.steps.map((step, i) => (
              <li key={step.id} className="sg-protocol__step">
                <div className="sg-protocol__rail" aria-hidden>
                  <span className="sg-protocol__letter">{step.letter}</span>
                  {i < t.journey.steps.length - 1 ? (
                    <span className="sg-protocol__line" />
                  ) : null}
                </div>

                <article className="sg-protocol__card">
                  <div className="sg-protocol__card-top">
                    <div>
                      <p className="sg-protocol__index">
                        {String(i + 1).padStart(2, "0")} / {step.letter}
                      </p>
                      <h3 className="sg-protocol__name">{step.title}</h3>
                    </div>
                    <p className="sg-protocol__time">{step.timeline}</p>
                  </div>

                  <p className="sg-protocol__desc">{step.desc}</p>

                  <dl className="sg-protocol__meta">
                    <div className="sg-protocol__meta-item">
                      <dt>{t.journey.labels.deliverable}</dt>
                      <dd>{step.deliverable}</dd>
                    </div>
                    <div className="sg-protocol__meta-item">
                      <dt>{t.journey.labels.artifacts}</dt>
                      <dd>{step.artifacts}</dd>
                    </div>
                  </dl>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sg-section" aria-labelledby="sg-deliverable-title">
        <div className="sg-shell sg-deliver">
          <div className="sg-deliver__intro">
            <span className="sg-badge sg-badge--soft">{t.deliverable.eyebrow}</span>
            <h2 id="sg-deliverable-title" className="sg-deliver__title">
              {t.deliverable.titleBefore}
              <span className="sg-accent">{t.deliverable.titleAccent}</span>
            </h2>
            <p className="sg-deliver__body">{t.deliverable.body}</p>
            <LocaleLink
              href={t.deliverable.sampleHref}
              className="sg-btn sg-btn--outline"
            >
              {t.deliverable.sampleCta} →
            </LocaleLink>
            <div className="sg-book" aria-hidden>
              <div className="sg-book__cover">
                <span className="sg-book__mark" />
                <strong>{t.deliverable.bookTitle}</strong>
                <span>{t.deliverable.bookSub}</span>
              </div>
            </div>
          </div>

          <div className="sg-table-wrap">
            <p className="sg-table__kicker">{t.deliverable.tableTitle}</p>
            <table className="sg-table">
              <thead>
                <tr>
                  <th>{t.deliverable.columns.opportunity}</th>
                  <th>{t.deliverable.columns.impact}</th>
                  <th>{t.deliverable.columns.feasibility}</th>
                  <th>{t.deliverable.columns.value}</th>
                  <th>{t.deliverable.columns.priority}</th>
                </tr>
              </thead>
              <tbody>
                {t.deliverable.rows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>
                      <ScorePips value={row.impact} />
                    </td>
                    <td>
                      <ScorePips value={row.feasibility} />
                    </td>
                    <td>
                      <EuroValue n={row.value} />
                    </td>
                    <td>
                      <span className="sg-priority">{row.priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sg-section sg-faq" aria-labelledby="sg-faq-title">
        <div className="sg-shell sg-faq__inner">
          <header className="sg-faq__head">
            <span className="sg-badge sg-badge--soft">{t.faq.eyebrow}</span>
            <h2 id="sg-faq-title" className="sg-faq__title">
              {t.faq.title}
            </h2>
            <p className="sg-faq__sub">{t.faq.sub}</p>
          </header>
          <div className="sg-faq__list">
            {t.faq.items.map((faq) => (
              <details key={faq.q} className="sg-faq__item">
                <summary className="sg-faq__question">{faq.q}</summary>
                <p className="sg-faq__answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-final" aria-labelledby="sg-final-title">
        <div className="sg-shell sg-final__inner">
          <h2 id="sg-final-title" className="sg-final__title">
            {t.final.title}
          </h2>
          <LocaleLink href={t.final.href} className="btn-primary sg-final__cta">
            {t.final.cta} →
          </LocaleLink>
          <p className="sg-final__tagline">{t.final.body}</p>
        </div>
      </section>
    </div>
  );
}
