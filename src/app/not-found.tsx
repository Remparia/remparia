"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, getLocaleFromPathname, type Locale } from "@/lib/i18n";

const COPY = {
  fr: {
    title: "Page introuvable",
    sub: "Cette URL n'existe pas. Revenez à l'accueil ou explorez nos services.",
    home: "Accueil →",
    contact: "Contact →",
  },
  en: {
    title: "Page not found",
    sub: "This URL doesn't exist. Go back home or explore our services.",
    home: "Home →",
    contact: "Contact →",
  },
} as const;

export default function NotFound() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(getLocaleFromPathname(window.location.pathname));
  }, []);

  const t = COPY[locale];

  return (
    <div className="page page--premium page--premium-inner">
      <header className="page-hero">
        <div className="page-hero__eyebrow">// 404</div>
        <h1 className="page-hero__title">{t.title}</h1>
        <p className="page-hero__sub">{t.sub}</p>
        <div className="hero__actions" style={{ marginTop: 28 }}>
          <Link href={`/${locale}`} className="btn-primary">
            {t.home}
          </Link>
          <Link href={`/${locale}/contact`} className="btn-ghost">
            {t.contact}
          </Link>
        </div>
      </header>
    </div>
  );
}
