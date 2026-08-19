import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AProposPage from "@/components/pages/AProposPage";
import { toLang } from "@/lib/i18n";
import { aboutPageJsonLd, breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { teamPeopleJsonLd } from "@/lib/team";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "About" : "À propos",
    description: isEn
      ? "Remparia's vision and values: Technology that strengthens professions built on trust, preserves human decisions and transfers control."
      : "La vision et les valeurs de Remparia : des agents qui renforcent les métiers de confiance, préservent la décision humaine et transfèrent la maîtrise.",
    path: "/a-propos",
    lang,
  });
}

export default async function Page({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  const home = isEn ? "Home" : "Accueil";
  const label = isEn ? "About" : "À propos";

  return (
    <>
      <JsonLd
        data={[
          aboutPageJsonLd(lang),
          breadcrumbJsonLd(
            [
              { name: home, path: "/" },
              { name: label, path: "/a-propos" },
            ],
            lang,
          ),
          ...teamPeopleJsonLd(lang),
        ]}
      />
      <AProposPage />
    </>
  );
}
