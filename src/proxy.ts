import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";
import {
  CANONICAL_SITE_ORIGIN,
  EN_SLUG_ALIASES,
  LEGACY_FR_HOSTS,
} from "@/lib/redirects";

const PUBLIC_FILE = /\.(.*)$/;

function redirectPermanent(url: URL) {
  return NextResponse.redirect(url, 308);
}

function localeFromPath(pathname: string) {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/fr")) return "fr";
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host && LEGACY_FR_HOSTS.has(host)) {
    const incoming = new URL(request.url);
    const target = new URL(
      `${incoming.pathname}${incoming.search}`,
      CANONICAL_SITE_ORIGIN,
    );
    return redirectPermanent(target);
  }

  const { pathname } = request.nextUrl;

  const enAlias = EN_SLUG_ALIASES[pathname];
  if (enAlias) {
    const url = request.nextUrl.clone();
    url.pathname = enAlias;
    return redirectPermanent(url);
  }

  if (
    pathname === "/pour-qui" ||
    pathname === "/fr/pour-qui" ||
    pathname === "/en/pour-qui"
  ) {
    const locale = localeFromPath(pathname);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/cas-d-usage`;
    return redirectPermanent(url);
  }

  if (
    pathname === "/realisations" ||
    pathname === "/fr/realisations" ||
    pathname === "/en/realisations"
  ) {
    const locale = localeFromPath(pathname);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/secteurs`;
    return NextResponse.redirect(url, 301);
  }

  if (
    pathname === "/ressources" ||
    pathname === "/fr/ressources" ||
    pathname === "/en/ressources" ||
    pathname === "/methode" ||
    pathname === "/fr/methode" ||
    pathname === "/en/methode"
  ) {
    const locale = localeFromPath(pathname);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/signal`;
    return NextResponse.redirect(url, 301);
  }

  if (
    pathname === "/os" ||
    pathname === "/fr/os" ||
    pathname === "/en/os"
  ) {
    const locale = localeFromPath(pathname);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/solution`;
    return NextResponse.redirect(url, 301);
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/icon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];

  if (isLocale(segment ?? "")) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", segment!);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    if (pathname.includes("/design-system")) {
      response.headers.set(
        "X-Robots-Tag",
        "noindex, nofollow, noarchive, nosnippet, noimageindex",
      );
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/"
      ? `/${DEFAULT_LOCALE}`
      : `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
