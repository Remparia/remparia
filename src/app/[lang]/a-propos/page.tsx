import type { Metadata } from "next";
import AProposPage from "@/components/pages/AProposPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "About" : "À propos",
    description: isEn
      ? "Remparia's vision and values: AI that strengthens professions built on trust, preserves human decisions and transfers control."
      : "La vision et les valeurs de Remparia : une IA qui renforce les métiers de confiance, préserve la décision humaine et transfère la maîtrise.",
    path: "/a-propos",
    lang,
  });
}

export default function Page() {
  return <AProposPage />;
}
