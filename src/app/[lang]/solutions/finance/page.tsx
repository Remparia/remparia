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
    title: isEn
      ? "Financial Services AI Workforce"
      : "Pack services financiers — force de travail IA",
    description: isEn
      ? "Assisted KYC, reporting and risk prep with audit trails."
      : "KYC assisté, reporting et préparation risque avec pistes d’audit.",
    path: "/solutions/finance",
    lang,
  });
}

export default function Page() {
  return <PremiumKeyedPage pageKey="finance" />;
}
