'use client'

import React from "react"; // React Imports

// External Imports
import AccordionMUI from "@mui/material/Accordion";
import type { AccordionProps } from "@mui/material/Accordion";

// Internal Imports
import type { ChildrenType } from "@/types";
import { useResumeContext } from "../context/useResumeContext";

// Types
type AccordionPropsType = ChildrenType & AccordionProps & {
  accordion_id: string;
};

const Accordion = ({ children, accordion_id, ...props }: AccordionPropsType) => {
  const { expanded, handleChangeExpanded } = useResumeContext();

  return (
    <AccordionMUI
      expanded={expanded === accordion_id}
      onChange={handleChangeExpanded(accordion_id)}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&.Mui-expanded": {
          margin: 0,
          boxShadow: "none",
        },
      }}
      {...props}
    >
      {children}
    </AccordionMUI>
  );
};

export default Accordion;