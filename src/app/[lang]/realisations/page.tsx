import type { Metadata } from "next";
import RealisationsPage from "@/components/pages/RealisationsPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "AI agent use cases" : "Cas d'usage agents IA",
    description: isEn
      ? "Concrete deployment scenarios for production agents, controlled RAG and supervised document automation."
      : "Scénarios concrets de déploiement : agents en production, RAG sous contrôle et automatisation documentaire supervisée.",
    path: "/realisations",
    lang,
  });
}

export default function Page() {
  return <RealisationsPage />;
}
