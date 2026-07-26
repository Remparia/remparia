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
    title: isEn ? "Legal notice" : "Mentions légales",
    description: isEn
      ? "Legal notice for the Remparia website — publisher, hosting and intellectual property."
      : "Mentions légales du site Remparia — éditeur, hébergement et propriété intellectuelle.",
    path: "/mentions-legales",
    lang,
  });
}

export default function Page() {
  return <LegalDocPage page="mentions" />;
}
