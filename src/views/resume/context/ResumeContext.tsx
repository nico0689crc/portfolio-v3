'use client'

import { createContext } from "react";

export type ResumeContextType = {
  expanded: string | false;
  handleChangeExpanded: (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => void;
};

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);