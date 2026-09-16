import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import RealEstatePackPage from "@/components/premium/RealEstatePackPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  realEstatePackFaqJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/solutions/real-estate", lang);
  return createPageMetadata({ ...copy, path: "/solutions/real-estate", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [
              homeCrumb(lang),
              {
                name: lang === "fr" ? "Immobilier" : "Real estate",
                path: "/solutions/real-estate",
              },
            ],
            lang,
          ),
          realEstatePackFaqJsonLd(lang),
        ]}
      />
      <RealEstatePackPage />
    </>
  );
}
