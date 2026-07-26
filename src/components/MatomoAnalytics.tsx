"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
} from "@/lib/cookie-consent";

declare global {
  interface Window {
    _paq?: Array<unknown[]>;
  }
}

function matomoBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_MATOMO_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, "");
}

function matomoSiteId() {
  return process.env.NEXT_PUBLIC_MATOMO_SITE_ID?.trim() || null;
}

function ensureMatomoScript(baseUrl: string, siteId: string) {
  window._paq = window._paq || [];
  window._paq.push(["setTrackerUrl", `${baseUrl}/matomo.php`]);
  window._paq.push(["setSiteId", siteId]);
  window._paq.push(["enableLinkTracking"]);
  window._paq.push(["forgetUserOptOut"]);

  if (document.getElementById("matomo-script")) return;

  const script = document.createElement("script");
  script.id = "matomo-script";
  script.async = true;
  script.src = `${baseUrl}/matomo.js`;
  document.head.appendChild(script);
}

/**
 * Charge Matomo uniquement si le consentement cookies est accepté.
 */
export default function MatomoAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => {
      const consent = getCookieConsent();
      setAllowed(consent === "accepted");
      if (consent === "refused" && typeof window !== "undefined") {
        window._paq = window._paq || [];
        window._paq.push(["optUserOut"]);
      }
    };
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    const baseUrl = matomoBaseUrl();
    const siteId = matomoSiteId();
    if (!allowed || !baseUrl || !siteId) return;
    ensureMatomoScript(baseUrl, siteId);
  }, [allowed]);

  useEffect(() => {
    const baseUrl = matomoBaseUrl();
    const siteId = matomoSiteId();
    if (!allowed || !baseUrl || !siteId || typeof window === "undefined") return;

    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");

    window._paq = window._paq || [];
    window._paq.push(["setCustomUrl", url]);
    window._paq.push(["setDocumentTitle", document.title]);
    window._paq.push(["trackPageView"]);
  }, [allowed, pathname, searchParams]);

  return null;
}
