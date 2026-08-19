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
      ? "The SIGNAL protocol: study, identify, govern, normalize, automate, liberate. Six stages from fieldwork to measurable use."
      : "Le protocole SIGNAL : sonder, identifier, gouverner, normaliser, automatiser, libérer. Six étapes du terrain à un usage mesurable.",
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
