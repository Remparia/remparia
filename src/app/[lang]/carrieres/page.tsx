import type { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/carrieres", lang);
  return createPageMetadata({ ...copy, path: "/carrieres", lang });
}

export default function Page() {
  return <CareersPage />;
}
