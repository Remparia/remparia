"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { FOOTER, NAV, SECTEURS, SOCIAL_LINKS } from "@/lib/content";
import { useLang } from "@/lib/lang";

function SocialIcon({ id }: { id: (typeof SOCIAL_LINKS)[number]["id"] }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "x":
      return (
        <svg {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.34 6.34 6.34 0 0 0 9.49 21.7a6.34 6.34 0 0 0 6.34-6.34V8.73a8.18 8.18 0 0 0 4.76 1.52V6.84a4.85 4.85 0 0 1-1-.15z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.51 1.59 4.66 4.66.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.12-1.59 4.51-4.66 4.66-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.51-1.59-4.66-4.66-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.64 3.82 4.04 2.37 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SiteFooter() {
  const { lang } = useLang();
  const f = FOOTER[lang];
  const n = NAV[lang];
  const secteurs = SECTEURS[lang];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Image
            src="/logo-remparia.png"
            alt="Remparia — IA souveraine"
            width={160}
            height={28}
            className="footer__logo"
          />
          <p>{f.tagline}</p>
        </div>
        <nav aria-label={f.servicesTitle}>
          <div className="site-footer__title">{f.servicesTitle}</div>
          <LocaleLink href="/services">{n.services}</LocaleLink>
          <LocaleLink href="/methode">{n.methode}</LocaleLink>
        </nav>
        <nav aria-label={f.secteursTitle} className="site-footer__secteurs">
          <div className="site-footer__title">{f.secteursTitle}</div>
          {secteurs.items.slice(0, 4).map((item) => (
            <LocaleLink key={item.slug} href={`/secteurs/${item.slug}`}>
              {item.title}
            </LocaleLink>
          ))}
          <LocaleLink href="/secteurs" className="site-footer__all">
            {f.secteursAll} →
          </LocaleLink>
        </nav>
        <nav aria-label={f.ressourcesTitle}>
          <div className="site-footer__title">{f.ressourcesTitle}</div>
          <LocaleLink href="/realisations">{n.realisations}</LocaleLink>
          <LocaleLink href="/ressources">{n.ressources}</LocaleLink>
          <LocaleLink href="/a-propos">{n.aPropos}</LocaleLink>
          <LocaleLink href="/carrieres">{n.carrieres}</LocaleLink>
        </nav>
        <nav aria-label={f.contactTitle}>
          <div className="site-footer__title">{f.contactTitle}</div>
          <LocaleLink href="/contact">{n.contact}</LocaleLink>
          <a href="mailto:contact@remparia.fr">contact@remparia.fr</a>
        </nav>
      </div>

      <div className="site-footer__social">
        <div className="site-footer__title">{f.socialTitle}</div>
        <ul className="site-footer__social-list">
          {SOCIAL_LINKS.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label={s.label}
              >
                <SocialIcon id={s.id} />
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="site-footer__legal" aria-label={f.legalTitle}>
        <LocaleLink href="/mentions-legales">{f.mentions}</LocaleLink>
        <LocaleLink href="/confidentialite">{f.privacy}</LocaleLink>
        <LocaleLink href="/cookies">{f.cookies}</LocaleLink>
        <button
          type="button"
          className="site-footer__cookie-prefs"
          onClick={() => {
            void import("@/lib/cookie-consent").then((m) => m.resetCookieConsent());
          }}
        >
          {f.cookiePrefs}
        </button>
      </nav>

      <div className="site-footer__bottom">{f.rights}</div>
    </footer>
  );
}
