import type { Metadata } from "next";
import LegalPackPage from "@/components/premium/LegalPackPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Legal AI Pack — the machine prepares, counsel decides"
      : "Pack juridique — la machine prépare, l’avocat tranche",
    description: isEn
      ? "Governed legal AI workforce: document review, case prep and compliance checks — no automated advice or machine signature."
      : "Force de travail IA juridique gouvernée : revue documentaire, préparation de dossiers et contrôles — sans avis automatisé ni signature machine.",
    path: "/solutions/legal",
    lang,
  });
}

export default function Page() {
  return <LegalPackPage />;
}
