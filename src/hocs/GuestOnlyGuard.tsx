// Next Imports
import { redirect } from 'next/navigation';

// Third-party Imports
import { getServerSession } from 'next-auth';

// Type Imports
import type { ChildrenType } from '@/types';
import type { Locale } from '@/configs/i18n';

// Config Imports
import routes from '@/configs/routes';

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n';

const GuestOnlyGuard = async ({ children, lang }: ChildrenType & { lang: Locale }) => {
  const session = await getServerSession();

  if (session) {
    redirect(getLocalizedUrl(routes.pages.authenticated.dashboard, lang));
  }

  return <>{children}</>;
};

export default GuestOnlyGuard;
