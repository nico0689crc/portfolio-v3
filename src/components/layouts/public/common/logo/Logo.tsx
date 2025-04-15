// External imports
import { Stack, Tooltip, Typography } from "@mui/material";
import Link from "next/link";

// Internal imports
import routes from "@/configs/routes";

const Logo = () => (
  <Tooltip
    title="Nicolás Fernández"
    placement="right"
  >
    <Stack
      component={Link}
      href={routes.pages.public.home}
      sx={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "var(--mui-palette-text-secondary)",
        borderStyle: "solid",
        borderRadius: "50%",
        px: "0.5rem",
        py: "0.25rem",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
        "& p": {
          fontSize: "1.5rem",
          color: "var(--mui-palette-text-primary)",
        },
        ":hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>N</Typography>
      <Typography sx={{ fontWeight: 100 }}>F</Typography>
    </Stack>
  </Tooltip>
);

export default Logo;
