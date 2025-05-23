// React and Next.js imports
import React from 'react';

// MUI imports
import { Stack, Typography } from '@mui/material';

// Config imports
import themeConfig from '@/configs/themeConfig';
import type { Locale } from '@/configs/i18n';

// Utils imports
import { getDictionary } from '@/utils/getDictionary';

type PublicFooterTopDescriptionProps = {
  lang: Locale;
};

const PublicFooterTopDescription = async ({ lang }: PublicFooterTopDescriptionProps) => {
  const dictionary = await getDictionary(lang);

  return (
    <Stack
      component="section"
      sx={{
        justifyContent: 'center',
        alignItems: {
          xs: 'center',
          [themeConfig.breakpointToChangeLayout]: 'flex-start',
        },
        maxWidth: {
          xs: '100%',
          [themeConfig.breakpointToChangeLayout]: '20rem',
        },
        textAlign: {
          xs: 'center',
          [themeConfig.breakpointToChangeLayout]: 'left',
        },
        gap: 1,
      }}
    >
      <Typography
        sx={{
          textTransform: 'uppercase',
          color: 'primary.main',
        }}
        variant="h6"
      >
        Nicolas Fernandez
      </Typography>
      <Typography
        sx={{
          color: 'white',
          maxWidth: {
            xs: '30rem',
            [themeConfig.breakpointToChangeLayout]: '100%',
          },
        }}
        dangerouslySetInnerHTML={{ __html: dictionary.footer.description }}
      />
    </Stack>
  );
};

export default PublicFooterTopDescription;
