"use client";

import LocaleLink from "@/components/LocaleLink";
import { governancePage } from "@/lib/governance-page";
import { useLang } from "@/lib/lang";

export default function GovernancePage() {
  const { lang } = useLang();
  const t = governancePage(lang);
  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <div className="page page--premium page--premium-inner gov-page">
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

      <section className="ph-section ph-section--light" id="delegation">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.heatmap.eyebrow}</p>
          <h2 className="ph-title">{t.heatmap.title}</h2>
          <p className="ph-body">{t.heatmap.intro}</p>
          <div className="gov-heatmap">
            {t.heatmap.items.map((item) => (
              <article
                key={item.level}
                className={`ph-agent-card heatmap-card heatmap-card--${item.level}`}
              >
                <span className="ph-agent-card__tag">
                  <span className="status-dot" aria-hidden />
                  {item.title}
                </span>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="pillars">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.pillars.eyebrow}</p>
          <h2 className="ph-title">{t.pillars.title}</h2>
          <div className="ph-workforce" style={{ marginTop: 28 }}>
            {t.pillars.items.map((item) => (
              <article key={item.title} className="ph-agent-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="policies">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.policies.eyebrow}</p>
          <h2 className="ph-title">{t.policies.title}</h2>
          <div className="gov-policy">
            {t.policies.items.map((item) => (
              <article key={item.tag}>
                <span className="gov-policy__tag">{item.tag}</span>
                <h3 className="ph-title" style={{ fontSize: "1.2rem" }}>
                  {item.title}
                </h3>
                <p className="ph-body">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ph-section" id="commerce">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.scenario.eyebrow}</p>
          <h2 className="ph-title">{t.scenario.title}</h2>
          <p className="ph-body">{t.scenario.body}</p>
          <div className="gov-scenario">
            <ol>
              {t.scenario.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <LocaleLink
              href="/solutions/commerce"
              className="text-link"
              style={{ marginTop: 16, display: "inline-block" }}
            >
              {lang === "fr" ? "Voir l’Agent Commerce →" : "See the Commerce Agent →"}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="ph-section ph-section--light" id="audit">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.audit.eyebrow}</p>
          <h2 className="ph-title">{t.audit.title}</h2>
          <div className="gov-audit">
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
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="gov-note">{t.audit.note}</p>
        </div>
      </section>

      <section className="ph-section" id="deployment">
        <div className="ph-shell">
          <p className="ph-eyebrow">{t.sovereignty.eyebrow}</p>
          <h2 className="ph-title">{t.sovereignty.title}</h2>
          <p className="ph-body">{t.sovereignty.body}</p>
          <LocaleLink
            href={t.sovereignty.href}
            className="text-link"
            style={{ marginTop: 16, display: "inline-block" }}
          >
            {t.sovereignty.cta} →
          </LocaleLink>
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
