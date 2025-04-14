// Type Imports
import type { ChildrenType } from '@core/types';

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider';
import { SettingsProvider } from '@core/contexts/settingsContext';
import ThemeProvider from '@/components/theme';
import ReduxProvider from '@/redux-store/ReduxProvider';

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers';

type Props = ChildrenType;

const Providers = async (props: Props) => {
  // Props
  const { children } = props;

  // Vars
  const mode = await getMode();
  const settingsCookie = await getSettingsFromCookie();
  const systemMode = await getSystemMode();

  return (
    <NextAuthProvider basePath={process.env.NEXTAUTH_BASEPATH}>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemeProvider systemMode={systemMode}>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </SettingsProvider>
    </NextAuthProvider>
  );
};

export default Providers;
