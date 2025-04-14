// MUI Imports
import type { Theme } from '@mui/material';

const drawer: Theme['components'] = {
  MuiDrawer: {
    defaultProps: {},
    styleOverrides: {
      paper: {
        boxShadow: 'var(--mui-customShadows-lg)',
      },
    },
  },
};

export default drawer;
