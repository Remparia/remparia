"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  switchLocalePath,
  toLang,
  type Locale,
} from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  locale: Locale;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({
  children,
  initialLang = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  initialLang?: Lang | Locale;
}) {
  const pathname = usePathname() || `/${DEFAULT_LOCALE}`;
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const lang = toLang(locale);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Keep initialLang used for SSR hydration alignment
  void initialLang;

  const setLang = useCallback(
    (next: Lang) => {
      const target = switchLocalePath(pathname, next);
      if (target !== pathname) router.push(target);
    },
    [pathname, router],
  );

  const toggleLang = useCallback(() => {
    setLang(lang === "fr" ? "en" : "fr");
  }, [lang, setLang]);

  const value = useMemo(
    () => ({ lang, locale, setLang, toggleLang }),
    [lang, locale, setLang, toggleLang],
  );

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
