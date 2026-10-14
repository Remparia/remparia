"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import {
  NAV,
  NAV_IA,
  NAV_METHOD,
  NAV_OFFRES,
  NAV_RESOURCES,
  NAV_SOLUTIONS,
} from "@/lib/content";
import { useColorTheme } from "@/lib/color-theme";
import { stripLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const PLATFORM_PATHS = new Set([
  "/solution",
  "/studio",
  "/sovereignty",
  "/supervision",
]);

const METHOD_PATHS = new Set(["/formation", "/signal", "/governance"]);

const OFFRE_PATHS = new Set(["/offres/ged"]);

const RESOURCE_PATHS = new Set(["/carrieres", "/a-propos"]);

export default function SiteNav() {
  const { lang, toggleLang } = useLang();
  const { theme } = useColorTheme();
  const t = NAV[lang];
  const parcours = NAV_IA[lang];
  const methodLinks = NAV_METHOD[lang];
  const offreLinks = NAV_OFFRES[lang];
  const solutionsNav = NAV_SOLUTIONS[lang];
  const resourcesNav = NAV_RESOURCES[lang];
  const pathname = usePathname();
  const logical = stripLocale(pathname || "/");
  const [navBg, setNavBg] = useState("transparent");
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [offresOpen, setOffresOpen] = useState(false);
  const [solutionsDrawerOpen, setSolutionsDrawerOpen] = useState(false);
  const [resourcesDrawerOpen, setResourcesDrawerOpen] = useState(false);
  const [deskServicesOpen, setDeskServicesOpen] = useState(false);
  const [deskMethodOpen, setDeskMethodOpen] = useState(false);
  const [deskOffresOpen, setDeskOffresOpen] = useState(false);
  const [deskSolutionsOpen, setDeskSolutionsOpen] = useState(false);
  const [deskResourcesOpen, setDeskResourcesOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const deskItemRef = useRef<HTMLDivElement>(null);
  const deskMethodRef = useRef<HTMLDivElement>(null);
  const deskOffresRef = useRef<HTMLDivElement>(null);
  const deskSolutionsRef = useRef<HTMLDivElement>(null);
  const deskResourcesRef = useRef<HTMLDivElement>(null);
  const drawerId = useId();
  const deskMenuId = useId();
  const deskMethodMenuId = useId();
  const deskOffresMenuId = useId();
  const deskSolutionsMenuId = useId();
  const deskResourcesMenuId = useId();
  const deskCloseTimer = useRef<number>(0);
  const deskMethodCloseTimer = useRef<number>(0);
  const deskOffresCloseTimer = useRef<number>(0);
  const deskSolutionsCloseTimer = useRef<number>(0);
  const deskResourcesCloseTimer = useRef<number>(0);
  const banner = t.megaBanner.enabled ? t.megaBanner : null;
  const anyMegaOpen =
    deskServicesOpen ||
    deskMethodOpen ||
    deskOffresOpen ||
    deskSolutionsOpen ||
    deskResourcesOpen;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const solid = y > 40;
      setNavSolid(solid || anyMegaOpen);
      const scrollOpacity = Math.min(y / 300, theme === "day" ? 0.96 : 0.92);
      const opacity = anyMegaOpen
        ? 0.98
        : theme === "day"
          ? Math.max(scrollOpacity, 0.92)
          : scrollOpacity;
      setNavBg(
        opacity <= 0.01
          ? "transparent"
          : theme === "day"
            ? `color-mix(in srgb, #eef4e0 ${Math.round(opacity * 100)}%, transparent)`
            : `color-mix(in srgb, var(--surface) ${Math.round(opacity * 100)}%, transparent)`,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [theme, anyMegaOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMethodOpen(false);
    setOffresOpen(false);
    setSolutionsDrawerOpen(false);
    setResourcesDrawerOpen(false);
    setDeskServicesOpen(false);
    setDeskMethodOpen(false);
    setDeskOffresOpen(false);
    setDeskSolutionsOpen(false);
    setDeskResourcesOpen(false);
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
  }, [menuOpen, servicesOpen, methodOpen, offresOpen, solutionsDrawerOpen]);

  useEffect(() => {
    return () => {
      window.clearTimeout(deskCloseTimer.current);
      window.clearTimeout(deskMethodCloseTimer.current);
      window.clearTimeout(deskOffresCloseTimer.current);
      window.clearTimeout(deskSolutionsCloseTimer.current);
    };
  }, []);

  function closeAllDesk(
    except?: "platform" | "method" | "offres" | "solutions" | "resources",
  ) {
    if (except !== "platform") {
      window.clearTimeout(deskCloseTimer.current);
      setDeskServicesOpen(false);
    }
    if (except !== "method") {
      window.clearTimeout(deskMethodCloseTimer.current);
      setDeskMethodOpen(false);
    }
    if (except !== "offres") {
      window.clearTimeout(deskOffresCloseTimer.current);
      setDeskOffresOpen(false);
    }
    if (except !== "solutions") {
      window.clearTimeout(deskSolutionsCloseTimer.current);
      setDeskSolutionsOpen(false);
    }
    if (except !== "resources") {
      window.clearTimeout(deskResourcesCloseTimer.current);
      setDeskResourcesOpen(false);
    }
  }

  function openDeskServices() {
    closeAllDesk("platform");
    window.clearTimeout(deskCloseTimer.current);
    setDeskServicesOpen(true);
  }

  function closeDeskServices(delay = 140) {
    window.clearTimeout(deskCloseTimer.current);
    deskCloseTimer.current = window.setTimeout(
      () => setDeskServicesOpen(false),
      delay,
    );
  }

  function openDeskMethod() {
    closeAllDesk("method");
    window.clearTimeout(deskMethodCloseTimer.current);
    setDeskMethodOpen(true);
  }

  function closeDeskMethod(delay = 140) {
    window.clearTimeout(deskMethodCloseTimer.current);
    deskMethodCloseTimer.current = window.setTimeout(
      () => setDeskMethodOpen(false),
      delay,
    );
  }

  function openDeskOffres() {
    closeAllDesk("offres");
    window.clearTimeout(deskOffresCloseTimer.current);
    setDeskOffresOpen(true);
  }

  function closeDeskOffres(delay = 140) {
    window.clearTimeout(deskOffresCloseTimer.current);
    deskOffresCloseTimer.current = window.setTimeout(
      () => setDeskOffresOpen(false),
      delay,
    );
  }

  function openDeskSolutions() {
    closeAllDesk("solutions");
    window.clearTimeout(deskSolutionsCloseTimer.current);
    setDeskSolutionsOpen(true);
  }

  function closeDeskSolutions(delay = 140) {
    window.clearTimeout(deskSolutionsCloseTimer.current);
    deskSolutionsCloseTimer.current = window.setTimeout(
      () => setDeskSolutionsOpen(false),
      delay,
    );
  }

  function openDeskResources() {
    closeAllDesk("resources");
    window.clearTimeout(deskResourcesCloseTimer.current);
    setDeskResourcesOpen(true);
  }

  function closeDeskResources(delay = 140) {
    window.clearTimeout(deskResourcesCloseTimer.current);
    deskResourcesCloseTimer.current = window.setTimeout(
      () => setDeskResourcesOpen(false),
      delay,
    );
  }

  useEffect(() => {
    if (!deskServicesOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        window.clearTimeout(deskCloseTimer.current);
        setDeskServicesOpen(false);
        deskItemRef.current
          ?.querySelector<HTMLElement>("button.nav__menu-label")
          ?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [deskServicesOpen]);

  useEffect(() => {
    if (!deskMethodOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        window.clearTimeout(deskMethodCloseTimer.current);
        setDeskMethodOpen(false);
        deskMethodRef.current
          ?.querySelector<HTMLElement>("button.nav__menu-label")
          ?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [deskMethodOpen]);

  useEffect(() => {
    if (!deskOffresOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        window.clearTimeout(deskOffresCloseTimer.current);
        setDeskOffresOpen(false);
        deskOffresRef.current
          ?.querySelector<HTMLElement>("button.nav__menu-label")
          ?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [deskOffresOpen]);

  useEffect(() => {
    if (!deskSolutionsOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        window.clearTimeout(deskSolutionsCloseTimer.current);
        setDeskSolutionsOpen(false);
        deskSolutionsRef.current
          ?.querySelector<HTMLElement>("button.nav__menu-label")
          ?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [deskSolutionsOpen]);

  useEffect(() => {
    if (!deskResourcesOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        window.clearTimeout(deskResourcesCloseTimer.current);
        setDeskResourcesOpen(false);
        deskResourcesRef.current
          ?.querySelector<HTMLElement>("button.nav__menu-label")
          ?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [deskResourcesOpen]);

  const isPlatform =
    PLATFORM_PATHS.has(logical);
  const isMethod = METHOD_PATHS.has(logical);
  const isOffres =
    OFFRE_PATHS.has(logical) || logical.startsWith("/offres/");
  const isSolutions =
    logical === "/secteurs" ||
    logical.startsWith("/secteurs/") ||
    logical.startsWith("/solutions/");
  const isResources =
    RESOURCE_PATHS.has(logical) || logical.startsWith("/carrieres/");
  const navCurrent = (path: string) =>
    logical === path || (path !== "/" && logical.startsWith(path + "/"))
      ? ("page" as const)
      : undefined;

  return (
    <>
      <nav
        className={`nav${navSolid || anyMegaOpen ? " nav--solid" : ""}`}
        style={{ background: navBg }}
        aria-label={t.navLabel}
      >
        <LocaleLink href="/" className="nav__brand" aria-label="Remparia">
          <span className="nav__lockup">
            <Image
              src="/logo-remparia-v3.png"
              alt=""
              width={211}
              height={38}
              className="nav__logo nav__logo--night"
              priority
              sizes="(max-width: 639px) 142px, (max-width: 959px) 162px, 192px"
            />
            <Image
              src="/logo-remparia-day.png"
              alt=""
              width={211}
              height={38}
              className="nav__logo nav__logo--day"
              priority
              sizes="(max-width: 639px) 142px, (max-width: 959px) 162px, 192px"
            />
          </span>
        </LocaleLink>

        <div className="nav__links">
          <div
            ref={deskOffresRef}
            className={`nav__item${deskOffresOpen ? " is-open" : ""}`}
            onMouseEnter={openDeskOffres}
            onMouseLeave={() => closeDeskOffres()}
            onFocus={openDeskOffres}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                closeDeskOffres(0);
              }
            }}
          >
            <button
              type="button"
              className={`nav__menu-label nav__offre${isOffres ? " is-active" : ""}`}
              aria-expanded={deskOffresOpen}
              aria-controls={deskOffresMenuId}
              aria-haspopup="true"
              onClick={() =>
                deskOffresOpen ? closeDeskOffres(0) : openDeskOffres()
              }
            >
              {t.offre}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div
              id={deskOffresMenuId}
              className="nav__mega nav__mega--compact"
              hidden={!deskOffresOpen}
            >
              <div className="nav__mega-inner">
                <div className="nav__mega-main">
                  <div className="nav__mega-head">
                    <span className="nav__mega-kicker">{t.megaOffre}</span>
                  </div>
                  <div className="nav__mega-links nav__mega-links--method">
                    {offreLinks.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        className={`nav__mega-link${
                          logical === item.href ? " is-active" : ""
                        }`}
                        aria-current={
                          logical === item.href ? "page" : undefined
                        }
                      >
                        <span className="nav__mega-tag">{item.tag}</span>
                        <span className="nav__mega-title">{item.title}</span>
                        <span className="nav__mega-desc">{item.desc}</span>
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={deskItemRef}
            className={`nav__item${deskServicesOpen ? " is-open" : ""}`}
            onMouseEnter={openDeskServices}
            onMouseLeave={() => closeDeskServices()}
            onFocus={openDeskServices}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                closeDeskServices(0);
              }
            }}
          >
            <button
              type="button"
              className={`nav__menu-label${isPlatform ? " is-active" : ""}`}
              aria-expanded={deskServicesOpen}
              aria-controls={deskMenuId}
              aria-haspopup="true"
              onClick={() =>
                deskServicesOpen ? closeDeskServices(0) : openDeskServices()
              }
            >
              {t.platform}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div
              id={deskMenuId}
              className={`nav__mega${banner ? " nav__mega--banner" : ""}`}
              hidden={!deskServicesOpen}
            >
              <div className="nav__mega-inner">
                <div className="nav__mega-main">
                  <div className="nav__mega-head">
                    <span className="nav__mega-kicker">{t.platform}</span>
                  </div>
                  <div className="nav__mega-links nav__mega-links--ia">
                    {parcours.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        className={`nav__mega-link${
                          logical === item.href ? " is-active" : ""
                        }`}
                        aria-current={
                          logical === item.href ? "page" : undefined
                        }
                      >
                        <span className="nav__mega-tag">{item.tag}</span>
                        <span className="nav__mega-title">{item.title}</span>
                        <span className="nav__mega-desc">{item.desc}</span>
                      </LocaleLink>
                    ))}
                  </div>
                </div>
                {banner ? (
                  <LocaleLink href={banner.href} className="nav__mega-banner">
                    <span className="nav__mega-banner-media">
                      <Image
                        src={banner.image}
                        alt=""
                        fill
                        sizes="(min-width: 960px) 34vw, 100vw"
                        className="nav__mega-banner-img"
                      />
                    </span>
                    <span className="nav__mega-banner-copy">
                      <span className="nav__mega-banner-eyebrow">
                        {banner.eyebrow}
                      </span>
                      <span className="nav__mega-banner-title">
                        {banner.title}
                      </span>
                      <span className="nav__mega-banner-desc">
                        {banner.desc}
                      </span>
                      <span className="nav__mega-banner-cta">{banner.cta}</span>
                    </span>
                  </LocaleLink>
                ) : null}
              </div>
            </div>
          </div>

          <div
            ref={deskMethodRef}
            className={`nav__item${deskMethodOpen ? " is-open" : ""}`}
            onMouseEnter={openDeskMethod}
            onMouseLeave={() => closeDeskMethod()}
            onFocus={openDeskMethod}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                closeDeskMethod(0);
              }
            }}
          >
            <button
              type="button"
              className={`nav__menu-label${isMethod ? " is-active" : ""}`}
              aria-expanded={deskMethodOpen}
              aria-controls={deskMethodMenuId}
              aria-haspopup="true"
              onClick={() =>
                deskMethodOpen ? closeDeskMethod(0) : openDeskMethod()
              }
            >
              {t.method}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div
              id={deskMethodMenuId}
              className="nav__mega nav__mega--compact"
              hidden={!deskMethodOpen}
            >
              <div className="nav__mega-inner">
                <div className="nav__mega-main">
                  <div className="nav__mega-head">
                    <span className="nav__mega-kicker">{t.megaMethod}</span>
                  </div>
                  <div className="nav__mega-links nav__mega-links--method">
                    {methodLinks.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        className={`nav__mega-link${
                          logical === item.href ? " is-active" : ""
                        }`}
                        aria-current={
                          logical === item.href ? "page" : undefined
                        }
                      >
                        <span className="nav__mega-tag">{item.tag}</span>
                        <span className="nav__mega-title">{item.title}</span>
                        <span className="nav__mega-desc">{item.desc}</span>
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={deskSolutionsRef}
            className={`nav__item${deskSolutionsOpen ? " is-open" : ""}`}
            onMouseEnter={openDeskSolutions}
            onMouseLeave={() => closeDeskSolutions()}
            onFocus={openDeskSolutions}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                closeDeskSolutions(0);
              }
            }}
          >
            <button
              type="button"
              className={`nav__menu-label${isSolutions ? " is-active" : ""}`}
              aria-expanded={deskSolutionsOpen}
              aria-controls={deskSolutionsMenuId}
              aria-haspopup="true"
              onClick={() =>
                deskSolutionsOpen ? closeDeskSolutions(0) : openDeskSolutions()
              }
            >
              {t.solutions}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div
              id={deskSolutionsMenuId}
              className="nav__mega nav__mega--compact"
              hidden={!deskSolutionsOpen}
            >
              <div className="nav__mega-inner">
                <div className="nav__mega-main">
                  <div className="nav__mega-head">
                    <span className="nav__mega-kicker">
                      {solutionsNav.megaKicker}
                    </span>
                  </div>
                  <div className="nav__mega-links nav__mega-links--method">
                    {solutionsNav.items.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        className={`nav__mega-link${
                          logical === item.href ? " is-active" : ""
                        }`}
                        aria-current={
                          logical === item.href ? "page" : undefined
                        }
                      >
                        <span className="nav__mega-tag">{item.tag}</span>
                        <span className="nav__mega-title">{item.title}</span>
                        <span className="nav__mega-desc">{item.desc}</span>
                      </LocaleLink>
                    ))}
                    <LocaleLink
                      href={solutionsNav.viewAllHref}
                      className={`nav__mega-link nav__mega-all${
                        logical === "/secteurs" ||
                        logical.startsWith("/secteurs/")
                          ? " is-active"
                          : ""
                      }`}
                    >
                      <span className="nav__mega-title">
                        {solutionsNav.viewAll} →
                      </span>
                    </LocaleLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={deskResourcesRef}
            className={`nav__item${deskResourcesOpen ? " is-open" : ""}`}
            onMouseEnter={openDeskResources}
            onMouseLeave={() => closeDeskResources()}
            onFocus={openDeskResources}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                closeDeskResources(0);
              }
            }}
          >
            <button
              type="button"
              className={`nav__menu-label${isResources ? " is-active" : ""}`}
              aria-expanded={deskResourcesOpen}
              aria-controls={deskResourcesMenuId}
              aria-haspopup="true"
              onClick={() =>
                deskResourcesOpen
                  ? closeDeskResources(0)
                  : openDeskResources()
              }
            >
              {t.resources}
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div
              id={deskResourcesMenuId}
              className="nav__mega nav__mega--compact"
              hidden={!deskResourcesOpen}
            >
              <div className="nav__mega-inner">
                <div className="nav__mega-main">
                  <div className="nav__mega-head">
                    <span className="nav__mega-kicker">
                      {resourcesNav.megaKicker}
                    </span>
                  </div>
                  <div className="nav__mega-links nav__mega-links--method">
                    {resourcesNav.items.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        className={`nav__mega-link${
                          logical === item.href ||
                          (item.href === "/carrieres" &&
                            logical.startsWith("/carrieres/"))
                            ? " is-active"
                            : ""
                        }`}
                        aria-current={
                          logical === item.href ||
                          (item.href === "/carrieres" &&
                            logical.startsWith("/carrieres/"))
                            ? "page"
                            : undefined
                        }
                      >
                        <span className="nav__mega-tag">{item.tag}</span>
                        <span className="nav__mega-title">{item.title}</span>
                        <span className="nav__mega-desc">{item.desc}</span>
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

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
            href="/contact"
            className={`btn-secondary nav__hiring${logical === "/contact" ? " is-active" : ""}`}
            aria-current={navCurrent("/contact")}
          >
            {t.contact}
          </LocaleLink>
          <LocaleLink
            href="/carrieres"
            className={`btn-secondary nav__hiring${logical === "/carrieres" || logical.startsWith("/carrieres/") ? " is-active" : ""}`}
            aria-current={navCurrent("/carrieres")}
          >
            {t.hiring}
          </LocaleLink>
          <LocaleLink href="/demarrer" className="nav__cta">
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
          <div className="nav__drawer-services">
            <span
              className={`nav__drawer-label nav__drawer-offre${isOffres ? " is-active" : ""}`}
            >
              [ {t.offre.toUpperCase()} ]
            </span>
            <button
              type="button"
              className="nav__drawer-toggle"
              aria-expanded={offresOpen}
              aria-label={t.offreMenu}
              onClick={() => setOffresOpen((o) => !o)}
            >
              <span aria-hidden>{offresOpen ? "−" : "+"}</span>
            </button>
          </div>
          {offresOpen ? (
            <div className="nav__drawer-sub">
              {offreLinks.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className={logical === item.href ? "is-active" : undefined}
                  aria-current={logical === item.href ? "page" : undefined}
                >
                  {item.title}
                </LocaleLink>
              ))}
            </div>
          ) : null}
        </div>

        <div className="nav__drawer-group">
          <div className="nav__drawer-services">
            <span
              className={`nav__drawer-label${isPlatform ? " is-active" : ""}`}
            >
              [ {t.platform.toUpperCase()} ]
            </span>
            <button
              type="button"
              className="nav__drawer-toggle"
              aria-expanded={servicesOpen}
              aria-label={t.servicesMenu}
              onClick={() => setServicesOpen((o) => !o)}
            >
              <span aria-hidden>{servicesOpen ? "−" : "+"}</span>
            </button>
          </div>
          {servicesOpen ? (
            <div className="nav__drawer-sub">
              {parcours.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className={logical === item.href ? "is-active" : undefined}
                  aria-current={logical === item.href ? "page" : undefined}
                >
                  {item.title}
                </LocaleLink>
              ))}
              {banner ? (
                <LocaleLink href={banner.href} className="nav__drawer-banner">
                  <span className="nav__drawer-banner-eyebrow">
                    {banner.eyebrow}
                  </span>
                  <span className="nav__drawer-banner-title">
                    {banner.title}
                  </span>
                  <span className="nav__drawer-banner-cta">{banner.cta}</span>
                </LocaleLink>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="nav__drawer-group">
          <div className="nav__drawer-services">
            <span
              className={`nav__drawer-label${isMethod ? " is-active" : ""}`}
            >
              [ {t.method.toUpperCase()} ]
            </span>
            <button
              type="button"
              className="nav__drawer-toggle"
              aria-expanded={methodOpen}
              aria-label={t.methodMenu}
              onClick={() => setMethodOpen((o) => !o)}
            >
              <span aria-hidden>{methodOpen ? "−" : "+"}</span>
            </button>
          </div>
          {methodOpen ? (
            <div className="nav__drawer-sub">
              {methodLinks.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className={logical === item.href ? "is-active" : undefined}
                  aria-current={logical === item.href ? "page" : undefined}
                >
                  {item.title}
                </LocaleLink>
              ))}
            </div>
          ) : null}
        </div>

        <div className="nav__drawer-group">
          <div className="nav__drawer-services">
            <span
              className={`nav__drawer-label${isSolutions ? " is-active" : ""}`}
            >
              [ {t.solutions.toUpperCase()} ]
            </span>
            <button
              type="button"
              className="nav__drawer-toggle"
              aria-expanded={solutionsDrawerOpen}
              aria-label={solutionsNav.menuLabel}
              onClick={() => setSolutionsDrawerOpen((o) => !o)}
            >
              <span aria-hidden>{solutionsDrawerOpen ? "−" : "+"}</span>
            </button>
          </div>
          {solutionsDrawerOpen ? (
            <div className="nav__drawer-sub">
              {solutionsNav.items.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className={logical === item.href ? "is-active" : undefined}
                  aria-current={logical === item.href ? "page" : undefined}
                >
                  {item.title}
                </LocaleLink>
              ))}
              <LocaleLink href={solutionsNav.viewAllHref}>
                {solutionsNav.viewAll} →
              </LocaleLink>
            </div>
          ) : null}
        </div>

        <div className="nav__drawer-group">
          <div className="nav__drawer-services">
            <span
              className={`nav__drawer-label${isResources ? " is-active" : ""}`}
            >
              [ {t.resources.toUpperCase()} ]
            </span>
            <button
              type="button"
              className="nav__drawer-toggle"
              aria-expanded={resourcesDrawerOpen}
              aria-label={resourcesNav.menuLabel}
              onClick={() => setResourcesDrawerOpen((o) => !o)}
            >
              <span aria-hidden>{resourcesDrawerOpen ? "−" : "+"}</span>
            </button>
          </div>
          {resourcesDrawerOpen ? (
            <div className="nav__drawer-sub">
              {resourcesNav.items.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className={
                    logical === item.href ||
                    (item.href === "/carrieres" &&
                      logical.startsWith("/carrieres/"))
                      ? "is-active"
                      : undefined
                  }
                  aria-current={
                    logical === item.href ||
                    (item.href === "/carrieres" &&
                      logical.startsWith("/carrieres/"))
                      ? "page"
                      : undefined
                  }
                >
                  {item.title}
                </LocaleLink>
              ))}
            </div>
          ) : null}
        </div>

        <LocaleLink href="/carrieres" className="nav__drawer-hiring">
          [ {t.hiring.toUpperCase()} ]
        </LocaleLink>
        <LocaleLink href="/contact">[ {t.contact.toUpperCase()} ]</LocaleLink>
        <div className="nav__drawer-chrome">
          <button
            type="button"
            className="nav__lang nav__drawer-lang"
            onClick={toggleLang}
            aria-label={t.switchLang}
          >
            {lang === "fr" ? "FR / en" : "fr / EN"}
          </button>
        </div>
      </div>
    </>
  );
}
