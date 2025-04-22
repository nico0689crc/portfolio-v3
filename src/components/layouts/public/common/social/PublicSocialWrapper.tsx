// External imports
import { Stack } from '@mui/material';

// Types
import type { ChildrenType } from '@/types';

type PublicSocialWrapperProps = ChildrenType;

const PublicSocialWrapper = ({ children }: PublicSocialWrapperProps) => (
  <Stack
    sx={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexGrow: 1,
      gap: 3,
      '@media (min-width: 600px)': {
        flexGrow: 0,
      },
    }}
    className="PublicSocialWrapper"
  >
    {children}
  </Stack>
);

export default PublicSocialWrapper;
