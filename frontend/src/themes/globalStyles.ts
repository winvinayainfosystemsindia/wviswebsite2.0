import { alpha } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

export const getGlobalStyles = (theme: Theme) => {
  const trackColor =
    theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.background.paper
  const thumbColor = alpha(theme.palette.text.secondary, 0.35)
  const thumbHoverColor = alpha(theme.palette.accent.main, 0.6)

  return {
    '*': {
      boxSizing: 'border-box' as const,
      scrollbarWidth: 'thin' as const,
      scrollbarColor: `${thumbColor} transparent`,
    },
    html: {
      height: '100%',
      WebkitTextSizeAdjust: '100%',
      '@media (prefers-reduced-motion: no-preference)': {
        scrollBehavior: 'smooth' as const,
      },
    },
    body: {
      height: '100%',
      margin: 0,
      overflowX: 'hidden' as const,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility' as const,
    },
    '#root': {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
    },
    img: { maxWidth: '100%', display: 'block' as const },
    a: { textDecorationColor: alpha(theme.palette.text.primary, 0.3) },
    '::selection': {
      backgroundColor: theme.palette.accent.main,
      color: theme.palette.accent.contrastText,
    },
    ':focus-visible': {
      outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
      outlineOffset: '2px',
    },
    '*::-webkit-scrollbar': {
      width: 12,
      height: 12,
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor: trackColor,
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: thumbColor,
      borderRadius: 999,
      border: `3px solid ${trackColor}`,
      backgroundClip: 'padding-box' as const,
    },
    '*::-webkit-scrollbar-thumb:hover': {
      backgroundColor: thumbHoverColor,
    },
    '@media (prefers-reduced-motion: reduce)': {
      '*, *::before, *::after': {
        animationDuration: '0.001ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.001ms !important',
        scrollBehavior: 'auto !important',
      },
    },
  }
}
