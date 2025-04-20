'use client'

// React imports
import { useCallback, useRef, useState } from "react";

// Context imports
import { ResumeContext } from "./ResumeContext";

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState<string | false>("it-experience");
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleChangeExpanded = useCallback(
    (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    },
    []
  );

  const handleScrollToAccordion =  useCallback((index: string) => {
    const accordionIndex = accordionRefs.current.findIndex((ref) => ref?.id === `panel-${index}-header`);
    const accordionSummary = accordionRefs.current[accordionIndex];
    if (accordionSummary) {
      accordionSummary.scrollTo({ behavior: 'smooth', top: accordionSummary.offsetTop });
    }
  }, []);

  return (
    <ResumeContext.Provider value={{ expanded, handleChangeExpanded, accordionRefs: accordionRefs.current, handleScrollToAccordion }}>
      {children}
    </ResumeContext.Provider>
  );
};