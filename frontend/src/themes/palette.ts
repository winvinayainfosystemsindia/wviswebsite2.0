import type { PaletteMode, PaletteOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
    /** Fixed dark brand surface used where a section is deliberately kept
     * dark regardless of the active light/dark mode (e.g. the footer). */
    inverse: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
    inverse?: PaletteOptions['primary']
  }
}

// Fixed dark brand surface, identical in both modes by design.
const inverseSurface = {
  main: '#241A10',
  light: '#3A2A1A',
  dark: '#160F09',
  contrastText: '#F5EEE4',
}

// Palette derived from the WinVinaya Infosystems logo: flame orange,
// leaf green, earthy brown, and the wordmark's warm gray.
const lightPalette: PaletteOptions = {
  mode: 'light',
  // `main` shades are tuned to clear WCAG AA (4.5:1) as white-on-solid
  // buttons and as text-on-white/cream — the vivid logo tones (flame
  // orange, leaf green) read beautifully but fail contrast at that size,
  // so they're kept as `light` for decorative use (washes, dark-surface
  // accents, large graphics) rather than for text or button fills.
  primary: {
    main: '#A85D0A',
    light: '#F7941D',
    dark: '#8F4E08',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#7A4522',
    light: '#96602F',
    dark: '#5C3216',
    contrastText: '#FFFFFF',
  },
  accent: {
    main: '#548021',
    light: '#8DC63F',
    dark: '#3F6614',
    contrastText: '#FFFFFF',
  },
  success: { main: '#33681A', contrastText: '#FFFFFF' },
  warning: { main: '#7A6000', contrastText: '#FFFFFF' },
  error: { main: '#C81E1E', contrastText: '#FFFFFF' },
  info: { main: '#336E94', contrastText: '#FFFFFF' },
  background: { default: '#FFFBF5', paper: '#FFFFFF' },
  text: { primary: '#231F1C', secondary: '#58595B', disabled: '#A7A8AA' },
  divider: '#E9E3D9',
  inverse: inverseSurface,
}

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#F7941D',
    light: '#FFB84D',
    dark: '#D9720A',
    contrastText: '#1A1512',
  },
  secondary: {
    main: '#C99A6B',
    light: '#DCB68C',
    dark: '#96602F',
    contrastText: '#1A1512',
  },
  accent: {
    main: '#8DC63F',
    light: '#A9D66C',
    dark: '#6FA82E',
    contrastText: '#1A1512',
  },
  success: { main: '#8DC63F', contrastText: '#1A1512' },
  warning: { main: '#F59E0B', contrastText: '#3A1D03' },
  error: { main: '#F87171', contrastText: '#450A0A' },
  info: { main: '#7DB8DC', contrastText: '#1A1512' },
  background: { default: '#1A1512', paper: '#241D18' },
  text: { primary: '#F5F1EC', secondary: '#C9C4BC', disabled: '#8A8580' },
  divider: 'rgba(233, 227, 217, 0.12)',
  inverse: inverseSurface,
}

export const getPalette = (mode: PaletteMode): PaletteOptions =>
  mode === 'dark' ? darkPalette : lightPalette
