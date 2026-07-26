import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecteursPage from "@/components/pages/SecteursPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, secteursItemListJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Industries & sectors" : "Secteurs & industries",
    description: isEn
      ? "Finance, healthcare, industry, consulting, tech and public sector: Remparia AI tailored to your business — compliance, agents and production."
      : "Finance, santé, industrie, conseil, tech et secteur public : approche IA Remparia adaptée à votre métier — conformité, agents et production.",
    path: "/secteurs",
    lang,
  });
}

export default function Page() {
  return (
    <>
      <JsonLd data={secteursItemListJsonLd()} />
      <SecteursPage />
    </>
  );
}
