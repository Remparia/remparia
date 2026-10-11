import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import RoiPage from "@/components/pages/RoiPage";
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
  const copy = pageSeo("/roi", lang);
  return createPageMetadata({ ...copy, path: "/roi", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/roi", lang);
  const label = lang === "en" ? "ROI calculator" : "Calculateur ROI";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/roi",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/roi" }],
            lang,
          ),
        ]}
      />
      <RoiPage />
    </>
  );
}
