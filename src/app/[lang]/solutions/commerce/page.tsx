import type { Metadata } from "next";
import CommercePackPage from "@/components/premium/CommercePackPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Commerce AI Workforce — Commerce Agent"
      : "Pack commerce — Agent Commerce",
    description: isEn
      ? "Qualification, follow-up, orders, catalog and store relations — a governed AI workforce for commerce teams."
      : "Qualification, relances, commandes, catalogue et relation magasin — une force de travail IA gouvernée pour les équipes commerce.",
    path: "/solutions/commerce",
    lang,
  });
}

export default function Page() {
  return <CommercePackPage />;
}
