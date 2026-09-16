import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FinancePackPage from "@/components/premium/FinancePackPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  financePackFaqJsonLd,
  homeCrumb,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/solutions/finance", lang);
  return createPageMetadata({ ...copy, path: "/solutions/finance", lang });
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
              { name: "Finance", path: "/solutions/finance" },
            ],
            lang,
          ),
          financePackFaqJsonLd(lang),
        ]}
      />
      <FinancePackPage />
    </>
  );
}
