// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { headers } from 'next/headers';

// Config Imports
import { i18n } from '@/configs/i18n';

// Utility Imports
import { getSystemMode } from '@/@core/utils/serverHelpers';

// Component Imports
import TranslationWrapper from '@/hocs/TranslationWrapper';

// Type Imports
import type { ChildrenType, LangParamPromiseType } from '@/types';

import Providers from '@/components/Providers';
import getMetadata from '@/utils/requests/getMetadata';
import BackToTopButton from '@/components/ui/BackToTopButton';

export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = await getMetadata('default');

  return metadata[params.lang];
}

const RootLayout = async (props: ChildrenType & LangParamPromiseType) => {
  const params = await props.params;
  const { children } = props;

  // Vars
  const headersList = await headers();
  const systemMode = await getSystemMode();
  const direction = i18n.langDirection[params.lang];

  return (
    <TranslationWrapper headersList={headersList} lang={params.lang}>
      <html id="__next" lang={params.lang} dir={direction} suppressHydrationWarning>
        <body>
          <Providers>
            <InitColorSchemeScript attribute="data" defaultMode={systemMode} />
            {children}
            <BackToTopButton />
          </Providers>
        </body>
      </html>
    </TranslationWrapper>
  );
};

export default RootLayout;
