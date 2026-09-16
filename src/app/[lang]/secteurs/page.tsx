import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecteursPage from "@/components/pages/SecteursPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  secteursItemListJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/secteurs", lang);
  return createPageMetadata({ ...copy, path: "/secteurs", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const label = lang === "en" ? "Industries" : "Secteurs";
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/secteurs" }],
            lang,
          ),
          secteursItemListJsonLd(lang),
        ]}
      />
      <SecteursPage />
    </>
  );
}
