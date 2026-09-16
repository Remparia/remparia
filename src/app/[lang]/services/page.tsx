import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServicesPage from "@/components/pages/ServicesPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  servicesItemListJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/services", lang);
  return createPageMetadata({ ...copy, path: "/services", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: "Services", path: "/services" }],
            lang,
          ),
          servicesItemListJsonLd(lang),
        ]}
      />
      <ServicesPage />
    </>
  );
}
