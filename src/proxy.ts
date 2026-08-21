import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/realisations" ||
    pathname === "/fr/realisations" ||
    pathname === "/en/realisations"
  ) {
    const locale = pathname.startsWith("/en")
      ? "en"
      : pathname.startsWith("/fr")
        ? "fr"
        : DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/secteurs`;
    return NextResponse.redirect(url, 301);
  }

  if (
    pathname === "/ressources" ||
    pathname === "/fr/ressources" ||
    pathname === "/en/ressources"
  ) {
    const locale = pathname.startsWith("/en")
      ? "en"
      : pathname.startsWith("/fr")
        ? "fr"
        : DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/methode`;
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
