import type { Metadata } from "next";
import FinancePackPage from "@/components/premium/FinancePackPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Finance AI Pack — control without diluting the decision"
      : "Pack finance — contrôler sans diluer la décision",
    description: isEn
      ? "Governed finance AI workforce: assisted KYC, reporting and risk prep — with audit trails and human decisions on thresholds."
      : "Force de travail IA finance gouvernée : KYC assisté, reporting et préparation risque — avec pistes d’audit et décisions humaines sur les seuils.",
    path: "/solutions/finance",
    lang,
  });
}

export default function Page() {
  return <FinancePackPage />;
}
