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
      ? "AI agents: time returned, decision preserved"
      : "Agents IA : du temps rendu, la décision préservée",
    description: isEn
      ? "Remparia strengthens specialized professions with supervised AI agents: time returned, decision preserved and data under control."
      : "Remparia renforce les métiers spécialisés avec des agents IA supervisés : du temps rendu, la décision préservée et les données sous contrôle.",
    path: "/",
    lang,
  });
}

export default function Home() {
  return <HomePage />;
}
