import type { ChildrenType } from '@/types';
// External Imports
import { Box, Stack } from '@mui/material';
// Internal Imports
import themeConfig from '@/configs/themeConfig';

// Component: AboutMeBody
const AboutMeBody = ({ children }: ChildrenType) => (
  <Stack
    className="about-me-body stack-container"
    role="region"
    aria-labelledby="about-me-body-title"
    sx={{
      flexDirection: {
        xs: 'column',
        [themeConfig.breakpointToChangeLayout]: 'row',
      },
      gap: {
        xs: '2rem',
        [themeConfig.breakpointToChangeLayout]: '6rem',
      },
    }}
  >
    {children}
  </Stack>
);

// Component: AboutMeBodyWrapper
const AboutMeBodyWrapper = ({ children }: ChildrenType) => (
  <Box className="about-me-body-wrapper wrapper-container">
    <AboutMeBody>{children}</AboutMeBody>
  </Box>
);

export default AboutMeBodyWrapper;
