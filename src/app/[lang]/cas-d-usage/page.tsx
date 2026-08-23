import type { Metadata } from "next";
import CasUsagePage from "@/components/pages/CasUsagePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Use cases" : "Cas d’usage",
    description: isEn
      ? "Nine workflow cards in the profession’s language: what the agent does, what it never does, and what we measure."
      : "Neuf fiches processus dans le langage du métier : ce que l’agent fait, ce qu’il ne fait jamais, et ce qu’on mesure.",
    path: "/cas-d-usage",
    lang,
  });
}

export default function Page() {
  return <CasUsagePage />;
}
