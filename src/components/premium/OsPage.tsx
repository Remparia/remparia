"use client";

import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { premiumPage } from "@/lib/pages-premium";
import { useLang } from "@/lib/lang";

export default function OsPage() {
  const { lang } = useLang();
  return (
    <PremiumMarketingPage
      copy={premiumPage("os", lang)}
      homeLabel={lang === "fr" ? "Accueil" : "Home"}
    />
  );
}
