import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LegalPackPage from "@/components/premium/LegalPackPage";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  legalPackFaqJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/solutions/legal", lang);
  return createPageMetadata({ ...copy, path: "/solutions/legal", lang });
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
              { name: lang === "fr" ? "Juridique" : "Legal", path: "/solutions/legal" },
            ],
            lang,
          ),
          legalPackFaqJsonLd(lang),
        ]}
      />
      <LegalPackPage />
    </>
  );
}
