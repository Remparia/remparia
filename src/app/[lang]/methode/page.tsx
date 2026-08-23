import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import MethodePage from "@/components/pages/MethodePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, signalArticleJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Method: map before you automate"
      : "Méthode : cartographier avant d’automatiser",
    description: isEn
      ? "Observe real work, prioritize by impact and risk, govern before the first agent. The SIGNAL protocol: six stages, each with a deliverable."
      : "Observer le travail réel, prioriser par impact et risque, gouverner avant le premier agent. Le protocole SIGNAL : six étapes, chacune avec un livrable.",
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
      <MethodePage />
    </>
  );
}
