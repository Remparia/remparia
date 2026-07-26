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
      ? "Let's talk about what's possible. Contact Remparia for a SIGNAL diagnostic or a discussion on sovereign AI agents."
      : "Parlons de ce qui est possible. Contactez Remparia pour un diagnostic SIGNAL ou une discussion sur vos agents IA souverains.",
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
