"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import LocaleLink from "@/components/LocaleLink";
import { NAV, NAV_SERVICES_BANNER, SERVICES } from "@/lib/content";
import { stripLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function ServicesBanner({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { lang } = useLang();
  const banner = NAV_SERVICES_BANNER[lang];
  if (!banner) return null;

  return (
    <LocaleLink
      href={banner.href}
      className={`nav__mega-banner${compact ? " nav__mega-banner--compact" : ""}`}
    >
      {banner.image ? (
        <span className="nav__mega-banner-media" aria-hidden>
          <Image
            src={banner.image}
            alt=""
            fill
            sizes={compact ? "100vw" : "420px"}
            className="nav__mega-banner-img"
          />
        </span>
      ) : null}
      <span className="nav__mega-banner-copy">
        <span className="nav__mega-banner-tag">{banner.tag}</span>
        <span className="nav__mega-banner-title">{banner.title}</span>
        <span className="nav__mega-banner-text">{banner.text}</span>
        <span className="nav__mega-banner-cta">{banner.cta} →</span>
      </span>
    </LocaleLink>
  );
}

function ServicesLinks({
  logical,
  onNavigate,
}: {
  logical: string;
  onNavigate?: () => void;
}) {
  const { lang } = useLang();
  const services = SERVICES[lang];

  return (
    <div className="nav__mega-list">
      {services.items.map((item) => {
        const href = `/services/${item.slug}`;
        const current = logical === href;
        return (
          <LocaleLink
            key={item.slug}
            href={href}
            className={`nav__mega-link${current ? " is-active" : ""}`}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
          >
            <span className="nav__mega-link-tag">{item.tag}</span>
            <span className="nav__mega-link-title">{item.title}</span>
            <span className="nav__mega-link-desc">{item.desc}</span>
          </LocaleLink>
        );
      })}
    </div>
  );
}

export default function SiteNav() {
  const { lang, toggleLang } = useLang();
  const t = NAV[lang];
  const pathname = usePathname();
  const logical = stripLocale(pathname || "/");
  const [navBg, setNavBg] = useState("rgba(0,0,0,0)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [deskServicesOpen, setDeskServicesOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const deskItemRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drawerId = useId();
  const deskMenuId = useId();
  const overlayOpen = menuOpen || deskServicesOpen;

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openDeskServices() {
    clearCloseTimer();
    setDeskServicesOpen(true);
  }

  function closeDeskServices() {
    clearCloseTimer();
    setDeskServicesOpen(false);
  }

  function scheduleCloseDeskServices() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setDeskServicesOpen(false);
      closeTimerRef.current = null;
    }, 200);
  }

  function toggleDeskServices(e?: ReactMouseEvent) {
    e?.preventDefault();
    clearCloseTimer();
    setDeskServicesOpen((open) => !open);
  }

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${nav.offsetHeight}px`,
      );
    };
    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavBg(`rgba(0,0,0,${Math.min(y / 300, 0.92)})`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setDeskServicesOpen(false);
    clearCloseTimer();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayOpen]);

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    if (!menuOpen) return;
    drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)[0]?.focus();

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

    function getFocusables() {
      return Array.from(
        megaRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [],
      );
    }

    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node | null;
      if (
        megaRef.current?.contains(target) ||
        deskItemRef.current?.contains(target)
      ) {
        return;
      }
      closeDeskServices();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeDeskServices();
        deskItemRef.current
          ?.querySelector<HTMLElement>("button.nav__caret-btn")
          ?.focus();
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

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [deskServicesOpen]);

  const isServices = logical.startsWith("/services");
  const navCurrent = (path: string) =>
    logical === path || (path !== "/" && logical.startsWith(path + "/"))
      ? ("page" as const)
      : undefined;

  return (
    <>
      <nav
        ref={navRef}
        className={`nav${overlayOpen ? " is-overlay" : ""}`}
        style={{ background: overlayOpen ? "rgba(0,0,0,0.98)" : navBg }}
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
            onMouseEnter={openDeskServices}
            onMouseLeave={scheduleCloseDeskServices}
          >
            <LocaleLink
              href="/services"
              className={isServices ? "is-active" : undefined}
              aria-current={logical === "/services" ? "page" : undefined}
              aria-expanded={deskServicesOpen}
              aria-controls={deskMenuId}
              onClick={toggleDeskServices}
            >
              {t.services}
            </LocaleLink>
            <button
              type="button"
              className="nav__caret-btn"
              aria-expanded={deskServicesOpen}
              aria-controls={deskMenuId}
              aria-label={t.servicesMenu}
              onClick={() => toggleDeskServices()}
            >
              <span className="nav__caret" aria-hidden>
                ▾
              </span>
            </button>
          </div>

          <LocaleLink
            href="/methode"
            className={logical === "/methode" ? "is-active" : undefined}
            aria-current={navCurrent("/methode")}
          >
            {t.methode}
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

      {/* Must stay outside .nav: backdrop-filter creates a containing block that
          collapses position:fixed descendants to the bar height. */}
      <div
        id={deskMenuId}
        ref={megaRef}
        className={`nav__mega${deskServicesOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal={deskServicesOpen}
        aria-label={t.megaLabel}
        aria-hidden={!deskServicesOpen}
        onMouseEnter={openDeskServices}
        onMouseLeave={scheduleCloseDeskServices}
      >
        <button
          type="button"
          className="nav__mega-close"
          aria-label={t.megaClose}
          onClick={closeDeskServices}
        >
          ×
        </button>
        <div
          className={`nav__mega-inner${NAV_SERVICES_BANNER[lang] ? "" : " nav__mega-inner--solo"}`}
        >
          <ServicesBanner />
          <ServicesLinks logical={logical} onNavigate={closeDeskServices} />
        </div>
      </div>

      <div
        id={drawerId}
        ref={drawerRef}
        className={`nav__drawer${menuOpen ? " is-open" : ""}`}
        hidden={!menuOpen}
      >
        <div className="nav__drawer-group">
          <div className="nav__drawer-services">
            <LocaleLink
              href="/services"
              className={isServices ? "is-active" : undefined}
              aria-current={logical === "/services" ? "page" : undefined}
            >
              [ {t.services.toUpperCase()} ]
            </LocaleLink>
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
              <ServicesBanner compact />
              <ServicesLinks
                logical={logical}
                onNavigate={() => setMenuOpen(false)}
              />
            </div>
          ) : null}
        </div>

        <LocaleLink href="/methode">[ {t.methode.toUpperCase()} ]</LocaleLink>
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
