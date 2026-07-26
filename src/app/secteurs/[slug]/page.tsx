import type { Metadata } from "next";
import SecteurDetailPage from "@/components/pages/SecteurDetailPage";
import { getSecteur, SECTEUR_SLUGS } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SECTEUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSecteur(slug, "fr");
  return { title: item?.title ?? "Secteur" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <SecteurDetailPage slug={slug} />;
}
