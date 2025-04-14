// Third-party Imports
import type { ToastPosition } from 'react-toastify';

// Type Imports
import type { Mode, PagesTypes } from '@core/types';

export type Config = {
  templateName: string;
  pages: PagesTypes;
  settingsCookieName: string;
  mode: Mode;
  layoutPadding: number;
  toastPosition: ToastPosition;
};

const themeConfig: Config = {
  templateName: 'NextJs App MUI Base',
  pages: {
    public: {
      root: '/',
    },
    authenticated: {
      root: '/dashboard',
    },
  },
  settingsCookieName: 'nextjs-app-mui-base',
  mode: 'system', // 'system', 'light', 'dark'
  layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
  toastPosition: 'top-right', // 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'
};

export default themeConfig;
