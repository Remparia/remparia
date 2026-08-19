import type { Metadata } from "next";
import { headers } from "next/headers";
import { Archivo, Space_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import MatomoProvider from "@/components/MatomoProvider";
import {
  SITE,
  absoluteUrl,
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Remparia — Agents IA : du temps rendu, la décision préservée",
    template: "%s · Remparia",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [...SITE.keywords],
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon-remparia.png", type: "image/png" }],
    apple: [{ url: "/favicon-remparia.png" }],
    shortcut: ["/favicon-remparia.png"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    alternateLocale: [SITE.localeAlternate],
    url: SITE.url,
    siteName: SITE.name,
    title: "Remparia — Agents IA : du temps rendu, la décision préservée",
    description: SITE.description,
    images: [
      {
        url: absoluteUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: "Remparia — Du temps rendu, la décision préservée",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remparia — Agents IA : du temps rendu, la décision préservée",
    description: SITE.description,
    images: [absoluteUrl(SITE.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "theme-color": "#0a0a0a",
    "color-scheme": "dark",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const headerLocale = h.get("x-locale");
  const lang =
    headerLocale && isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceMono.variable}`}
    >
      <body>
        <JsonLd
          data={[
            organizationJsonLd(),
            websiteJsonLd(),
            professionalServiceJsonLd(),
          ]}
        />
        {children}
        <MatomoProvider />
      </body>
    </html>
  );
}
