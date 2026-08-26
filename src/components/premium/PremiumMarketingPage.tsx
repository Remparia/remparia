"use client";

import LocaleLink from "@/components/LocaleLink";
import type { PremiumPageCopy } from "@/lib/pages-premium";

function AccentTitle({
  title,
  accent,
}: {
  title: string;
  accent?: string;
}) {
  if (!accent) return <h2 className="ph-title">{title}</h2>;
  return (
    <h2 className="ph-title">
      {title}
      <span className="ph-accent">{accent}</span>
    </h2>
  );
}

export default function PremiumMarketingPage({
  copy,
  homeLabel,
}: {
  copy: PremiumPageCopy;
  homeLabel: string;
}) {
  return (
    <div className="page page--premium page--premium-inner">
      <header className="ph-page-hero">
        <div className="ph-shell">
          <nav className="ph-crumbs" aria-label="Breadcrumb">
            <LocaleLink href="/">{homeLabel}</LocaleLink>
            <span aria-hidden>/</span>
            <span>{copy.eyebrow}</span>
          </nav>
          <p className="ph-eyebrow">{copy.eyebrow}</p>
          <h1 className="ph-hero__title">
            {copy.title}
            {copy.titleAccent ? (
              <span className="ph-accent">{copy.titleAccent}</span>
            ) : null}
          </h1>
          <p className="ph-hero__sub">{copy.sub}</p>
          <div className="ph-hero__actions">
            <LocaleLink href={copy.ctaPrimaryHref} className="btn-primary">
              {copy.ctaPrimary} →
            </LocaleLink>
            {copy.ctaSecondary && copy.ctaSecondaryHref ? (
              <LocaleLink href={copy.ctaSecondaryHref} className="btn-ghost">
                {copy.ctaSecondary}
              </LocaleLink>
            ) : null}
          </div>
        </div>
      </header>

      {copy.sections.map((section, index) => {
        const light = index % 2 === 0;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`ph-section${light ? " ph-section--light" : ""}`}
          >
            <div className="ph-shell">
              <p className="ph-eyebrow">{section.eyebrow}</p>
              <AccentTitle title={section.title} accent={section.titleAccent} />
              {section.body ? <p className="ph-body">{section.body}</p> : null}

              {section.blocks?.length ? (
                <div className="ph-workforce" style={{ marginTop: 28 }}>
                  {section.blocks.map((block) => (
                    <article key={block.title} className="ph-agent-card">
                      <h3>{block.title}</h3>
                      <p>{block.desc}</p>
                      {block.items?.length ? (
                        <ul className="ph-inline-tags">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : null}

              {section.list?.length ? (
                <ul className="ph-check" style={{ marginTop: 28 }}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {section.flow?.length ? (
                <div className="ph-flow" style={{ marginTop: 28 }}>
                  {section.flow.map((step, i) => (
                    <div key={step} className="ph-flow__step">
                      <span className="ph-org__node">{step}</span>
                      {i < section.flow!.length - 1 ? (
                        <span className="ph-flow__arrow" aria-hidden>
                          →
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.rows?.length ? (
                <div className="ph-audit" style={{ marginTop: 28 }}>
                  {section.rows.map((row) => (
                    <div key={row.label} className="ph-audit__row">
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.note ? (
                <p className="ph-note" style={{ marginTop: 18 }}>
                  {section.note}
                </p>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className="ph-final ph-section--light">
        <div className="ph-shell ph-final__inner">
          <LocaleLink href={copy.ctaPrimaryHref} className="btn-primary ph-final__cta">
            {copy.ctaPrimary} →
          </LocaleLink>
          <div className="ph-final__horizon" aria-hidden />
        </div>
      </section>
    </div>
  );
}
