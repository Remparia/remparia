export type CookieConsent = "accepted" | "refused";

export const COOKIE_CONSENT_KEY = "remparia-cookie-consent";
export const COOKIE_CONSENT_EVENT = "remparia-consent-change";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (v === "accepted" || v === "refused") return v;
  } catch {
    /* private mode */
  }
  return null;
}

export function setCookieConsent(value: CookieConsent) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }),
  );
}

/** Réaffiche le bandeau (préférences). */
export function resetCookieConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: null }),
  );
}
