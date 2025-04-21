// External libraries
import { Box } from '@mui/material';

// Internal configs
import themeConfig from '@/configs/themeConfig';

// Internal components
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Types
import type { ChildrenType } from '@/types';

const FaqSectionWrapper = ({ children }: ChildrenType) => (
  <Box
    sx={{
      backgroundColor: 'var(--mui-palette-background-paper)',
    }}
  >
    <ContainerCommon
      id="faq"
      component="section"
      className="faq-section"
      role="region"
      aria-labelledby="faq-header-title"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        py: {
          xs: '4rem',
          [themeConfig.breakpointToChangeLayout]: '8rem',
        },
      }}
    >
      {children}
    </ContainerCommon>
  </Box>
);

export default FaqSectionWrapper;
