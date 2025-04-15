import type { ChildrenType } from "@/@core/types";
import type { LinkProps } from "@mui/material";

import { Link, Tooltip } from "@mui/material";

type IconButonProps = ChildrenType & LinkProps & {
  title: string;
};

const IconButon = ({children, title, ...props}: IconButonProps) => {
  const { sx, ...restProps } = props
  
  return (
    <Tooltip title={title} arrow>
      <Link 
        sx={{
          display: "flex",
          cursor: "pointer",
          color: "var(--mui-palette-text-secondary)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            scale: 1.1,
            color: "var(--mui-palette-text-primary)",
          },
          ...sx
        }}
        {...restProps}
      >
        {children}
      </Link>
    </Tooltip>
  )
}

export default IconButon;
