import type { ChildrenType } from '@/types';
import { Stack } from '@mui/material';

const PublicMain = (props: ChildrenType) => (
  <Stack
    component="main"
    sx={{
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      minHeight: 'calc(100vh - 64px)',
    }}
  >
    {props.children}
  </Stack>
);

export default PublicMain;
