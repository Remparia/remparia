import LocaleLink from "@/components/LocaleLink";
import type { Lang } from "@/lib/content";

const COPY = {
  fr: {
    badge: "Interne",
    home: "Retour au site",
    kicker: "Remparia OS",
    title: "Design system",
    lede: "Source unique : typographie Inter Tight / Inter / IBM Plex Mono, palette noir–blanc–lime #CCFC41, boutons et échelle. Page noindex, hors menu.",
    toc: [
      ["couleurs", "Couleurs"],
      ["typo", "Typographie"],
      ["espacement", "Espacement"],
      ["boutons", "Boutons"],
      ["liens", "Liens"],
      ["champs", "Champs"],
      ["cartes", "Cartes"],
    ],
    colorsTitle: "Couleurs",
    colorsLede: "90 % noir/blanc · 10 % lime. Le bleu info est sémantique uniquement.",
    neutrals: "Neutrals",
    accent: "Accent lime",
    semantic: "Sémantique",
    typeTitle: "Typographie",
    typeLede: "Display = Inter Tight · Body = Inter · Data = IBM Plex Mono.",
    spaceTitle: "Espacement",
    spaceLede: "Grille 8px — tokens --space-*.",
    buttonsTitle: "Boutons",
    buttonsLede: "Primary lime · Secondary bordure · Ghost texte lime.",
    linksTitle: "Liens",
    linksLede: "Lien de page, lien texte accent, fil d’Ariane.",
    fieldsTitle: "Champs",
    fieldsLede: "Même padding, bordure et focus que le formulaire contact.",
    cardsTitle: "Cartes métriques",
    cardsLede: "Graphite #111, bordure fine, chiffre blanc, accent lime.",
    name: "Nom et prénom",
    email: "Email professionnel",
    message: "Message",
    invalid: "Format d’email invalide.",
  },
  en: {
    badge: "Internal",
    home: "Back to site",
    kicker: "Remparia OS",
    title: "Design system",
    lede: "Single source: Inter Tight / Inter / IBM Plex Mono, black–white–lime #CCFC41, buttons and scale. Noindex, not in nav.",
    toc: [
      ["couleurs", "Colour"],
      ["typo", "Typography"],
      ["espacement", "Spacing"],
      ["boutons", "Buttons"],
      ["liens", "Links"],
      ["champs", "Fields"],
      ["cartes", "Cards"],
    ],
    colorsTitle: "Colour",
    colorsLede: "90% black/white · 10% lime. Info blue is semantic only.",
    neutrals: "Neutrals",
    accent: "Lime accent",
    semantic: "Semantic",
    typeTitle: "Typography",
    typeLede: "Display = Inter Tight · Body = Inter · Data = IBM Plex Mono.",
    spaceTitle: "Spacing",
    spaceLede: "8px grid — --space-* tokens.",
    buttonsTitle: "Buttons",
    buttonsLede: "Primary lime · Secondary border · Ghost lime text.",
    linksTitle: "Links",
    linksLede: "Page link, accent text link, breadcrumb.",
    fieldsTitle: "Fields",
    fieldsLede: "Same padding, border and focus as the contact form.",
    cardsTitle: "Metric cards",
    cardsLede: "Graphite #111, hairline border, white figure, lime accent.",
    name: "Full name",
    email: "Work email",
    message: "Message",
    invalid: "Invalid email format.",
  },
} as const;

const NEUTRALS = [
  { token: "--black", value: "#0A0A0A" },
  { token: "--graphite", value: "#111111" },
  { token: "--slate", value: "#1A1A1A" },
  { token: "--steel", value: "#262626" },
  { token: "--white", value: "#FFFFFF" },
  { token: "--mist", value: "#E6E6E6" },
] as const;

const LIME = [
  { token: "--lime", value: "#CCFC41" },
  { token: "--lime-80", value: "80%" },
  { token: "--lime-60", value: "60%" },
  { token: "--lime-40", value: "40%" },
  { token: "--lime-20", value: "20%" },
] as const;

