import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'

export type IconBadgeTone = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
export type IconBadgeSize = 'sm' | 'md' | 'lg'

export interface IconBadgeProps {
  icon: ReactNode
  tone?: IconBadgeTone
  size?: IconBadgeSize
}

const resolveToneColor = (theme: Theme, tone: IconBadgeTone) => {
  switch (tone) {
    case 'secondary':
      return theme.palette.secondary.main
    case 'accent':
      return theme.palette.accent.main
    case 'success':
      return theme.palette.success.main
    case 'warning':
      return theme.palette.warning.main
    case 'danger':
      return theme.palette.error.main
    case 'info':
      return theme.palette.info.main
    case 'neutral':
      return theme.palette.text.secondary
    case 'primary':
    default:
      return theme.palette.primary.main
  }
}

const DIMENSION: Record<IconBadgeSize, number> = { sm: 36, md: 48, lg: 64 }
const ICON_SCALE = 0.46

const Swatch = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'tone' && prop !== 'ownSize',
})<{ tone: IconBadgeTone; ownSize: number }>(({ theme, tone, ownSize }) => {
  const toneColor = resolveToneColor(theme, tone)

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: ownSize,
    height: ownSize,
    borderRadius: '50%',
    backgroundColor: alpha(toneColor, 0.12),
    color: toneColor,
    '& svg': {
      fontSize: ownSize * ICON_SCALE,
    },
  }
})

/**
 * Circular tinted swatch for a leading icon (service cards, feature grids,
 * stat rows). Purely decorative — always pair with adjacent visible text,
 * never the sole carrier of meaning.
 */
export const IconBadge = ({ icon, tone = 'primary', size = 'md' }: IconBadgeProps) => (
  <Swatch tone={tone} ownSize={DIMENSION[size]} aria-hidden="true">
    {icon}
  </Swatch>
)
