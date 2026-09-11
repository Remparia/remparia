"use client";

import LocaleLink from "@/components/LocaleLink";
import { sovereigntyPage } from "@/lib/sovereignty-page";
import { useLang } from "@/lib/lang";

export default function SovereigntyPage() {
  const { lang } = useLang();
  const t = sovereigntyPage(lang);
  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <div className="page page--premium page--premium-inner sov-page">
      <header className="ph-page-hero">
        <div className="ph-shell">
          <nav className="ph-crumbs" aria-label="Breadcrumb">
            <LocaleLink href="/">{home}</LocaleLink>
            <span aria-hidden>/</span>
            <span>{t.eyebrow}</span>
          </nav>
          <p className="ph-eyebrow">{t.heroIndex}</p>
          <h1 className="ph-hero__title">
            {t.titleBefore}
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

      <section className="ph-section ph-section--light" id="position">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.position.eyebrow}</p>
          <h2 className="ph-title">{t.position.title}</h2>
          <div className="gov-policy">
            {t.position.items.map((item) => (
              <article key={item.tag}>
                <span className="gov-policy__tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="modes">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.modes.eyebrow}</p>
          <h2 className="ph-title">{t.modes.title}</h2>
          <div className="sov-modes">
            {t.modes.items.map((mode) => (
              <article key={mode.id} className={`sov-mode sov-mode--${mode.id}`}>
                <span className="sov-mode__tag">{mode.tag}</span>
                <h3>{mode.title}</h3>
                <p className="sov-mode__sub">{mode.subtitle}</p>
                <p>{mode.desc}</p>
                <ul>
                  {mode.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="sov-mode__fit">{mode.fit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="invariant">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.invariant.eyebrow}</p>
          <h2 className="ph-title">{t.invariant.title}</h2>
          <p className="ph-body">{t.invariant.body}</p>
          <div className="ph-workforce" style={{ marginTop: 28 }}>
            {t.invariant.items.map((item) => (
              <article key={item.title} className="ph-agent-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="where">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.where.eyebrow}</p>
          <h2 className="ph-title">{t.where.title}</h2>
          <div className="gov-audit">
            <table>
              <thead>
                <tr>
                  {t.where.headers.map((header) => (
                    <th key={header}>{header}</th>
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
          <p className="gov-note">{t.where.note}</p>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="choice">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.compare.eyebrow}</p>
          <h2 className="ph-title">{t.compare.title}</h2>
          <div className="gov-audit sov-compare">
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
                      <td key={value}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ph-section" id="commerce">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.commerce.eyebrow}</p>
          <h2 className="ph-title">{t.commerce.title}</h2>
          <p className="ph-body">{t.commerce.body}</p>
          <div className="gov-scenario">
            <ol>
              {t.commerce.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="control">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.governance.eyebrow}</p>
          <h2 className="ph-title">{t.governance.title}</h2>
          <p className="ph-body">{t.governance.body}</p>
          <div className="sov-links">
            <LocaleLink href={t.governance.hrefGov} className="text-link">
              {t.governance.ctaGov} →
            </LocaleLink>
            <LocaleLink href={t.governance.hrefOs} className="text-link">
              {t.governance.ctaOs} →
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="ph-final ph-section--light">
        <div className="ph-shell ph-final__inner">
          <LocaleLink href={t.ctaPrimaryHref} className="btn-primary ph-final__cta">
            {t.finalCta} →
          </LocaleLink>
          <div className="ph-final__horizon" aria-hidden />
        </div>
      </section>
    </div>
  );
}
