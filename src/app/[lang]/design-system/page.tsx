import type { Metadata } from "next";
import DesignSystemPage from "@/components/pages/DesignSystemPage";
import { toLang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Design system",
    description: "Internal Remparia design system. Not for public use.",
    referrer: "no-referrer",
    robots: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        nosnippet: true,
        noarchive: true,
      },
    },
    openGraph: {
      title: "Design system",
      description: "Internal",
      images: [],
    },
    twitter: {
      card: "summary",
      title: "Design system",
      description: "Internal",
      images: [],
    },
    alternates: {
      canonical: undefined,
      languages: undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang: langParam } = await params;
  return <DesignSystemPage lang={toLang(langParam)} />;
}
