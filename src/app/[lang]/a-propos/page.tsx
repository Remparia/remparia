import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AProposPage from "@/components/pages/AProposPage";
import { toLang } from "@/lib/i18n";
import {
  aboutPageJsonLd,
  breadcrumbJsonLd,
  createPageMetadata,
  homeCrumb,
} from "@/lib/seo";
import { pageSeo } from "@/lib/seo-copy";
import { teamPeopleJsonLd } from "@/lib/team";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const copy = pageSeo("/a-propos", lang);
  return createPageMetadata({ ...copy, path: "/a-propos", lang });
}

export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  const label = lang === "en" ? "About" : "À propos";

  return (
    <>
      <JsonLd
        data={[
          aboutPageJsonLd(lang),
          breadcrumbJsonLd(
            [homeCrumb(lang), { name: label, path: "/a-propos" }],
            lang,
          ),
          ...teamPeopleJsonLd(lang),
        ]}
      />
      <AProposPage />
    </>
  );
}
