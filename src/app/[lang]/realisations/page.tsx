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
    title: isEn ? "Our work" : "Réalisations",
    description: isEn
      ? "How Remparia takes AI projects from POC to measurable value: production agents, sovereign RAG, regulated automation."
      : "Comment Remparia fait passer les projets IA du POC à la valeur mesurable : agents en production, RAG souverain, automatisation réglementée.",
    path: "/realisations",
    lang,
  });
}

export default function Page() {
  return <RealisationsPage />;
}
