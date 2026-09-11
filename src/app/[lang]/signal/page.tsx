import type { Metadata } from "next";
import SignalPage from "@/components/premium/SignalPage";
import JsonLd from "@/components/JsonLd";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, signalArticleJsonLd, signalFaqJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "SIGNAL — stop guessing where AI fits"
      : "SIGNAL — arrêtez de deviner où l’IA s’insère",
    description: isEn
      ? "SIGNAL is an AI opportunity discovery engine. We scan your processes, data and operations to reveal where AI creates measurable business value."
      : "SIGNAL est un moteur de découverte d’opportunités IA. Nous scannons vos processus, données et opérations pour révéler où l’IA crée une valeur business mesurable.",
    path: "/signal",
    lang,
  });
}

export default async function Page({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  return (
    <>
      <JsonLd data={signalArticleJsonLd(lang)} />
      <JsonLd data={signalFaqJsonLd(lang)} />
      <SignalPage />
    </>
  );
}
