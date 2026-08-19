"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
} from "@/lib/cookie-consent";

/** Vercel Web Analytics — chargé uniquement après consentement explicite. */
export default function VercelAnalyticsProvider() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getCookieConsent() === "accepted");
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!allowed) return null;
  return <Analytics />;
}
