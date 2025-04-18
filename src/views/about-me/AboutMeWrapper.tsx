import ContainerCommon from "@/components/layouts/public/common/ContainerCommon";
import themeConfig from "@/configs/themeConfig";
import type { ChildrenType } from "@/types";
import { Box } from "@mui/material";

const AboutMeViewWrapper = ({ children }: ChildrenType) => (
  <Box sx={{ backgroundColor: "var(--mui-palette-background-paper)" }}>
    <ContainerCommon
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        py: {
          xs: '2rem', 
          [themeConfig.breakpointToChangeLayout]: '4rem',
        }
      }}
    >
      {children}
    </ContainerCommon>
  </Box>
)

export default AboutMeViewWrapper;