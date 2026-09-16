import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PourQuiPage from "@/components/pages/PourQuiPage";
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
  const copy = pageSeo("/pour-qui", lang);
  return createPageMetadata({ ...copy, path: "/pour-qui", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/pour-qui", lang);
  const label = lang === "en" ? "Who it is for" : "Pour qui";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/pour-qui",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/pour-qui" }],
            lang,
          ),
        ]}
      />
      <PourQuiPage />
    </>
  );
}
