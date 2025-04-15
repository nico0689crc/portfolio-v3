'use client'

// External imports
import { Stack } from "@mui/material";

// Types
import type { ChildrenType } from "@/@core/types";

type PublicSocialWrapperProps = ChildrenType;

const PublicSocialWrapper = ({ children }: PublicSocialWrapperProps) => (
  <Stack
    sx={(theme) => ({
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1,
      [theme.breakpoints.up("lg")]: {
        flexGrow: 0,
      },
      gap: 3,
    })}
  >
    {children}
  </Stack>
);

export default PublicSocialWrapper;