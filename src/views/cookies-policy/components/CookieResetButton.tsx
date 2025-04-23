'use client';

import type { ChildrenType } from "@/types";
import { Button } from "@mui/material";

const CookieResetButton = ({ children }: ChildrenType) => {
  const handleCookieReset = () => {
    document.cookie = 'cookie_consent=; Max-Age=0; path=/; SameSite=Lax';
    window.location.reload();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCookieReset}>
      {children}
    </Button>
  )
}

export default CookieResetButton;