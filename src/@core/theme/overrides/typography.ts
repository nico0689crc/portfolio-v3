// MUI Imports
import type { Theme } from '@mui/material/styles';

const typography: Theme['components'] = {
  MuiTypography: {
    styleOverrides: {
      root: {
        variants: [
          ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'subtitle1', 'subtitle2'].map((variant) => ({
            props: { variant },
            style: ({ theme }: { theme: Theme }) => ({
              color: variant === 'body2' || variant === 'subtitle2' ? 'var(--mui-palette-text-secondary)' : 'var(--mui-palette-text-primary)',
              fontSize: {
                h1: '2rem',
                h2: '1.75rem',
                h3: '1.5rem',
                h4: '1.25rem',
                h5: '1.125rem',
                h6: '1rem',
                body1: '0.875rem',
                body2: '0.75rem',
                subtitle1: '1.1rem',
                subtitle2: '1rem',
              }[variant],
              [theme.breakpoints.up('sm')]: {
                fontSize: {
                  h1: '3rem',
                  h2: '2.5rem',
                  h3: '2rem',
                  h4: '1.75rem',
                  h5: '1.5rem',
                  h6: '1.25rem',
                  body1: '1rem',
                  body2: '0.875rem',
                  subtitle1: '1.125rem',
                  subtitle2: '1.1rem',
                }[variant],
              },
              [theme.breakpoints.up('md')]: {
                fontSize: {
                  h1: '4rem',
                  h2: '3.5rem',
                  h3: '3rem',
                  h4: '2.5rem',
                  h5: '2rem',
                  h6: '1.75rem',
                  body1: '1.125rem',
                  body2: '1rem',
                  subtitle1: '1.25rem',
                  subtitle2: '1.125rem',
                }[variant],
              },
              "& mark": {
                backgroundColor: 'var(--mui-palette-primary-main)',
                color: 'var(--mui-palette-primary-contrastText)',
                paddingInline: '0.2rem',
              }
            }),
          })),
        ],
      },
      gutterBottom: ({ theme }) => ({
        marginBottom: theme.spacing(2),
      }),
    },
  },
};

export default typography;
