// Third-party Imports
import { getServerSession } from 'next-auth';

// Type Imports
import type { Locale } from '@/configs/i18n';
import type { ChildrenType } from '@/types';

// Component Imports
import AuthRedirect from '@/components/AuthRedirect';

export default async function AuthenticatedGuard({
  children,
  locale,
}: ChildrenType & { locale: Locale }) {
  const session = await getServerSession();

  return <>{session ? children : <AuthRedirect lang={locale} />}</>;
}
