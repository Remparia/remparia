import type { Metadata } from "next";
import StudioPage from "@/components/premium/StudioPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Studio — build your AI workforce" : "Studio — construire votre force de travail IA",
    description: isEn
      ? "Studio assembles agents, skills, tools, knowledge, workflows and human approvals on a governed foundation."
      : "Studio assemble agents, skills, outils, knowledge, workflows et validations humaines sur un socle gouverné.",
    path: "/studio",
    lang,
  });
}

export default function Page() {
  return <StudioPage />;
}
