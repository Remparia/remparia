"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function SiteNav() {
  const { lang, toggleLang } = useLang();
  const t = NAV[lang];
  const services = SERVICES[lang];
  const pathname = usePathname();
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

  const isServices = pathname.startsWith("/services");

  return (
    <>
      <nav
        className="nav"
        style={{ background: navBg }}
        aria-label="Navigation principale"
      >
        <Link href="/" aria-label="Remparia">
          <Image
            src="/logo-remparia.png"
            alt="Remparia"
            width={180}
            height={32}
            className="nav__logo"
            priority
          />
        </Link>

        <div className="nav__links">
          <div className="nav__item">
            <Link
              href="/services"
              className={isServices ? "is-active" : undefined}
            >
              {t.services}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </Link>
            <div className="nav__dropdown">
              <Link href="/services">{services.overview}</Link>
              {services.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className={
                    pathname === `/services/${item.slug}` ? "is-active" : undefined
                  }
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/methode"
            className={pathname === "/methode" ? "is-active" : undefined}
          >
            {t.methode}
          </Link>
          <Link
            href="/realisations"
            className={pathname === "/realisations" ? "is-active" : undefined}
          >
            {t.realisations}
          </Link>
          <Link
            href="/a-propos"
            className={pathname === "/a-propos" ? "is-active" : undefined}
          >
            {t.aPropos}
          </Link>
          <Link
            href="/ressources"
            className={pathname === "/ressources" ? "is-active" : undefined}
          >
            {t.ressources}
          </Link>
        </div>

        <div className="nav__actions">
          <button type="button" className="nav__lang" onClick={toggleLang}>
            {lang === "fr" ? "FR / en" : "fr / EN"}
          </button>
          <Link href="/contact" className="nav__cta">
            <span className="nav__cta-short">{t.demoShort}</span>
            <span className="nav__cta-full">{t.demo} →</span>
          </Link>
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
              <Link href="/services">{services.overview}</Link>
              {services.items.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <Link href="/methode">[ {t.methode.toUpperCase()} ]</Link>
        <Link href="/realisations">[ {t.realisations.toUpperCase()} ]</Link>
        <Link href="/a-propos">[ {t.aPropos.toUpperCase()} ]</Link>
        <Link href="/ressources">[ {t.ressources.toUpperCase()} ]</Link>
        <Link href="/contact">[ {t.contact.toUpperCase()} ]</Link>
      </div>
    </>
  );
}
