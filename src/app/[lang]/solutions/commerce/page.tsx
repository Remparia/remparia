import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CommercePackPage from "@/components/premium/CommercePackPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  commercePackFaqJsonLd,
  homeCrumb,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/solutions/commerce", lang);
  return createPageMetadata({ ...copy, path: "/solutions/commerce", lang });
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
              { name: "Commerce", path: "/solutions/commerce" },
            ],
            lang,
          ),
          commercePackFaqJsonLd(lang),
        ]}
      />
      <CommercePackPage />
    </>
  );
}
