import { alpha, styled } from '@mui/material/styles'
import MuiChip from '@mui/material/Chip'
import type { ChipProps as MuiChipProps } from '@mui/material/Chip'
import type { Theme } from '@mui/material/styles'

export type ChipTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'accent'

export interface ChipProps extends Omit<MuiChipProps, 'color'> {
  tone?: ChipTone
}

const resolveToneColor = (theme: Theme, tone: ChipTone) => {
  switch (tone) {
    case 'info':
      return theme.palette.info.main
    case 'success':
      return theme.palette.success.main
    case 'warning':
      return theme.palette.warning.main
    case 'danger':
      return theme.palette.error.main
    case 'accent':
      return theme.palette.accent.main
    case 'neutral':
    default:
      return theme.palette.secondary.main
  }
}

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: ChipTone }>(({ theme, tone, variant }) => {
  const toneColor = resolveToneColor(theme, tone)

  return {
    fontWeight: 600,
    borderRadius: 999,
    ...(variant === 'filled' && {
      backgroundColor: alpha(toneColor, 0.14),
      color: toneColor,
      '& .MuiChip-deleteIcon': { color: alpha(toneColor, 0.7) },
      '& .MuiChip-deleteIcon:hover': { color: toneColor },
    }),
    ...(variant === 'outlined' && {
      borderColor: alpha(toneColor, 0.5),
      color: toneColor,
      '& .MuiChip-deleteIcon': { color: alpha(toneColor, 0.7) },
      '& .MuiChip-deleteIcon:hover': { color: toneColor },
    }),
    '&:focus-visible': {
      outline: `3px solid ${alpha(toneColor, 0.6)}`,
      outlineOffset: 2,
    },
  }
})

/**
 * Tag/filter chip. Deletable chips are keyboard-accessible: focus the chip
 * and press Backspace/Delete (MUI's built-in behavior), no extra wiring needed.
 */
export const Chip = ({ tone = 'neutral', variant = 'filled', ...rest }: ChipProps) => (
  <StyledChip tone={tone} variant={variant} {...rest} />
)
