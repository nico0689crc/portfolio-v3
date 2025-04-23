import type { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/getDictionary";
import CookiesPolicyView from "@/views/cookies-policy/CookiesPolicyView";

const Page = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <CookiesPolicyView dictionary={dictionary} />
  );
};

export default Page;
