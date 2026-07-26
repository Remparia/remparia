import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { LangProvider } from "@/lib/lang";
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
  title: {
    default: "Remparia — IA souveraine",
    template: "%s · Remparia",
  },
  description:
    "Moins de hype. Plus de résultats. Agents métier, infra France, conformité.",
  icons: {
    icon: [{ url: "/favicon-remparia.png", type: "image/png" }],
    apple: [{ url: "/favicon-remparia.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${spaceMono.variable}`}>
      <body>
        <LangProvider>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
