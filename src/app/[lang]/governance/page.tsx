import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import GovernancePage from "@/components/premium/GovernancePage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  governanceFaqJsonLd,
  homeCrumb,
  webPageJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/governance", lang);
  return createPageMetadata({ ...copy, path: "/governance", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/governance", lang);
  const label = lang === "en" ? "Governance" : "Gouvernance";
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/governance",
            name: copy.title,
            description: copy.description,
          }),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/governance" }],
            lang,
          ),
          governanceFaqJsonLd(lang),
        ]}
      />
      <GovernancePage />
    </>
  );
}
