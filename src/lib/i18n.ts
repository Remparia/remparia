import type { Lang } from "@/lib/content";

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function toLang(locale: string): Lang {
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

/** Prefixe un chemin interne avec la locale. `/` → `/fr`, `/services` → `/fr/services` */
export function withLocale(locale: Locale | Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/** Retire le préfixe /fr|/en du pathname */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (parts.length >= 2 && isLocale(parts[1])) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
  }
  return pathname || "/";
}

export function getLocaleFromPathname(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  if (seg && isLocale(seg)) return seg;
  return DEFAULT_LOCALE;
}

/** Change la locale en gardant le chemin logique */
export function switchLocalePath(pathname: string, next: Locale): string {
  return withLocale(next, stripLocale(pathname));
}
