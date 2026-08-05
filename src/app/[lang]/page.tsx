import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Business AI agents — through to production"
      : "Agents IA métier — jusqu'à la production",
    description: isEn
      ? "Less hype. More results. Remparia deploys business AI agents into your real workflows — from POC to daily production. Data stays under your control."
      : "Moins de hype. Plus de résultats. Remparia déploie des agents IA métier dans vos process réels — du POC à la production quotidienne. Données sous votre contrôle.",
    path: "/",
    lang,
  });
}

export default function Home() {
  return <HomePage />;
}
