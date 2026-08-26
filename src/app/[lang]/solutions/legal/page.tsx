import type { Metadata } from "next";
import PremiumKeyedPage from "@/components/premium/PremiumKeyedPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Legal AI Workforce" : "Pack juridique — force de travail IA",
    description: isEn
      ? "Document review, case prep and compliance checks under governance."
      : "Revue documentaire, préparation de dossiers et contrôles de conformité sous gouvernance.",
    path: "/solutions/legal",
    lang,
  });
}

export default function Page() {
  return <PremiumKeyedPage pageKey="legal" />;
}
