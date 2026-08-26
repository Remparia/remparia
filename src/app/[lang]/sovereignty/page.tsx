import type { Metadata } from "next";
import SovereigntyPage from "@/components/premium/SovereigntyPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Sovereignty by architecture"
      : "Souveraineté par architecture",
    description: isEn
      ? "Remparia Cloud, Sovereign Cloud, Private Cloud, On-Premise — and air-gapped when relevant."
      : "Remparia Cloud, Sovereign Cloud, Private Cloud, On-Premise — et air-gapped lorsque pertinent.",
    path: "/sovereignty",
    lang,
  });
}

export default function Page() {
  return <SovereigntyPage />;
}
