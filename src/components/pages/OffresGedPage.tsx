"use client";

import { GedLandingPage } from "@/ged/views/GedLandingPage";
import { useLang } from "@/lib/lang";

export default function OffresGedPage() {
  const { lang } = useLang();
  return <GedLandingPage embedded initialLang={lang} />;
}
