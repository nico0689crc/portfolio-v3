// Types
import type { Locale } from '@/configs/i18n';
import type { ChildrenType } from '@/types';

// Layout Components
import PublicLayout from '@/components/layouts/public/PublicLayout';
import PublicFooter from '@/components/layouts/public/footer/PublicFooter';
import PublicHeader from '@/components/layouts/public/header/PublicHeader';
import PublicMain from '@/components/layouts/public/main/PublicMain';
import CookieBanner from '@/components/CookieBanner';
import { GoogleAnalytics } from '@next/third-parties/google';
// import { getCookieConsent } from '@/utils/cookies';
import { getDictionary } from '@/utils/getDictionary';

type Props = ChildrenType & {
  params: Promise<{ lang: Locale }>;
};

// Layout Component
const Layout = async ({ params, children }: Props) => {
  // const consent = await getCookieConsent();
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <PublicLayout
        header={<PublicHeader lang={lang} />}
        main={<PublicMain>{children}</PublicMain>}
        footer={<PublicFooter lang={lang} />}
      />
      <CookieBanner dictionary={dictionary} lang={lang}/>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string} />
      {/* {consent === 'granted' && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string} />
      )} */}
    </>
  );
};

export default Layout;
