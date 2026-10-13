import type { Metadata } from "next";
import "@/ged/ged-landing.css";
import OffresGedPage from "@/components/pages/OffresGedPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  webPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";
import JsonLd from "@/components/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/offres/ged", lang);
  return createPageMetadata({ ...copy, path: "/offres/ged", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/offres/ged", lang);
  const offresLabel = lang === "en" ? "Offers" : "Offres";
  const gedLabel = "Remparia GED";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/offres/ged",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [
              homeCrumb(lang),
              { name: offresLabel, path: "/offres" },
              { name: gedLabel, path: "/offres/ged" },
            ],
            lang,
          ),
        ]}
      />
      <OffresGedPage />
    </>
  );
}
