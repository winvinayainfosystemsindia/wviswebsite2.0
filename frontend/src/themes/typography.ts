import type { CSSProperties } from 'react'
import type { TypographyVariantsOptions } from '@mui/material/styles'

export const FONT_HEADING = "'Lexend', 'Helvetica Neue', Arial, sans-serif"
export const FONT_BODY = "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display: CSSProperties
    eyebrow: CSSProperties
  }
  interface TypographyVariantsOptions {
    display?: CSSProperties
    eyebrow?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true
    eyebrow: true
  }
}

export const typography: TypographyVariantsOptions = {
  fontFamily: FONT_BODY,
  htmlFontSize: 16,
  display: {
    fontFamily: FONT_HEADING,
    fontWeight: 700,
    fontSize: 'clamp(2.75rem, 2rem + 3vw, 4.5rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  h1: {
    fontFamily: FONT_HEADING,
    fontWeight: 700,
    fontSize: 'clamp(2.25rem, 1.9rem + 1.5vw, 3.5rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  h2: {
    fontFamily: FONT_HEADING,
    fontWeight: 700,
    fontSize: 'clamp(1.875rem, 1.6rem + 1vw, 2.75rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: 'clamp(1.5rem, 1.35rem + 0.6vw, 2.125rem)',
    lineHeight: 1.25,
  },
  h4: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.3,
  },
  h5: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.35,
  },
  h6: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
  },
  subtitle1: {
    fontFamily: FONT_BODY,
    fontWeight: 500,
    fontSize: '1.125rem',
    lineHeight: 1.5,
  },
  subtitle2: {
    fontFamily: FONT_BODY,
    fontWeight: 500,
    fontSize: '0.9375rem',
    lineHeight: 1.5,
  },
  body1: {
    fontFamily: FONT_BODY,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: FONT_BODY,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    textTransform: 'none',
    letterSpacing: 0,
  },
  caption: {
    fontFamily: FONT_BODY,
    fontWeight: 400,
    fontSize: '0.8125rem',
    lineHeight: 1.45,
  },
  overline: {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  eyebrow: {
    fontFamily: FONT_BODY,
    fontWeight: 700,
    fontSize: '0.8125rem',
    lineHeight: 1.4,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
}
