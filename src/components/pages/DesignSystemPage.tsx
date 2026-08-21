import LocaleLink from "@/components/LocaleLink";
import type { Lang } from "@/lib/content";

const COPY = {
  fr: {
    badge: "Interne",
    home: "Retour au site",
    kicker: "Remparia",
    title: "Design system",
    lede: "Source unique pour couleurs, titres, boutons, liens et champs. Cette page n’est pas dans le menu, ni le sitemap, et envoie noindex.",
    toc: [
      ["couleurs", "Couleurs"],
      ["typo", "Typographie"],
      ["boutons", "Boutons"],
      ["liens", "Liens"],
      ["champs", "Champs"],
      ["cartes", "Cartes"],
    ],
    colorsTitle: "Couleurs",
    colorsLede: "Tokens CSS dans :root — à réutiliser, ne pas recoder des hex en dur.",
    typeTitle: "Typographie",
    typeLede: "Titres en Stolzl, UI en SF Pro. Casse uppercase sur les display.",
    buttonsTitle: "Boutons",
    buttonsLede: "Un primaire, un ghost, un compact nav, un inverse sur fond accent.",
    linksTitle: "Liens",
    linksLede: "Lien de page, lien texte accent, fil d’Ariane.",
    fieldsTitle: "Champs",
    fieldsLede: "Même padding, bordure et focus que le formulaire contact.",
    cardsTitle: "Cartes",
    cardsLede: "Bloc info standard — bordure, titre, corps.",
    name: "Nom et prénom",
    email: "Email professionnel",
    message: "Message",
    invalid: "Format d’email invalide.",
  },
  en: {
    badge: "Internal",
    home: "Back to site",
    kicker: "Remparia",
    title: "Design system",
    lede: "Single source for colours, headings, buttons, links and fields. This page is not in the nav or sitemap, and sends noindex.",
    toc: [
      ["couleurs", "Colour"],
      ["typo", "Typography"],
      ["boutons", "Buttons"],
      ["liens", "Links"],
      ["champs", "Fields"],
      ["cartes", "Cards"],
    ],
    colorsTitle: "Colour",
    colorsLede: "CSS tokens on :root — reuse these, don’t hardcode hex values.",
    typeTitle: "Typography",
    typeLede: "Headlines in Stolzl, UI in SF Pro. Display styles are uppercase.",
    buttonsTitle: "Buttons",
    buttonsLede: "Primary, ghost, compact nav, and inverse on accent.",
    linksTitle: "Links",
    linksLede: "Page link, accent text link, breadcrumb.",
    fieldsTitle: "Fields",
    fieldsLede: "Same padding, border and focus as the contact form.",
    cardsTitle: "Cards",
    cardsLede: "Standard info block — border, title, body.",
    name: "Full name",
    email: "Work email",
    message: "Message",
    invalid: "Invalid email format.",
  },
} as const;

