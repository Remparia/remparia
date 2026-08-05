import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
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
