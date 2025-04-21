'use client';

// React imports
import { useCallback, useMemo, useState } from 'react';

// Context imports
import { ResumeContext } from './ResumeContext';

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState<string | false>('it-experience');

  const handleChangeExpanded = useCallback(
    (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    },
    []
  );

  const value = useMemo(
    () => ({
      expanded,
      handleChangeExpanded,
    }),
    [expanded, handleChangeExpanded]
  );

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};
