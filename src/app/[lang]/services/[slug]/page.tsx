import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";
import { SERVICE_SLUGS } from "@/lib/content";
import { toLang } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  serviceJsonLd,
  serviceMeta,
} from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang: langParam } = await params;
  const lang = toLang(langParam);
  const meta = serviceMeta(slug);
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/${slug}`,
    image: meta.image,
    lang,
  });
}

export default async function Page({ params }: Props) {
  const { slug, lang: langParam } = await params;
  const lang = toLang(langParam);
  const meta = serviceMeta(slug);
  const home = lang === "en" ? "Home" : "Accueil";
  const jsonLd = [
    breadcrumbJsonLd(
      [
        { name: home, path: "/" },
        { name: "Services", path: "/services" },
        { name: meta.title, path: `/services/${slug}` },
      ],
      lang,
    ),
    serviceJsonLd(slug, lang),
  ].filter(Boolean) as object[];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetailPage slug={slug} />
    </>
  );
}
