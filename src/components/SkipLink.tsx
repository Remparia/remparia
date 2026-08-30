"use client";

import { NAV } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function SkipLink() {
  const { lang } = useLang();
  return (
    <a href="#contenu" className="skip-link" suppressHydrationWarning>
      {NAV[lang].skipToContent}
    </a>
  );
}
