import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Inter_Tight, Urbanist } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import VercelAnalyticsProvider from "@/components/VercelAnalyticsProvider";
import {
  SITE,
  absoluteUrl,
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { COLOR_THEME_BOOT_SCRIPT } from "@/lib/color-theme-boot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

const defaultTitle = "Agents métier supervisés : SIGNAL, Studio, OS";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${defaultTitle} · Remparia`,
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
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    alternateLocale: [SITE.localeAlternate],
    url: SITE.url,
    siteName: SITE.name,
    title: `${defaultTitle} · Remparia`,
    description: SITE.description,
    images: [
      {
        url: absoluteUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${defaultTitle} · Remparia`,
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
    "theme-color": "#050604",
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
      data-theme="night"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${ibmPlexMono.variable} ${urbanist.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: COLOR_THEME_BOOT_SCRIPT }}
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
        <VercelAnalyticsProvider />
      </body>
    </html>
  );
}
