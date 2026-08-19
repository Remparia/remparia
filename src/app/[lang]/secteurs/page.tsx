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
    title: isEn ? "Specialized professions" : "Métiers spécialisés",
    description: isEn
      ? "Agents for professions where data is sensitive, accountability is high and expert time is scarce."
      : "Des agents Agents pour les métiers où la donnée est sensible, la responsabilité forte et le temps expert rare.",
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