const SEMANTIC = [
  { token: "--success", value: "#39FF14" },
  { token: "--warning", value: "#FFDA00" },
  { token: "--danger", value: "#FF3B30" },
  { token: "--info", value: "#3B82F6" },
] as const;

const TYPE_ROWS = [
  { name: "Display 1", cls: "ds-type-display-1", meta: "72 / 700 / Inter Tight" },
  { name: "Display 2", cls: "ds-type-display-2", meta: "56 / 700 / Inter Tight" },
  { name: "H1", cls: "ds-type-h1", meta: "40 / 700 / Inter Tight" },
  { name: "H2", cls: "ds-type-h2", meta: "32 / 600 / Inter Tight" },
  { name: "H3", cls: "ds-type-h3", meta: "24 / 600 / Inter Tight" },
  { name: "H4", cls: "ds-type-h4", meta: "20 / 600 / Inter Tight" },
  { name: "Eyebrow", cls: "ds-type-eyebrow", meta: "12 / 600 / 0.12em" },
  { name: "Body Large", cls: "ds-type-body-lg", meta: "18 / 400 / Inter" },
  { name: "Body", cls: "ds-type-body", meta: "16 / 400 / Inter" },
  { name: "Small", cls: "ds-type-small", meta: "14 / 400 / Inter" },
  { name: "Caption", cls: "ds-type-caption", meta: "12 / 400 / Inter" },
  { name: "Data / Mono", cls: "ds-type-mono", meta: "12 / IBM Plex Mono" },
] as const;

const SPACES = [8, 16, 24, 32, 40, 48, 64, 80, 96, 128] as const;

