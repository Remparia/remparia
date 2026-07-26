import type { Metadata } from "next";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";
import { getService, SERVICE_SLUGS } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getService(slug, "fr");
  return { title: item?.title ?? "Service" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
