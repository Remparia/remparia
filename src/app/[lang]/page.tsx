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
      ? "Sovereign AI that augments your teams"
      : "IA souveraine qui augmente vos équipes",
    description: isEn
      ? "Less hype. More results. Remparia deploys sovereign, compliant business AI agents — from POC to daily production."
      : "Moins de hype. Plus de résultats. Remparia déploie des agents IA métier, souverains et conformes — du POC à la production quotidienne.",
    path: "/",
    lang,
  });
}

export default function Home() {
  return <HomePage />;
}
