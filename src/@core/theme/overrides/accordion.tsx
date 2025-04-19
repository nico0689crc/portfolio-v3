// MUI Imports
import type { Theme } from '@mui/material/styles';

const accordion: Theme['components'] = {
  MuiAccordion: {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create(['margin', 'border-radius', 'box-shadow']),
        boxShadow: 'var(--mui-customShadows-xs)',
        '&:not(.Mui-expanded):has(+ .Mui-expanded)': {

        },
        '&.Mui-expanded': {

          boxShadow: 'var(--mui-customShadows-md)',
          margin: theme.spacing(2, 0),
          '& + .MuiAccordion-root': {

            '&:before': {
              opacity: 0,
            },
          },
        },
      }),
    },
  },
  MuiAccordionSummary: {
    defaultProps: {
      expandIcon: <i className="ri-arrow-down-s-line" />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 5),
        borderRadius: 0,
        color: 'var(--mui-palette-text-primary)',
        '&.Mui-expanded': {
          minHeight: 48,
        },
        '& .MuiTypography-root': {
          color: 'inherit',
          fontWeight: theme.typography.fontWeightMedium,
        },
      }),
      content: {
        margin: '0 !important',
      },
      expandIconWrapper: {
        color: 'var(--mui-palette-text-primary)',
        fontSize: '1.25rem',
        '& i, & svg': {
          fontSize: 'inherit',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(0, 5, 5),
        '& .MuiTypography-root': {
          color: 'var(--mui-palette-text-primary)',
        },
      }),
    },
  },
};

export default accordion;
