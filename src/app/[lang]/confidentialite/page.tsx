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
    title: isEn ? "Privacy policy" : "Politique de confidentialité",
    description: isEn
      ? "How Remparia processes personal data collected via the website and contact form."
      : "Comment Remparia traite les données personnelles collectées via le site et le formulaire de contact.",
    path: "/confidentialite",
    lang,
  });
}

export default function Page() {
  return <LegalDocPage page="confidentialite" />;
}
