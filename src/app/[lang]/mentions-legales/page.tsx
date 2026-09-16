import type { Metadata } from "next";
import LegalDocPage from "@/components/pages/LegalDocPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/mentions-legales", lang);
  return createPageMetadata({ ...copy, path: "/mentions-legales", lang });
}

export default function Page() {
  return <LegalDocPage page="mentions" />;
}
