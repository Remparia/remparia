import type { Metadata } from "next";
import SignalPage from "@/components/premium/SignalPage";
import JsonLd from "@/components/JsonLd";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  signalArticleJsonLd,
  signalFaqJsonLd,
  signalHowToJsonLd,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/signal", lang);
  return createPageMetadata({
    ...copy,
    path: "/signal",
    lang,
    ogType: "article",
  });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: "SIGNAL", path: "/signal" }],
            lang,
          ),
          signalArticleJsonLd(lang),
          signalHowToJsonLd(lang),
          signalFaqJsonLd(lang),
        ]}
      />
      <SignalPage />
    </>
  );
}
