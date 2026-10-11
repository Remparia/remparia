import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ResourcesSimplePage from "@/components/pages/ResourcesSimplePage";
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
  const copy = pageSeo("/partenariat", lang);
  return createPageMetadata({ ...copy, path: "/partenariat", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/partenariat", lang);
  const label = lang === "en" ? "Partnership" : "Partenariat";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/partenariat",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/partenariat" }],
            lang,
          ),
        ]}
      />
      <ResourcesSimplePage id="partenariat" />
    </>
  );
}
