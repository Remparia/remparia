import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecteursPage from "@/components/pages/SecteursPage";
import { createPageMetadata, secteursItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Secteurs & industries",
  description:
    "Finance, santé, industrie, conseil, tech et secteur public : l'IA Remparia là où la conformité n'est pas optionnelle.",
  path: "/secteurs",
});

export default function Page() {
  return (
    <>
      <JsonLd data={secteursItemListJsonLd()} />
      <SecteursPage />
    </>
  );
}
