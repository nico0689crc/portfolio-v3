// Type Imports
import type { ChildrenType } from '@/types';
import type { Locale } from '@/configs/i18n';

// HOC Imports
import GuestOnlyRoute from '@/hocs/GuestOnlyGuard';

const Layout = async (props: ChildrenType & { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;

  const { children } = props;

  return <GuestOnlyRoute lang={params.lang}>{children}</GuestOnlyRoute>;
};

export default Layout;
