'use client';

// React Imports
import type { ReactNode } from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

// Type Imports
import type { Mode } from '@/types';

// Config Imports
import themeConfig from '@/configs/themeConfig';
import primaryColorConfig from '@/configs/primaryColorConfig';

// Hook Imports
import { useObjectCookie } from '@/@core/hooks/useObjectCookie';

// Settings type
export type Settings = {
  mode?: Mode;
  primaryColor?: string;
  navbarOpen: boolean;
};

// UpdateSettingsOptions type
type UpdateSettingsOptions = {
  updateCookie?: boolean;
};

// SettingsContextProps type
type SettingsContextProps = {
  settings: Settings;
  updateSettings: (settings: Partial<Settings>, options?: UpdateSettingsOptions) => void;
  isSettingsChanged: boolean;
  toggleNavbar: () => void;
};

type Props = {
  children: ReactNode;
  settingsCookie: Settings | null;
  mode?: Mode;
};

// Initial Settings Context
export const SettingsContext = createContext<SettingsContextProps | null>(null);

// Initial Settings
const initialSettings: Settings = {
  mode: themeConfig.mode,
  primaryColor: primaryColorConfig[0].main,
  navbarOpen: false,
};

// Settings Provider
export const SettingsProvider = (props: Props) => {
  const updatedInitialSettings = useMemo(
    () => ({
      ...initialSettings,
      mode: props.mode || themeConfig.mode,
    }),
    [props.mode]
  );

  // Cookies
  const [settingsCookie, updateSettingsCookie] = useObjectCookie<Settings>(
    themeConfig.settingsCookieName,
    JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings
  );

  // State
  const [_settingsState, _updateSettingsState] = useState<Settings>(
    JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings
  );

  const updateSettings = useCallback(
    (settings: Partial<Settings>, options?: UpdateSettingsOptions) => {
      const { updateCookie = true } = options || {};

      _updateSettingsState((prev) => {
        const newSettings = { ...prev, ...settings };

        // Update cookie if needed
        if (updateCookie) updateSettingsCookie(newSettings);

        return newSettings;
      });
    },
    [updateSettingsCookie]
  );

  const toggleNavbar = useCallback(() => {
    updateSettings({ navbarOpen: !_settingsState.navbarOpen });
  }, [_settingsState.navbarOpen, updateSettings]);

  const isSettingsChanged = useMemo(
    () => JSON.stringify(initialSettings) !== JSON.stringify(_settingsState),

    [_settingsState]
  );

  return (
    <SettingsContext.Provider
      value={{
        settings: _settingsState,
        updateSettings,
        isSettingsChanged,
        toggleNavbar,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};
