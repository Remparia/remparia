import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactPage from "@/components/pages/ContactPage";
import { toLang } from "@/lib/i18n";
import { contactPageJsonLd, createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: "Contact",
    description: isEn
      ? "Bring Remparia the workflow costing your experts time. Frame repetitive work, data constraints and measurable outcomes with a partner."
      : "Présentez à Remparia le processus qui coûte du temps à vos experts. Cadrez le répétitif, les données et les gains avec un associé.",
    path: "/contact",
    lang,
  });
}

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <ContactPage />
    </>
  );
}
