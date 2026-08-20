import { createTheme } from '@mui/material/styles'
import type { PaletteMode, Theme, ThemeOptions } from '@mui/material/styles'
import { getPalette } from './palette'
import { typography } from './typography'
import { breakpoints } from './breakpoints'
import { getGlobalStyles } from './globalStyles'

export const buildTheme = (mode: PaletteMode): Theme => {
  const options: ThemeOptions = {
    palette: getPalette(mode),
    typography,
    breakpoints,
    shape: { borderRadius: 10 },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme: Theme) => getGlobalStyles(theme),
      },
      MuiContainer: {
        defaultProps: { maxWidth: 'xl' },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 44,
            borderRadius: 8,
          },
        },
      },
    },
  }

  return createTheme(options)
}
