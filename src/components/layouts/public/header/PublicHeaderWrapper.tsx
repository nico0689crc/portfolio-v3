'use client'

import { useState } from "react";

import { Box } from "@mui/material";
import { useMotionValueEvent, useScroll } from "motion/react"

import type { ChildrenType } from "@/@core/types";

const PublicHeaderWrapper = ({ children }: ChildrenType) => {

  const [isSticky, setIsSticky] = useState<boolean>(false)
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
        width: "100%",
        color: "white",
        padding: "20px",
        zIndex: 1000,
        borderBottom: "1px solid",
        borderBottomColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : theme.palette.grey[300],
        backgroundColor: "var(--mui-palette-background-default)",
        transition: "all 0.3s ease-in-out",
        ...(isSticky && {
          position: "sticky",
          inset: "0 0 0 0",
          animation: "stickHeader 0.5s forwards",
        }),
        "@keyframes stickHeader": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1
          },
        },
      })}
      component="header"
    >
      {children}
    </Box>
  )
}

export default PublicHeaderWrapper;