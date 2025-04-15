'use client'

// External libraries
import { useMediaQuery, useTheme } from "@mui/material";
import { useCallback } from "react";

// Custom hooks
import { useSettings } from "@/@core/hooks/useSettings";

// UI components
import Iconify from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";

type NavbarToggleProps = {
  title: string;
}

const NavbarToggle = ({ title }: NavbarToggleProps) => {
  const { toggleNavbar } = useSettings();
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleNavbarToggle = useCallback(() => {
    toggleNavbar();
  }, [toggleNavbar]);

  return (
    <>
      {isDownLg ? (
        <IconButton 
          title={title}
          onClick={handleNavbarToggle}
        >
          <Iconify icon="ri:menu-5-line" />
        </IconButton>
      ) : null}
    </>
  );
}

export default NavbarToggle;