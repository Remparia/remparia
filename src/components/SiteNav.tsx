"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { NAV, SERVICES } from "@/lib/content";
import { stripLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function SiteNav() {
  const { lang, toggleLang } = useLang();
  const t = NAV[lang];
  const services = SERVICES[lang];
  const pathname = usePathname();
  const logical = stripLocale(pathname || "/");
  const [navBg, setNavBg] = useState("rgba(10,10,10,0)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [deskServicesOpen, setDeskServicesOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const deskItemRef = useRef<HTMLDivElement>(null);
  const drawerId = useId();
  const deskMenuId = useId();

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
    setDeskServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    drawer?.querySelectorAll<HTMLElement>(FOCUSABLE)[0]?.focus();

    function getFocusables() {
      return Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [],
      );
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const list = getFocusables();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, servicesOpen]);

  useEffect(() => {
    if (!deskServicesOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDeskServicesOpen(false);
        deskItemRef.current
          ?.querySelector<HTMLElement>("button.nav__caret-btn")
          ?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [deskServicesOpen]);

  const isServices = logical.startsWith("/services");
  const navCurrent = (path: string) =>
    logical === path || (path !== "/" && logical.startsWith(path + "/"))
      ? ("page" as const)
      : undefined;

  return (
    <>
      <nav
        className="nav"
        style={{ background: navBg }}
        aria-label={t.navLabel}
      >
        <LocaleLink href="/" aria-label="Remparia">
          <Image
            src="/logo-remparia.png"
            alt=""
            width={180}
            height={32}
            className="nav__logo"
            priority
          />
        </LocaleLink>

        <div className="nav__links">
          <div
            ref={deskItemRef}
            className={`nav__item${deskServicesOpen ? " is-open" : ""}`}
            onMouseEnter={() => setDeskServicesOpen(true)}
            onMouseLeave={() => setDeskServicesOpen(false)}
            onFocus={() => setDeskServicesOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setDeskServicesOpen(false);
              }
            }}
          >
            <LocaleLink
              href="/services"
              className={isServices ? "is-active" : undefined}
              aria-current={logical === "/services" ? "page" : undefined}
            >
              {t.services}
            </LocaleLink>
            <button
              type="button"
              className="nav__caret-btn"
              aria-expanded={deskServicesOpen}
              aria-controls={deskMenuId}
              aria-label={t.servicesMenu}
              onClick={() => setDeskServicesOpen((o) => !o)}
            >
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div
              id={deskMenuId}
              className="nav__dropdown"
              hidden={!deskServicesOpen}
            >
              <LocaleLink href="/services">{services.overview}</LocaleLink>
              {services.items.map((item) => (
                <LocaleLink
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className={
                    logical === `/services/${item.slug}` ? "is-active" : undefined
                  }
                  aria-current={
                    logical === `/services/${item.slug}` ? "page" : undefined
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
            aria-current={navCurrent("/methode")}
          >
            {t.methode}
          </LocaleLink>
          <LocaleLink
            href="/realisations"
            className={logical === "/realisations" ? "is-active" : undefined}
            aria-current={navCurrent("/realisations")}
          >
            {t.realisations}
          </LocaleLink>
          <LocaleLink
            href="/a-propos"
            className={logical === "/a-propos" ? "is-active" : undefined}
            aria-current={navCurrent("/a-propos")}
          >
            {t.aPropos}
          </LocaleLink>
          <LocaleLink
            href="/ressources"
            className={logical === "/ressources" ? "is-active" : undefined}
            aria-current={navCurrent("/ressources")}
          >
            {t.ressources}
          </LocaleLink>
        </div>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__lang"
            onClick={toggleLang}
            aria-label={t.switchLang}
          >
            {lang === "fr" ? "FR / en" : "fr / EN"}
          </button>
          <LocaleLink
            href="/carrieres"
            className={`nav__hiring${logical === "/carrieres" || logical.startsWith("/carrieres/") ? " is-active" : ""}`}
            aria-current={navCurrent("/carrieres")}
          >
            {t.hiring}
          </LocaleLink>
          <LocaleLink href="/contact" className="nav__cta">
            <span className="nav__cta-short">{t.demoShort}</span>
            <span className="nav__cta-full">{t.demo} →</span>
          </LocaleLink>
          <button
            ref={menuBtnRef}
            type="button"
            className={`nav__menu-btn${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            aria-controls={drawerId}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div
        id={drawerId}
        ref={drawerRef}
        className={`nav__drawer${menuOpen ? " is-open" : ""}`}
        hidden={!menuOpen}
      >
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
