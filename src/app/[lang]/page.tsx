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
      ? "AI shouldn't be another tool. It should transform how you operate."
      : "L’IA ne doit pas être un outil de plus. Elle doit transformer votre entreprise.",
    description: isEn
      ? "From strategy to execution, Remparia turns AI into a governed operating system for your business."
      : "De la stratégie à l’exécution, Remparia fait de l’IA un système d’exploitation gouverné pour votre activité.",
    path: "/",
    lang,
  });
}

export default function Home() {
  return <HomePage />;
}
