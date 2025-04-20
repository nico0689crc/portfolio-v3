'use client'

// External library imports
import { AccordionSummary as AccordionSummaryMUI, Typography } from "@mui/material";
import type { AccordionSummaryProps } from "@mui/material";

// Internal components and types
import Iconify from "@/components/ui/Icon";
import type { ChildrenType } from "@/types";
import { useResumeContext } from "../context/useResumeContext";
import { useBackToTop } from "minimal-shared/hooks";

// Props Type
type AccordionSummaryPropsType = ChildrenType & AccordionSummaryProps & {
  accordion_id: string;
}

const AccordionSummary = ({ children, accordion_id, ...props }: AccordionSummaryPropsType) => {
  const { expanded } = useResumeContext()
  const { onBackToTop } = useBackToTop(0)
  
  return (
    <AccordionSummaryMUI
      expandIcon={<Iconify icon={expanded === accordion_id ? 'radix-icons:minus' : 'radix-icons:plus'} />}
      onClick={onBackToTop}
      {...props}
    >
      <Typography variant="h5" component="h2">
        {children}
      </Typography>
    </AccordionSummaryMUI>
  )
};

export default AccordionSummary;