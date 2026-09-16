import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HomePage from "@/components/HomePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata, homeFaqJsonLd, webPageJsonLd } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/", lang);
  return createPageMetadata({ ...copy, path: "/", lang });
}

export default async function Home({ params }: Props) {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/", lang);
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            path: "/",
            name: copy.title,
            description: copy.description,
          }),
          homeFaqJsonLd(lang),
        ]}
      />
      <HomePage />
    </>
  );
}
