"use client";

import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { premiumPage } from "@/lib/pages-premium";
import { useLang } from "@/lib/lang";

export default function StudioPage() {
  const { lang } = useLang();
  return (
    <PremiumMarketingPage
      copy={premiumPage("studio", lang)}
      homeLabel={lang === "fr" ? "Accueil" : "Home"}
    />
  );
}
