import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SovereigntyPage from "@/components/premium/SovereigntyPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  sovereigntyFaqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/sovereignty", lang);
  return createPageMetadata({ ...copy, path: "/sovereignty", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/sovereignty", lang);
  const label = lang === "en" ? "Sovereignty" : "Souveraineté";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/sovereignty",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/sovereignty" }],
            lang,
          ),
          sovereigntyFaqJsonLd(lang),
        ]}
      />
      <SovereigntyPage />
    </>
  );
}
