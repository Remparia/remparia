"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/lang";

/** Sync `<html lang>` with the active locale without forcing dynamic root layout. */
export default function HtmlLang() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "fr";
  }, [lang]);

  return null;
}
