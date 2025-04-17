'use client';

import { useSettings } from '@/@core/hooks/useSettings';
import Iconify from '@/components/ui/Icon';
import IconButton from '@/components/ui/IconButton';
import { useCallback } from 'react';

type ThemeModeToggleProps = {
  title: string;
};

const ThemeModeToggle = ({ title }: ThemeModeToggleProps) => {
  const { settings, updateSettings } = useSettings();

  const handleThemeModeToggle = useCallback(() => {
    updateSettings({
      mode: settings.mode === 'dark' ? 'light' : 'dark',
    });
  }, [settings.mode, updateSettings]);

  return (
    <IconButton title={title} onClick={handleThemeModeToggle}>
      <Iconify icon={settings.mode === 'dark' ? 'radix-icons:sun' : 'radix-icons:moon'} />
    </IconButton>
  );
};

export default ThemeModeToggle;
