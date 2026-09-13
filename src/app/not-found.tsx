"use client";

import NotFoundPage from "@/components/pages/NotFoundPage";
import SiteChrome from "@/components/SiteChrome";
import { DEFAULT_LOCALE, getLocaleFromPathname } from "@/lib/i18n";
import { LangProvider } from "@/lib/lang";
import { ViewModeProvider } from "@/lib/view-mode";
import { useEffect, useState } from "react";

/** Root 404 (hors layout [lang]) — recrée chrome + langue. */
export default function NotFound() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(getLocaleFromPathname(window.location.pathname));
  }, []);

  return (
    <LangProvider initialLang={locale}>
      <ViewModeProvider>
        <SiteChrome>
          <NotFoundPage />
        </SiteChrome>
      </ViewModeProvider>
    </LangProvider>
  );
}
