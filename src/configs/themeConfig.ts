// Third-party Imports
import type { ToastPosition } from 'react-toastify';

// Type Imports
import type { Mode } from '@/types';
import type { Breakpoint } from '@mui/material';

export type Config = {
  templateName: string;
  settingsCookieName: string;
  mode: Mode;
  layoutPadding: number;
  headerHeight: string;
  toastPosition: ToastPosition;
  breakpointToChangeLayout: Breakpoint;
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
  settingsCookieName: 'nicolas-fernandez-portfolio-settings',
  mode: 'dark', // 'system', 'light', 'dark'
  headerHeight: '70px',
  layoutPadding: 24,
  breakpointToChangeLayout: 'lg',
  compactContentWidth: {
    xs: '100%',
    sm: '840px',
    md: '1020px',
    lg: '1260px',
    xl: '1340px',
    xxl: '1620px',
  },
  toastPosition: 'top-right',
};

export default themeConfig;
