// External libraries
import { Grid } from '@mui/material';

// Internal components
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Configs
import themeConfig from '@/configs/themeConfig';

// Types
import type { ChildrenType } from '@/types';

const ContactWrapper = ({ children }: ChildrenType) => (
  <ContainerCommon
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: `calc(100vh - ${themeConfig.headerHeight})`,
      py: {
        xs: '2rem',
        [themeConfig.breakpointToChangeLayout]: '4rem',
      },
    }}
  >
    <Grid
      container
      spacing={5}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Grid>
  </ContainerCommon>
);

export default ContactWrapper;
