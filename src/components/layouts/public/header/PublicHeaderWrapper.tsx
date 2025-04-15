'use client'

// React imports
import { useState } from "react";

// Third-party library imports
import { Box } from "@mui/material";
import { useMotionValueEvent, useScroll } from "motion/react";

// Types imports
import type { ChildrenType } from "@/@core/types";
import { useSettings } from "@/@core/hooks/useSettings";

const PublicHeaderWrapper = ({ children }: ChildrenType) => {
  const { settings: { navbarOpen } } = useSettings();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSticky((prev) => {
      if ((latest > 100) !== prev) {
        return latest > 100;
      }
      return prev;
    });
  });

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        height: "70px",
        width: "100%",
        backgroundColor: "var(--mui-palette-background-default)",
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease-in-out",
        ...(isSticky && !navbarOpen && {
          position: "sticky",
          inset: "0 0 0 0",
          animation: "stickHeader 0.5s forwards",
        }),
        "@keyframes stickHeader": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      })}
      component="header"
    >
      {children}
    </Box>
  );
};

export default PublicHeaderWrapper;