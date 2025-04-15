'use client';

// Next Imports
import { redirect, usePathname } from 'next/navigation';

// Type Imports
import type { Locale } from '@/configs/i18n';

// Config Imports
import routes from '@/configs/routes';

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n';

const AuthRedirect = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();

  // ℹ️ Bring me `lang`
  const redirectUrl = `/${lang}/login?redirectTo=${pathname}`;
  const login = `/${lang}/login`;
  const homePage = getLocalizedUrl(routes.pages.authenticated.dashboard, lang);

  return redirect(pathname === login ? login : pathname === homePage ? login : redirectUrl);
};

export default AuthRedirect;
