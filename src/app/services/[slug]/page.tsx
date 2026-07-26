import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";
import { SERVICE_SLUGS } from "@/lib/content";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  serviceJsonLd,
  serviceMeta,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMeta(slug);
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const meta = serviceMeta(slug);
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: meta.title, path: `/services/${slug}` },
    ]),
    serviceJsonLd(slug),
  ].filter(Boolean) as object[];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetailPage slug={slug} />
    </>
  );
}
