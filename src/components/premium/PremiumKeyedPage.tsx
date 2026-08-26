"use client";

import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { PAGES_PREMIUM, premiumPage } from "@/lib/pages-premium";
import { useLang } from "@/lib/lang";

export type PremiumKey = keyof typeof PAGES_PREMIUM;

export default function PremiumKeyedPage({ pageKey }: { pageKey: PremiumKey }) {
  const { lang } = useLang();
  return (
    <PremiumMarketingPage
      copy={premiumPage(pageKey, lang)}
      homeLabel={lang === "fr" ? "Accueil" : "Home"}
    />
  );
}