function SwatchGrid({
  items,
}: {
  items: readonly { token: string; value: string }[];
}) {
  return (
    <div className="ds-lab__grid">
      {items.map((s) => (
        <div key={s.token} className="ds-lab__swatch">
          <div
            className="ds-lab__swatch-chip"
            style={{ background: `var(${s.token})` }}
          />
          <code>{s.token}</code>
          <span className="ds-lab__meta">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function DesignSystemPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <div className="ds-lab">
      <header className="ds-lab__bar">
        <div className="ds-lab__brand">
          <strong>Remparia</strong>
          <span className="ds-lab__badge">{t.badge}</span>
        </div>
        <LocaleLink href="/" className="text-link">
          {t.home} →
        </LocaleLink>
      </header>

      <div className="ds-lab__layout">
        <nav className="ds-lab__toc" aria-label="Design system">
          {t.toc.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="ds-lab__main">
          <p className="ds-lab__kicker">{t.kicker}</p>
          <h1 className="ds-type-display-2">{t.title}</h1>
          <p className="ds-lab__lede" style={{ marginTop: 12 }}>
            {t.lede}
          </p>

          <section id="couleurs">
            <p className="ds-lab__kicker">01</p>
            <h2 className="ds-lab__h2">{t.colorsTitle}</h2>
            <p className="ds-lab__lede">{t.colorsLede}</p>
            <p className="ds-lab__meta">{t.neutrals}</p>
            <SwatchGrid items={NEUTRALS} />
            <p className="ds-lab__meta" style={{ marginTop: 24 }}>
              {t.accent}
            </p>
            <SwatchGrid items={LIME} />
            <p className="ds-lab__meta" style={{ marginTop: 24 }}>
              {t.semantic}
            </p>
            <SwatchGrid items={SEMANTIC} />
          </section>

          <section id="typo">
            <p className="ds-lab__kicker">02</p>
            <h2 className="ds-lab__h2">{t.typeTitle}</h2>
            <p className="ds-lab__lede">{t.typeLede}</p>
            <div className="ds-lab__stack">
              {TYPE_ROWS.map((row) => (
                <div key={row.name}>
                  <p className="ds-lab__meta">
                    {row.name} · {row.meta}
                  </p>
                  <p className={row.cls}>
                    AI shouldn&apos;t be another tool. It should transform how
                    your company operates.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="espacement">
            <p className="ds-lab__kicker">03</p>
            <h2 className="ds-lab__h2">{t.spaceTitle}</h2>
            <p className="ds-lab__lede">{t.spaceLede}</p>
            <div className="ds-space-row">
              {SPACES.map((n) => (
                <div key={n} className="ds-space-item">
                  <div className="ds-space-bar" style={{ width: n }} />
                  <code>{n}px</code>
                </div>
              ))}
            </div>
          </section>

          <section id="boutons">
            <p className="ds-lab__kicker">04</p>
            <h2 className="ds-lab__h2">{t.buttonsTitle}</h2>
            <p className="ds-lab__lede">{t.buttonsLede}</p>
            <div className="ds-lab__row">
              <button type="button" className="btn-primary">
                Book a SIGNAL Session →
              </button>
              <button type="button" className="btn-secondary">
                See Remparia OS →
              </button>
              <button type="button" className="btn-ghost">
                Explore method →
              </button>
              <button type="button" className="btn-primary" disabled>
                Disabled
              </button>
            </div>
          </section>

          <section id="liens">
            <p className="ds-lab__kicker">05</p>
            <h2 className="ds-lab__h2">{t.linksTitle}</h2>
            <p className="ds-lab__lede">{t.linksLede}</p>
            <div className="ds-lab__stack">
              <div>
                <p className="ds-lab__meta">a (default)</p>
                <p>
                  Écrire à{" "}
                  <a href="mailto:contact@remparia.com">contact@remparia.com</a>
                </p>
              </div>
              <div>
                <p className="ds-lab__meta">.text-link</p>
                <LocaleLink href="/signal" className="text-link">
                  Explorer SIGNAL →
                </LocaleLink>
              </div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <LocaleLink href="/" className="breadcrumbs__link">
                      Accueil
                    </LocaleLink>
                    <span className="breadcrumbs__sep">/</span>
                  </li>
                  <li className="breadcrumbs__item">
                    <span className="breadcrumbs__current">Design system</span>
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          <section id="champs">
            <p className="ds-lab__kicker">06</p>
            <h2 className="ds-lab__h2">{t.fieldsTitle}</h2>
            <p className="ds-lab__lede">{t.fieldsLede}</p>
            <form className="ds-lab__form" action="#champs">
              <label>
                <span>{t.name}</span>
                <input type="text" name="name" autoComplete="name" />
              </label>
              <label>
                <span>{t.email}</span>
                <input
                  type="email"
                  name="email"
                  aria-invalid="true"
                  defaultValue="not-an-email"
                />
                <p className="contact-field-error">{t.invalid}</p>
              </label>
              <label>
                <span>{t.message}</span>
                <textarea name="message" rows={4} />
              </label>
              <div className="ds-lab__row">
                <button type="button" className="btn-primary">
                  Envoyer →
                </button>
                <button type="button" className="btn-ghost">
                  Annuler
                </button>
              </div>
            </form>
          </section>

          <section id="cartes">
            <p className="ds-lab__kicker">07</p>
            <h2 className="ds-lab__h2">{t.cardsTitle}</h2>
            <p className="ds-lab__lede">{t.cardsLede}</p>
            <div className="ds-metric-grid">
              <article className="ds-metric">
                <span className="ds-metric__icon" aria-hidden />
                <strong>50+</strong>
                <span>Agents orchestrés</span>
              </article>
              <article className="ds-metric">
                <span className="ds-metric__icon" aria-hidden />
                <strong>120+</strong>
                <span>Workflows gouvernés</span>
              </article>
              <article className="ds-metric">
                <span className="ds-metric__icon" aria-hidden />
                <strong>99.9%</strong>
                <span>Uptime cible</span>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
