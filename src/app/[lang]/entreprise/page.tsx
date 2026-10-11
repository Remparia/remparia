import { redirect } from "next/navigation";
import { toLang, withLocale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

/** Legacy /entreprise → /a-propos (now under Resources). */
export default async function Page({ params }: Props) {
  const lang = toLang((await params).lang);
  redirect(withLocale(lang, "/a-propos"));
}
