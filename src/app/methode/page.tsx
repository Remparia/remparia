import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import MethodePage from "@/components/pages/MethodePage";
import { createPageMetadata, signalHowToJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Méthode SIGNAL",
  description:
    "Le protocole SIGNAL : scoper, intégrer, garantir, normaliser, augmenter, livrer. La méthode Remparia de l'idée à la production.",
  path: "/methode",
});

export default function Page() {
  return (
    <>
      <JsonLd data={signalHowToJsonLd()} />
      <MethodePage />
    </>
  );
}
