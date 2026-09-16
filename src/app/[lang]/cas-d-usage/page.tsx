import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CasUsagePage from "@/components/pages/CasUsagePage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  casUsageItemListJsonLd,
  createPageMetadata,
  homeCrumb,
  webPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/cas-d-usage", lang);
  return createPageMetadata({ ...copy, path: "/cas-d-usage", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/cas-d-usage", lang);
  const label = lang === "en" ? "Use cases" : "Cas d’usage";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/cas-d-usage",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/cas-d-usage" }],
            lang,
          ),
          casUsageItemListJsonLd(lang),
        ]}
      />
      <CasUsagePage />
    </>
  );
}
