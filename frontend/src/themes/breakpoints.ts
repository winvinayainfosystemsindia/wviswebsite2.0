import type { BreakpointsOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 1920,
  },
}
