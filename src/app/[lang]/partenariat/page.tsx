import { redirect } from "next/navigation";
import { toLang, withLocale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

/** Page masquée — redirige vers l’accueil. */
export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  redirect(withLocale(lang, "/"));
}
