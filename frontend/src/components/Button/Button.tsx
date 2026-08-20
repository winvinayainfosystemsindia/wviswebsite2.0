import { forwardRef } from 'react'
import { alpha, styled, useTheme } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import type { Theme } from '@mui/material/styles'

export type ButtonTone = 'primary' | 'secondary' | 'accent' | 'success' | 'danger'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  tone?: ButtonTone
  loading?: boolean
}

const resolveToneColor = (theme: Theme, tone: ButtonTone) => {
  switch (tone) {
    case 'secondary':
      return theme.palette.secondary
    case 'accent':
      return theme.palette.accent
    case 'success':
      return theme.palette.success
    case 'danger':
      return theme.palette.error
    case 'primary':
    default:
      return theme.palette.primary
  }
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'tone' && prop !== 'loading',
})<{ tone: ButtonTone; loading?: boolean }>(({ theme, tone, variant, loading }) => {
  const toneColor = resolveToneColor(theme, tone)

  const base = {
    borderRadius: theme.shape.borderRadius,
    minHeight: 44,
    paddingInline: theme.spacing(2.5),
    fontWeight: 600,
    boxShadow: 'none',
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    '&:active': { transform: 'scale(0.98)' },
    '&.Mui-disabled': { opacity: 0.6 },
    ...(loading && {
      color: 'transparent',
      pointerEvents: 'none' as const,
    }),
  }

  if (variant === 'outlined') {
    return {
      ...base,
      color: toneColor.main,
      borderColor: alpha(toneColor.main, 0.5),
      '&:hover': {
        backgroundColor: alpha(toneColor.main, 0.08),
        borderColor: toneColor.main,
        boxShadow: 'none',
      },
    }
  }

  if (variant === 'text') {
    return {
      ...base,
      color: toneColor.main,
      '&:hover': {
        backgroundColor: alpha(toneColor.main, 0.08),
        boxShadow: 'none',
      },
    }
  }

  return {
    ...base,
    backgroundColor: toneColor.main,
    color: toneColor.contrastText,
    '&:hover': {
      backgroundColor: toneColor.dark ?? toneColor.main,
      boxShadow: `0 8px 20px -8px ${alpha(toneColor.main, 0.6)}`,
    },
  }
})

/**
 * Corporate-styled button. `tone` picks the semantic color (primary,
 * secondary, accent, success, danger); MUI's `variant` picks the shape
 * (contained, outlined, text) — combine freely for 15 visual styles.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ tone = 'primary', variant = 'contained', loading = false, disabled, children, ...rest }, ref) => {
    const theme = useTheme()
    const toneColor = resolveToneColor(theme, tone)
    const spinnerColor = variant === 'contained' ? toneColor.contrastText : toneColor.main

    return (
      <StyledButton
        ref={ref}
        tone={tone}
        variant={variant}
        loading={loading}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {children}
        {loading && (
          <CircularProgress
            size={18}
            thickness={5}
            sx={{ position: 'absolute', color: spinnerColor }}
            aria-hidden="true"
          />
        )}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
