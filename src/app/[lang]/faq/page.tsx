import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FaqPage from "@/components/pages/FaqPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  webPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/faq", lang);
  return createPageMetadata({ ...copy, path: "/faq", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/faq", lang);
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/faq",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: "FAQ", path: "/faq" }],
            lang,
          ),
        ]}
      />
      <FaqPage />
    </>
  );
}
