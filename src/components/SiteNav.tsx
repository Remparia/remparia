"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { NAV, SERVICES } from "@/lib/content";
import { stripLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

export default function SiteNav() {
  const { lang, toggleLang } = useLang();
  const t = NAV[lang];
  const services = SERVICES[lang];
  const pathname = usePathname();
  const logical = stripLocale(pathname || "/");
  const [navBg, setNavBg] = useState("rgba(10,10,10,0)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavBg(`rgba(10,10,10,${Math.min(y / 300, 0.92)})`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isServices = logical.startsWith("/services");

  return (
    <>
      <nav
        className="nav"
        style={{ background: navBg }}
        aria-label="Navigation principale"
      >
        <LocaleLink href="/" aria-label="Remparia">
          <Image
            src="/logo-remparia.png"
            alt="Remparia"
            width={180}
            height={32}
            className="nav__logo"
            priority
          />
        </LocaleLink>

        <div className="nav__links">
          <div className="nav__item">
            <LocaleLink
              href="/services"
              className={isServices ? "is-active" : undefined}
            >
              {t.services}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </LocaleLink>
            <div className="nav__dropdown">
              <LocaleLink href="/services">{services.overview}</LocaleLink>
              {services.items.map((item) => (
                <LocaleLink
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className={
                    logical === `/services/${item.slug}` ? "is-active" : undefined
                  }
                >
                  {item.title}
                </LocaleLink>
              ))}
            </div>
          </div>

          <LocaleLink
            href="/methode"
            className={logical === "/methode" ? "is-active" : undefined}
          >
            {t.methode}
          </LocaleLink>
          <LocaleLink
            href="/realisations"
            className={logical === "/realisations" ? "is-active" : undefined}
          >
            {t.realisations}
          </LocaleLink>
          <LocaleLink
            href="/a-propos"
            className={logical === "/a-propos" ? "is-active" : undefined}
          >
            {t.aPropos}
          </LocaleLink>
          <LocaleLink
            href="/ressources"
            className={logical === "/ressources" ? "is-active" : undefined}
          >
            {t.ressources}
          </LocaleLink>
        </div>

        <div className="nav__actions">
          <button type="button" className="nav__lang" onClick={toggleLang}>
            {lang === "fr" ? "FR / en" : "fr / EN"}
          </button>
          <LocaleLink
            href="/carrieres"
            className={`nav__hiring${logical === "/carrieres" || logical.startsWith("/carrieres/") ? " is-active" : ""}`}
          >
            {t.hiring}
          </LocaleLink>
          <LocaleLink href="/contact" className="nav__cta">
            <span className="nav__cta-short">{t.demoShort}</span>
            <span className="nav__cta-full">{t.demo} →</span>
          </LocaleLink>
          <button
            type="button"
            className={`nav__menu-btn${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav__drawer${menuOpen ? " is-open" : ""}`}>
        <div className="nav__drawer-group">
          <button
            type="button"
            className="nav__drawer-toggle"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((o) => !o)}
          >
            [ {t.services.toUpperCase()} ]
            <span aria-hidden>{servicesOpen ? "−" : "+"}</span>
          </button>
          {servicesOpen ? (
            <div className="nav__drawer-sub">
              <LocaleLink href="/services">{services.overview}</LocaleLink>
              {services.items.map((item) => (
                <LocaleLink key={item.slug} href={`/services/${item.slug}`}>
                  {item.title}
                </LocaleLink>
              ))}
            </div>
          ) : null}
        </div>

        <LocaleLink href="/methode">[ {t.methode.toUpperCase()} ]</LocaleLink>
        <LocaleLink href="/realisations">
          [ {t.realisations.toUpperCase()} ]
        </LocaleLink>
        <LocaleLink href="/a-propos">[ {t.aPropos.toUpperCase()} ]</LocaleLink>
        <LocaleLink href="/ressources">
          [ {t.ressources.toUpperCase()} ]
        </LocaleLink>
        <LocaleLink href="/carrieres" className="nav__drawer-hiring">
          [ {t.hiring.toUpperCase()} ]
        </LocaleLink>
        <LocaleLink href="/contact">[ {t.contact.toUpperCase()} ]</LocaleLink>
      </div>
    </>
  );
}
