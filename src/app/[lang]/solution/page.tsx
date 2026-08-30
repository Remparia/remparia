import type { Metadata } from "next";
import OsPage from "@/components/premium/OsPage";
import JsonLd from "@/components/JsonLd";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, osArticleJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Remparia OS — your AI workforce needs an operating system"
      : "Remparia OS — votre force de travail IA a besoin d’un système d’exploitation",
    description: isEn
      ? "Remparia OS is the enterprise AI control plane: orchestrate agents, models, enterprise data and human decisions from one layer."
      : "Remparia OS est le control plane IA d’entreprise : orchestrer agents, modèles, données et décisions humaines depuis une couche unique.",
    path: "/solution",
    lang,
  });
}

export default async function Page({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  return (
    <>
      <JsonLd data={osArticleJsonLd(lang)} />
      <OsPage />
    </>
  );
}
