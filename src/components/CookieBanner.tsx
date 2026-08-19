"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import {
  getCookieConsent,
  setCookieConsent,
  COOKIE_CONSENT_EVENT,
  type CookieConsent,
} from "@/lib/cookie-consent";
import { useLang } from "@/lib/lang";

const COPY = {
  fr: {
    title: "Cookies",
    text: "Nous mesurons l’audience avec Vercel Web Analytics (sans cookie publicitaire). Acceptez ou refusez cette mesure — votre choix est mémorisé localement. Échap refuse.",
    accept: "Accepter",
    refuse: "Refuser",
    more: "En savoir plus",
  },
  en: {
    title: "Cookies",
    text: "We measure traffic with Vercel Web Analytics (no advertising cookies). Accept or refuse — your choice is stored locally. Escape declines.",
    accept: "Accept",
    refuse: "Refuse",
    more: "Learn more",
  },
} as const;

export default function CookieBanner() {
  const { lang } = useLang();
  const t = COPY[lang];
  const [visible, setVisible] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const textId = useId();

  const choose = useCallback((value: CookieConsent) => {
    setCookieConsent(value);
    setVisible(false);
  }, []);

  useEffect(() => {
    let delayTimer: number | undefined;
    let idleId: number | undefined;

    const hide = () => {
      window.clearTimeout(delayTimer);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      setVisible(false);
    };

    const maybeShow = () => {
      if (getCookieConsent() !== null) {
        hide();
        return;
      }
      const reveal = () => setVisible(true);
      // Defer until after LCP — cookie UI must not become the largest paint.
      delayTimer = window.setTimeout(() => {
        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(reveal, { timeout: 2000 });
        } else {
          reveal();
        }
      }, 2800);
    };

    maybeShow();
    const onChange = () => {
      if (getCookieConsent() === null) maybeShow();
      else hide();
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
      hide();
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const btn = regionRef.current?.querySelector<HTMLButtonElement>("button");
    btn?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") choose("refused");
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible, choose]);

  if (!visible) return null;

  return (
    <div
      ref={regionRef}
      className="cookie-banner"
      role="region"
      aria-labelledby={titleId}
      aria-describedby={textId}
    >
      <div className="cookie-banner__inner">
        <div className="cookie-banner__copy">
          <h2 id={titleId} className="cookie-banner__title">
            // {t.title}
          </h2>
          <p id={textId} className="cookie-banner__text">
            {t.text}{" "}
            <LocaleLink href="/cookies" className="cookie-banner__link">
              {t.more}
            </LocaleLink>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--ghost"
            onClick={() => choose("refused")}
          >
            {t.refuse}
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--primary"
            onClick={() => choose("accepted")}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
