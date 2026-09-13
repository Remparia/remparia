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
      ? "Real Estate AI Pack — expert time on the decision"
      : "Pack immobilier — le temps expert sur la décision",
    description: isEn
      ? "Governed real-estate AI workforce: lead qualification, matching, files and follow-ups — with human stops on mandate, viewing and negotiation."
      : "Force de travail IA immobilière gouvernée : qualification, matching, dossiers et relances — avec stops humains sur mandat, visite et négociation.",
    path: "/solutions/real-estate",
    lang,
  });
}

export default function Page() {
  return <RealEstatePackPage />;
}
