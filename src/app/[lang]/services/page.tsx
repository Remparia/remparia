import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServicesPage from "@/components/pages/ServicesPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, servicesItemListJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Sovereign AI services" : "Services IA souveraine",
    description: isEn
      ? "AI strategy, business agents, sovereign infra and embedded teams. Remparia puts AI to work in your real processes."
      : "Stratégie IA, agents métier, infra souveraine et équipes embarquées. Remparia met l'IA au travail dans vos process réels.",
    path: "/services",
    lang,
  });
}

export default function Page() {
  return (
    <>
      <JsonLd data={servicesItemListJsonLd()} />
      <ServicesPage />
    </>
  );
}
