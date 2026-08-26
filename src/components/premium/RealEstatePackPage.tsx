"use client";

import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { premiumPage } from "@/lib/pages-premium";
import { useLang } from "@/lib/lang";

export default function RealEstatePackPage() {
  const { lang } = useLang();
  return (
    <PremiumMarketingPage
      copy={premiumPage("realEstate", lang)}
      homeLabel={lang === "fr" ? "Accueil" : "Home"}
    />
  );
}
