'use client'

// Hooks
import { useSettings } from "@/@core/hooks/useSettings";

// Types
import type { ChildrenType } from "@/@core/types";

// Components
import Iconify from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import themeConfig from "@/configs/themeConfig";

// Material-UI Components
import { Drawer, List, useMediaQuery, useTheme } from "@mui/material";

/**
 * PublicNavigationList Component
 * A navigation list component for public layouts.
 * 
 * @param {ChildrenType} props - The children to render inside the navigation list.
 */
const PublicNavigationList = ({ children }: ChildrenType) => {
  const { settings: { navbarOpen }, toggleNavbar } = useSettings();
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.down(themeConfig.breakpointToChangeLayout));

  const content = isDownLg ? (
    <Drawer 
      open={navbarOpen} 
      anchor="right" 
      variant="temporary" 
      onClose={toggleNavbar}
    >
      <List 
        component="nav" 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100vw",
          height: "100%"
        }}
      >
        <IconButton 
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 20,
          }} 
          onClick={toggleNavbar}
          title="Close Menu"
        >
          <Iconify icon="ri:close-large-fill" />
        </IconButton>
        {children}
      </List>
    </Drawer>
  ) : (
    <List 
      component="nav" 
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexGrow: 1,
        gap: 5,
        transition: "inherit",
        transform: "inherit",
      }}
    >
      {children}
    </List>
  );

  return content;
};

export default PublicNavigationList;
