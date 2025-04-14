'use client'

import { useSettings } from "@/@core/hooks/useSettings";
import Iconify from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import { useCallback } from "react";

const ThemeModeToggle = () => {
  const { settings, updateSettings } = useSettings()

  const handleThemeModeToggle = useCallback(() => {
    updateSettings({
      mode: settings.mode === "dark" ? "light" : "dark",
    })
  }, [settings.mode, updateSettings])

  return (
    <IconButton 
      title="Change Mode" 
      onClick={handleThemeModeToggle}
    >
      <Iconify icon={settings.mode === "dark" ? "radix-icons:sun" : "radix-icons:moon"} />
    </IconButton>
  )
}

export default ThemeModeToggle;