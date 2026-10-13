import { redirect } from "next/navigation";
import { toLang, withLocale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

/** /offres → première offre (Remparia GED). Le catalogue vit dans le sous-menu Offres. */
export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  redirect(withLocale(lang, "/offres/ged"));
}
