import type { Metadata } from "next";
import AProposPage from "@/components/pages/AProposPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "About" : "À propos",
    description: isEn
      ? "Remparia is a sovereign AI collective. Humans decide, agents execute — through to daily production."
      : "Remparia est un collectif IA souveraine. L'humain décide, l'agent exécute — jusqu'à la production quotidienne.",
    path: "/a-propos",
    lang,
  });
}

export default function Page() {
  return <AProposPage />;
}
