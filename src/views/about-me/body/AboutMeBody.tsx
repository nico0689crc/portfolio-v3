import type { ChildrenType } from "@/types";
// External Imports
import { Stack } from "@mui/material";
// Internal Imports
import themeConfig from "@/configs/themeConfig";

// Component: AboutMeBody
const AboutMeBody = ({ children }: ChildrenType) => (
  <Stack
    className="about-me-body stack-container"
    role="region"
    aria-labelledby="about-me-body-title"
    sx={{
      flexDirection: {
        xs: 'column',
      },
      gap: {
        xs: '2rem',
        [themeConfig.breakpointToChangeLayout]: '8rem',
      },
    }}
  >
    {children}
  </Stack>
);

export default AboutMeBody;