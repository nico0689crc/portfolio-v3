'use client'

// External library imports
import { AccordionSummary as AccordionSummaryMUI } from "@mui/material";
import type { AccordionSummaryProps } from "@mui/material";

// Internal components and types
import Iconify from "@/components/ui/Icon";
import type { ChildrenType } from "@/types";
import { useResumeContext } from "../context/useResumeContext";

// Props Type
type AccordionSummaryPropsType = ChildrenType & AccordionSummaryProps & {
  accordion_id: string;
}

const AccordionSummary = ({ children, accordion_id, ...props }: AccordionSummaryPropsType) => {
  const { expanded } = useResumeContext()
  
  return (
    <AccordionSummaryMUI
      expandIcon={<Iconify icon={expanded === accordion_id ? 'radix-icons:minus' : 'radix-icons:plus'} />}
      {...props}
    >
      <>
        {children}
      </>
    </AccordionSummaryMUI>
  )
};

export default AccordionSummary;