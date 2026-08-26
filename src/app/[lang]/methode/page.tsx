import type { Metadata } from "next";
import SignalPage from "@/components/premium/SignalPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, signalArticleJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "SIGNAL — find where AI actually matters"
      : "SIGNAL — trouver où l’IA compte vraiment",
    description: isEn
      ? "SIGNAL sells the method before the technology: discover, map, score, prioritize, quantify ROI and build the roadmap."
      : "SIGNAL vend la méthode avant la technologie : découvrir, cartographier, scorer, prioriser, quantifier le ROI et bâtir la roadmap.",
    path: "/methode",
    lang,
  });
}

export default async function Page({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  return (
    <>
      <JsonLd data={signalArticleJsonLd(lang)} />
      <SignalPage />
    </>
  );
}
