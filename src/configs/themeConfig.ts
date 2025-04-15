// Third-party Imports
import type { ToastPosition } from 'react-toastify';

// Type Imports
import type { Mode } from '@core/types';

export type Config = {
  templateName: string;
  settingsCookieName: string;
  mode: Mode;
  layoutPadding: number;
  toastPosition: ToastPosition;
  compactContentWidth: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
};

const themeConfig: Config = {
  templateName: 'NextJs App MUI Base',
  settingsCookieName: 'nextjs-app-mui-base',
  mode: 'dark', // 'system', 'light', 'dark'
  layoutPadding: 24,
  compactContentWidth: {
    xs: '100%',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px',
  },
  toastPosition: 'top-right',
};

export default themeConfig;
