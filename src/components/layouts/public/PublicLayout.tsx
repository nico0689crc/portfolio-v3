import type { ReactNode } from "react";

import { Stack } from "@mui/material";

type PublicLayoutProps = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const PublicLayout = (props: PublicLayoutProps) => {
  const { header, main, footer } = props

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      {header}
      {main}
      {footer}
    </Stack>
  )
}

export default PublicLayout;