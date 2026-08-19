import type { Metadata } from "next";
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
import { DEFAULT_LOCALE } from "@/lib/i18n";
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
    default: "Remparia — Agents métier : du temps rendu, la décision préservée",
    template: "%s · Remparia",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
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
    title: "Remparia — Agents métier : du temps rendu, la décision préservée",
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
    title: "Remparia — Agents métier : du temps rendu, la décision préservée",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={DEFAULT_LOCALE}
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceMono.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
        />
      </head>
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
