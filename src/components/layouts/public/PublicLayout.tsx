// Types
import type { ReactNode } from 'react';

// External Libraries
import { Stack } from '@mui/material';

type PublicLayoutProps = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const PublicLayout = ({ header, main, footer }: PublicLayoutProps) => (
  <Stack sx={{ minHeight: '100vh' }}>
    {header}
    {main}
    {footer}
  </Stack>
);

export default PublicLayout;
