import type { Metadata } from "next";
import RessourcesPage from "@/components/pages/RessourcesPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Resources" : "Ressources",
    description: isEn
      ? "SIGNAL method, insights and Remparia tools to go from noise to signal in AI."
      : "Méthode SIGNAL, insights et outils Remparia pour passer du bruit au signal en IA.",
    path: "/ressources",
    lang,
  });
}

export default function Page() {
  return <RessourcesPage />;
}
