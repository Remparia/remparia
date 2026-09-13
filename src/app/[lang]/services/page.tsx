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
    title: isEn
      ? "Services — delivery layer for Remparia OS"
      : "Services — couche delivery de Remparia OS",
    description: isEn
      ? "Frame with SIGNAL, build in Studio, deploy under sovereignty, drive adoption — implementation services for Remparia OS, not a parallel product."
      : "Cadrer avec SIGNAL, construire dans Studio, déployer en souveraineté, faire adopter — services de mise en œuvre de Remparia OS, pas un produit parallèle.",
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
