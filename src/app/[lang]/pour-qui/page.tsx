import type { Metadata } from "next";
import PremiumKeyedPage from "@/components/premium/PremiumKeyedPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Who it is for" : "Pour qui",
    description: isEn
      ? "Where Remparia is legitimate — accountability professions and sensitive data."
      : "Là où Remparia est légitime — métiers à responsabilité et données sensibles.",
    path: "/pour-qui",
    lang,
  });
}

export default function Page() {
  return <PremiumKeyedPage pageKey="pourQui" />;
}
