import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SecteurDetailPage from "@/components/pages/SecteurDetailPage";
import { SECTEUR_SLUGS } from "@/lib/content";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  secteurMeta,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SECTEUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = secteurMeta(slug);
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/secteurs/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const meta = secteurMeta(slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Secteurs", path: "/secteurs" },
          { name: meta.title, path: `/secteurs/${slug}` },
        ])}
      />
      <SecteurDetailPage slug={slug} />
    </>
  );
}
