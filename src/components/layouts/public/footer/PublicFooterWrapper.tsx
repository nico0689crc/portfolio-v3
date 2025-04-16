// External libraries
import { Box } from "@mui/material";

// Local components
import ContainerCommon from "@/components/layouts/public/common/ContainerCommon";

// Types
import type { ChildrenType } from "@/@core/types";

type PublicFooterWrapperProps = ChildrenType;

// Component definition
const PublicFooterWrapper = async ({ children }: PublicFooterWrapperProps) => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "var(--mui-palette-customColors-footerBg)",
      padding: "2rem 0",
    }}
  >
    <ContainerCommon
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {children}
    </ContainerCommon>
  </Box>
);

export default PublicFooterWrapper;