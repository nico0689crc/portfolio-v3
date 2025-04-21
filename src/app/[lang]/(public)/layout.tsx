// Types
import type { Locale } from '@/configs/i18n';
import type { ChildrenType } from '@/types';

// Layout Components
import PublicLayout from '@/components/layouts/public/PublicLayout';
import PublicFooter from '@/components/layouts/public/footer/PublicFooter';
import PublicHeader from '@/components/layouts/public/header/PublicHeader';
import PublicMain from '@/components/layouts/public/main/PublicMain';

type Props = ChildrenType & {
  params: Promise<{ lang: Locale }>;
};

// Layout Component
const Layout = async ({ params, children }: Props) => {
  const { lang } = await params;

  return (
    <PublicLayout
      header={<PublicHeader lang={lang} />}
      main={<PublicMain>{children}</PublicMain>}
      footer={<PublicFooter lang={lang} />}
    />
  );
};

export default Layout;
