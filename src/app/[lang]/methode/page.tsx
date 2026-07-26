import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import MethodePage from "@/components/pages/MethodePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, signalHowToJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "SIGNAL method" : "Méthode SIGNAL",
    description: isEn
      ? "The SIGNAL protocol: scope, integrate, guarantee, normalize, augment, land. Remparia's path from idea to production."
      : "Le protocole SIGNAL : scoper, intégrer, garantir, normaliser, augmenter, livrer. La méthode Remparia de l'idée à la production.",
    path: "/methode",
    lang,
  });
}

export default function Page() {
  return (
    <>
      <JsonLd data={signalHowToJsonLd()} />
      <MethodePage />
    </>
  );
}
