import type { Metadata } from "next";
import OsPage from "@/components/premium/OsPage";
import JsonLd from "@/components/JsonLd";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  osFaqJsonLd,
  osSoftwareJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/solution", lang);
  return createPageMetadata({ ...copy, path: "/solution", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: "Remparia OS", path: "/solution" }],
            lang,
          ),
          osSoftwareJsonLd(lang),
          osFaqJsonLd(lang),
        ]}
      />
      <OsPage />
    </>
  );
}
