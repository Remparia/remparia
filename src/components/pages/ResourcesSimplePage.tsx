"use client";

import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { useLang } from "@/lib/lang";
import {
  resourcesPage,
  type ResourcePageId,
} from "@/lib/resources-pages";

export default function ResourcesSimplePage({ id }: { id: ResourcePageId }) {
  const { lang } = useLang();
  const copy = resourcesPage(id, lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  return <PremiumMarketingPage copy={copy} homeLabel={home} />;
}
