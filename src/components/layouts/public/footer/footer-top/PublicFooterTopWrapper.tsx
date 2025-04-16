// React imports
import React from "react";

// MUI imports
import { Stack } from "@mui/material";

// Config imports
import themeConfig from "@/configs/themeConfig";

// Types imports
import type { ChildrenType } from "@/@core/types";

type PublicFooterTopWrapperProps = ChildrenType;

const PublicFooterTopWrapper = async ({ children }: PublicFooterTopWrapperProps) => (
  <Stack
    direction={{
      xs: "column",
      [themeConfig.breakpointToChangeLayout]: "row",
    }}
    sx={{
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 10,
    }}
  >
    {children}
  </Stack>
);

export default PublicFooterTopWrapper;
