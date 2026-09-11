import type { Metadata } from "next";
import RealEstatePackPage from "@/components/premium/RealEstatePackPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Real Estate AI Workforce"
      : "Pack immobilier — force de travail IA",
    description: isEn
      ? "First industrialized vertical: business agents, orchestrator, connectors and governance."
      : "Premier vertical industrialisé : agents métier, orchestrateur, connecteurs et gouvernance.",
    path: "/solutions/real-estate",
    lang,
  });
}

export default function Page() {
  return <RealEstatePackPage />;
}
