import { notFound } from "next/navigation";
import HtmlLang from "@/components/HtmlLang";
import ScrollRevealRoot from "@/components/ScrollRevealRoot";
import SiteChrome from "@/components/SiteChrome";
import { LangProvider } from "@/lib/lang";
import { ViewModeProvider } from "@/lib/view-mode";
import { isLocale, LOCALES, toLang, type Locale } from "@/lib/i18n";

export const revalidate = 86_400;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: langParam } = await params;
  if (!isLocale(langParam)) notFound();
  const lang = toLang(langParam as Locale);

  return (
    <LangProvider initialLang={lang}>
      <ViewModeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=${JSON.stringify(lang === "en" ? "en" : "fr")}`,
          }}
        />
        <HtmlLang />
        <ScrollRevealRoot />
        <SiteChrome>{children}</SiteChrome>
      </ViewModeProvider>
    </LangProvider>
  );
}
