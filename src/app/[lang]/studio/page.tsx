import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import StudioPage from "@/components/premium/StudioPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  studioFaqJsonLd,
  studioServiceJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/studio", lang);
  return createPageMetadata({ ...copy, path: "/studio", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: "Studio", path: "/studio" }],
            lang,
          ),
          studioServiceJsonLd(lang),
          studioFaqJsonLd(lang),
        ]}
      />
      <StudioPage />
    </>
  );
}
