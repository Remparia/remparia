"use client";

import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { premiumPage } from "@/lib/pages-premium";
import { useLang } from "@/lib/lang";

export default function SovereigntyPage() {
  const { lang } = useLang();
  return (
    <PremiumMarketingPage
      copy={premiumPage("sovereignty", lang)}
      homeLabel={lang === "fr" ? "Accueil" : "Home"}
    />
  );
}
