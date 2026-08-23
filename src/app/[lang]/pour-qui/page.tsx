import type { Metadata } from "next";
import PourQuiPage from "@/components/pages/PourQuiPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Who it is for" : "Pour qui",
    description: isEn
      ? "Law & accounting, wealth & risk, specialized firms: where Remparia is legitimate — and who is not our client."
      : "Droit & chiffre, patrimoine & risque, cabinets spécialisés : où Remparia est légitime — et qui n’est pas notre client.",
    path: "/pour-qui",
    lang,
  });
}

export default function Page() {
  return <PourQuiPage />;
}
