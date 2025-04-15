// MUI Imports
import type { Theme } from '@mui/material/styles';

const list: Theme['components'] = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
      }
    }
  }
};

export default list;
