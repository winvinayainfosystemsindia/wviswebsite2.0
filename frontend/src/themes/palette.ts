import type { PaletteMode, PaletteOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#0F172A',
    light: '#334155',
    dark: '#020617',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#334155',
    light: '#475569',
    dark: '#1E293B',
    contrastText: '#FFFFFF',
  },
  accent: {
    main: '#0369A1',
    light: '#0EA5E9',
    dark: '#075985',
    contrastText: '#FFFFFF',
  },
  success: { main: '#16A34A', contrastText: '#FFFFFF' },
  warning: { main: '#D97706', contrastText: '#FFFFFF' },
  error: { main: '#DC2626', contrastText: '#FFFFFF' },
  info: { main: '#0369A1', contrastText: '#FFFFFF' },
  background: { default: '#F8FAFC', paper: '#FFFFFF' },
  text: { primary: '#020617', secondary: '#475569', disabled: '#94A3B8' },
  divider: '#E2E8F0',
}

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#38BDF8',
    light: '#7DD3FC',
    dark: '#0369A1',
    contrastText: '#0B1220',
  },
  secondary: {
    main: '#94A3B8',
    light: '#CBD5E1',
    dark: '#64748B',
    contrastText: '#0B1220',
  },
  accent: {
    main: '#38BDF8',
    light: '#7DD3FC',
    dark: '#0284C7',
    contrastText: '#0B1220',
  },
  success: { main: '#22C55E', contrastText: '#052E14' },
  warning: { main: '#F59E0B', contrastText: '#3A1D03' },
  error: { main: '#F87171', contrastText: '#450A0A' },
  info: { main: '#38BDF8', contrastText: '#0B1220' },
  background: { default: '#0B1220', paper: '#111827' },
  text: { primary: '#F1F5F9', secondary: '#94A3B8', disabled: '#64748B' },
  divider: 'rgba(226, 232, 240, 0.12)',
}

export const getPalette = (mode: PaletteMode): PaletteOptions =>
  mode === 'dark' ? darkPalette : lightPalette
