import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactPage from "@/components/pages/ContactPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  contactPageJsonLd,
  createPageMetadata,
  homeCrumb,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/contact", lang);
  return createPageMetadata({ ...copy, path: "/contact", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: "Contact", path: "/contact" }],
            lang,
          ),
          contactPageJsonLd(lang),
        ]}
      />
      <ContactPage />
    </>
  );
}
