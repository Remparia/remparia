"use client";

import { useEffect, useState } from "react";
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
    text: "Nous utilisons Matomo pour mesurer l’audience du site. Vous pouvez accepter ou refuser. Aucun tracking publicitaire.",
    accept: "Accepter",
    refuse: "Refuser",
    more: "En savoir plus",
  },
  en: {
    title: "Cookies",
    text: "We use Matomo to measure site traffic. You can accept or refuse. No advertising tracking.",
    accept: "Accept",
    refuse: "Refuse",
    more: "Learn more",
  },
} as const;

export default function CookieBanner() {
  const { lang } = useLang();
  const t = COPY[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(getCookieConsent() === null);
    sync();
    const onChange = () => sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  function choose(value: CookieConsent) {
    setCookieConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
    >
      <div className="cookie-banner__inner">
        <div className="cookie-banner__copy">
          <div id="cookie-banner-title" className="cookie-banner__title">
            // {t.title}
          </div>
          <p id="cookie-banner-text" className="cookie-banner__text">
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
