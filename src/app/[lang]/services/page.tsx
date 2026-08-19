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
    title: isEn ? "AI agent services" : "Services agents IA",
    description: isEn
      ? "Diagnostic, governance, business agents, sovereign foundation and adoption: Remparia helps specialized teams absorb repetitive workload."
      : "Diagnostic, gouvernance, agents métier, socle souverain et adoption : Remparia aide les équipes spécialisées à absorber la charge répétitive.",
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
