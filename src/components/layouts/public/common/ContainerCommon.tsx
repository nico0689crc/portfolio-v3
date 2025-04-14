import React from 'react'
// External imports
import type { BoxProps } from '@mui/material' // Type for Box component props
import { Box } from '@mui/material' // Box component from Material-UI

// Internal imports
import themeConfig from '@/configs/themeConfig' // Layout configuration
import type { ChildrenType } from '@core/types' // Type for children prop

/**
 * Props for the ContainerCommon component.
 * Extends Material-UI's BoxProps and includes children and an optional component prop.
 */
type ContainerCommonProps = BoxProps & ChildrenType & { component?: React.ElementType }

/**
 * ContainerCommon Component
 * A reusable container component that wraps its children with consistent styling.
 *
 * @param {ContainerCommonProps} props - Props for the component.
 * @returns {React.ReactNode} A styled container wrapping the children.
 */
const ContainerCommon = ({ children, ...props }: ContainerCommonProps): React.ReactNode => {
  const { sx, ...restProps } = props

  return (
    <Box
      sx={{
        width: '100%',
        px: '0.75rem',
        marginInline: 'auto',
        maxWidth: ({
          xs: themeConfig.compactContentWidth.xs,
          sm: themeConfig.compactContentWidth.sm,
          md: themeConfig.compactContentWidth.md,
          lg: themeConfig.compactContentWidth.lg,
          xl: themeConfig.compactContentWidth.xl,
          xxl: themeConfig.compactContentWidth.xxl
        }),
        ...sx
      }}
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default ContainerCommon
