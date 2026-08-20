import type { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import MuiBadge from '@mui/material/Badge'
import type { BadgeProps as MuiBadgeProps } from '@mui/material/Badge'
import type { Theme } from '@mui/material/styles'

export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'accent'

export interface BadgeProps extends Omit<MuiBadgeProps, 'color'> {
  tone?: BadgeTone
  /** Text announced to screen readers, e.g. "3 unread notifications". Strongly recommended for `variant="dot"`. */
  srLabel?: string
  children: ReactNode
}

const resolveToneColor = (theme: Theme, tone: BadgeTone) => {
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

const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: BadgeTone }>(({ theme, tone }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: resolveToneColor(theme, tone),
    color: theme.palette.getContrastText(resolveToneColor(theme, tone)),
    fontWeight: 700,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))

/**
 * Status/count indicator that overlays its child (an icon, avatar, etc.).
 * Pass `srLabel` so screen reader users get context a colored dot alone can't give.
 */
export const Badge = ({ tone = 'accent', srLabel, slotProps, children, ...rest }: BadgeProps) => (
  <StyledBadge
    tone={tone}
    slotProps={{
      ...slotProps,
      badge: {
        ...slotProps?.badge,
        role: srLabel ? 'status' : undefined,
        'aria-label': srLabel,
      },
    }}
    {...rest}
  >
    {children}
  </StyledBadge>
)
