import { redirect } from "next/navigation";
import { toLang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

/** Legacy `/os` route — canonical URL is `/solution`. */
export default async function Page({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  redirect(`/${lang}/solution`);
}
