'use client';

// External imports
import { Stack } from '@mui/material';

import themeConfig from '@/configs/themeConfig';

// Types
import type { ChildrenType } from '@/types';

type PublicSocialWrapperProps = ChildrenType;

const PublicSocialWrapper = ({ children }: PublicSocialWrapperProps) => (
  <Stack
    sx={(theme) => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexGrow: 1,
      [theme.breakpoints.up(themeConfig.breakpointToChangeLayout)]: {
        flexGrow: 0,
      },
      gap: 3,
    })}
    className='PublicSocialWrapper'
  >
    {children}
  </Stack>
);

export default PublicSocialWrapper;
