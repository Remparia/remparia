import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import DemarrerPage from "@/components/pages/DemarrerPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  demarrerItemListJsonLd,
  homeCrumb,
  webPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/demarrer", lang);
  return createPageMetadata({ ...copy, path: "/demarrer", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/demarrer", lang);
  const label = lang === "en" ? "Get started" : "Démarrer";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/demarrer",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/demarrer" }],
            lang,
          ),
          demarrerItemListJsonLd(lang),
        ]}
      />
      <DemarrerPage />
    </>
  );
}
