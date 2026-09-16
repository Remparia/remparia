import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecteurDetailPage from "@/components/pages/SecteurDetailPage";
import { SECTEUR_SLUGS } from "@/lib/content";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
  secteurFaqJsonLd,
  secteurMeta,
} from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return SECTEUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang: langParam } = await params;
  const lang = toLang(langParam);
  const meta = secteurMeta(slug, lang);
  const { isHeartSecteur } = await import("@/lib/strategy");
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/secteurs/${slug}`,
    image: meta.image,
    lang,
    noIndex: !isHeartSecteur(slug),
  });
}

export default async function Page({ params }: Props) {
  const { slug, lang: langParam } = await params;
  const lang = toLang(langParam);
  const meta = secteurMeta(slug, lang);
  const faqLd = secteurFaqJsonLd(slug, lang);
  const sectors = lang === "en" ? "Industries" : "Secteurs";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            [
              homeCrumb(lang),
              { name: sectors, path: "/secteurs" },
              { name: meta.title, path: `/secteurs/${slug}` },
            ],
            lang,
          ),
          ...(faqLd ? [faqLd] : []),
        ]}
      />
      <SecteurDetailPage slug={slug} />
    </>
  );
}