const SWATCHES = [
  { token: "--background", value: "#000000" },
  { token: "--surface", value: "#050505" },
  { token: "--ink", value: "#0a0a0a" },
  { token: "--text", value: "#ffffff" },
  { token: "--accent", value: "#c8ff00" },
  { token: "--accent-deep", value: "#21d760" },
  { token: "--accent-blend", value: "mix 42/58" },
  { token: "--danger", value: "#ff6b6b" },
] as const;

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
          <h1 className="page-hero__title">{t.title}</h1>
          <p className="page-hero__sub">{t.lede}</p>

          <section id="couleurs">
            <p className="ds-lab__kicker">01</p>
            <h2 className="ds-lab__h2">{t.colorsTitle}</h2>
            <p className="ds-lab__lede">{t.colorsLede}</p>
            <div className="ds-lab__grid">
              {SWATCHES.map((s) => (
                <div key={s.token} className="ds-lab__swatch">
                  <div
                    className="ds-lab__swatch-chip"
                    style={{
                      background:
                        s.token === "--accent-blend"
                          ? "var(--accent-gradient)"
                          : `var(${s.token})`,
                    }}
                  />
                  <code>{s.token}</code>
                  <span className="ds-lab__meta">{s.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="typo">
            <p className="ds-lab__kicker">02</p>
            <h2 className="ds-lab__h2">{t.typeTitle}</h2>
            <p className="ds-lab__lede">{t.typeLede}</p>
            <div className="ds-lab__stack">
              <div>
                <p className="ds-lab__meta">.hero__eyebrow</p>
                <p className="hero__eyebrow">Agents pour métiers spécialisés</p>
              </div>
              <div>
                <p className="ds-lab__meta">.hero__title</p>
                <h3 className="hero__title" style={{ fontSize: "clamp(32px, 6vw, 52px)" }}>
                  Du temps rendu.
                </h3>
              </div>
              <div>
                <p className="ds-lab__meta">.page-hero__title</p>
                <h3 className="page-hero__title">Services agents métier</h3>
              </div>
              <div>
                <p className="ds-lab__meta">.section__title--lg</p>
                <h3 className="section__title section__title--lg">
                  Signal : six étapes.
                </h3>
              </div>
              <div>
                <p className="ds-lab__meta">.section__title</p>
                <h3 className="section__title">De l’audit à l’adoption.</h3>
              </div>
              <div>
                <p className="ds-lab__meta">.section__body</p>
                <p className="section__body">
                  Remparia aide les métiers spécialisés à intégrer des agents
                  supervisés — sans céder la décision ni le contrôle des données.
                </p>
              </div>
              <div>
                <p className="ds-lab__meta">.text-outline</p>
                <p className="section__title text-outline">Avantage</p>
              </div>
            </div>
          </section>

          <section id="boutons">
            <p className="ds-lab__kicker">03</p>
            <h2 className="ds-lab__h2">{t.buttonsTitle}</h2>
            <p className="ds-lab__lede">{t.buttonsLede}</p>
            <p className="ds-lab__meta">.btn-primary · .btn-ghost</p>
            <div className="ds-lab__row">
              <button type="button" className="btn-primary">
                Parlons de votre processus →
              </button>
              <button type="button" className="btn-ghost">
                Explorer SIGNAL →
              </button>
            </div>
            <p className="ds-lab__meta">.nav__cta · .nav__hiring (compact)</p>
            <div className="ds-lab__row">
              <a href="#boutons" className="nav__cta">
                Parlons de votre processus →
              </a>
              <a href="#boutons" className="nav__hiring">
                We&apos;re hiring
              </a>
            </div>
            <p className="ds-lab__meta">.cta__btn (inverse, fond accent)</p>
            <div className="ds-lab__on-accent">
              <a href="#boutons" className="cta__btn">
                Écrire à un associé →
              </a>
            </div>
          </section>

          <section id="liens">
            <p className="ds-lab__kicker">04</p>
            <h2 className="ds-lab__h2">{t.linksTitle}</h2>
            <p className="ds-lab__lede">{t.linksLede}</p>
            <div className="ds-lab__stack">
              <div>
                <p className="ds-lab__meta">a (défaut)</p>
                <p>
                  Écrire à <a href="mailto:contact@remparia.com">contact@remparia.com</a>
                </p>
              </div>
              <div>
                <p className="ds-lab__meta">.text-link</p>
                <LocaleLink href="/methode" className="text-link">
                  Explorer SIGNAL →
                </LocaleLink>
              </div>
              <nav className="breadcrumbs" aria-label="Fil d’Ariane">
                <ol className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <LocaleLink href="/" className="breadcrumbs__link">
                      Accueil
                    </LocaleLink>
                    <span className="breadcrumbs__sep">/</span>
                  </li>
                  <li className="breadcrumbs__item">
                    <LocaleLink href="/services" className="breadcrumbs__link">
                      Services
                    </LocaleLink>
                    <span className="breadcrumbs__sep">/</span>
                  </li>
                  <li className="breadcrumbs__item">
                    <span className="breadcrumbs__current">Agents métier</span>
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          <section id="champs">
            <p className="ds-lab__kicker">05</p>
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
                  Envoyer
                </button>
                <button type="button" className="btn-ghost">
                  Annuler
                </button>
              </div>
            </form>
          </section>

          <section id="cartes">
            <p className="ds-lab__kicker">06</p>
            <h2 className="ds-lab__h2">{t.cardsTitle}</h2>
            <p className="ds-lab__lede">{t.cardsLede}</p>
            <div className="card-grid">
              <article className="info-card">
                <div className="info-card__tag">01</div>
                <h3>Diagnostic & gouvernance</h3>
                <p>
                  Observer le terrain, prioriser les processus à fort impact et
                  poser le cadre avant d&apos;automatiser.
                </p>
              </article>
              <article className="info-card">
                <div className="info-card__tag">02</div>
                <h3>Agents métier</h3>
                <p>
                  Des agents intégrés à vos outils pour porter la collecte, les
                  contrôles, les relances et la préparation.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
