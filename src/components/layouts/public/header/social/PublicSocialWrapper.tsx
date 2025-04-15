'use client'

// External imports
import { Stack } from "@mui/material";

import themeConfig from "@/configs/themeConfig";

// Types
import type { ChildrenType } from "@/@core/types";

type PublicSocialWrapperProps = ChildrenType;

const PublicSocialWrapper = ({ children }: PublicSocialWrapperProps) => (
  <Stack
    sx={(theme) => ({
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      [theme.breakpoints.up(themeConfig.breakpointToChangeLayout)]: {
        justifyContent: "flex-end",
        flexGrow: 0,
        mr: 5,
      },
      gap: 3,
    })}
  >
    {children}
  </Stack>
);

export default PublicSocialWrapper;