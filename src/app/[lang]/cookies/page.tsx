import type { Metadata } from "next";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: "Cookies",
    description: isEn
      ? "Cookie and tracker information for the Remparia website."
      : "Informations sur les cookies et traceurs du site Remparia.",
    path: "/cookies",
    lang,
  });
}

export default function Page() {
  return <LegalDocPage page="cookies" />;
}
