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
      ? "The SIGNAL method and practical tools to turn a real workflow into a supervised AI agent."
      : "La méthode SIGNAL et des outils pratiques pour transformer un processus réel en agent IA supervisé.",
    path: "/ressources",
    lang,
  });
}

export default function Page() {
  return <RessourcesPage />;
}
