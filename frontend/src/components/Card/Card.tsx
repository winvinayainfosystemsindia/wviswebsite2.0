import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { IconBadge } from '../IconBadge'
import type { IconBadgeProps } from '../IconBadge'

export interface CardProps {
  /** Leading icon badge rendered above the eyebrow/title (service and feature cards). */
  icon?: IconBadgeProps['icon']
  iconTone?: IconBadgeProps['tone']
  eyebrow?: string
  title?: ReactNode
  subtitle?: ReactNode
  media?: { src: string; alt: string; height?: number }
  actions?: ReactNode
  children?: ReactNode
  /** Makes the whole card a single focusable, clickable control. */
  interactive?: boolean
  /** Stretches the card to fill its grid cell, so a row of cards with uneven copy lengths stays level. */
  fullHeight?: boolean
  href?: string
  onClick?: () => void
  'aria-label'?: string
}

const Surface = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'fullHeight',
})<{ fullHeight?: boolean }>(({ theme, fullHeight }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 1px 3px ${alpha(theme.palette.common.black, 0.06)}`,
  transition: theme.transitions.create(['box-shadow', 'transform', 'border-color']),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  ...(fullHeight && { height: '100%', display: 'flex', flexDirection: 'column' as const }),
}))

const InteractiveSurface = styled(Surface)(({ theme }) => ({
  '&:hover': {
    boxShadow: `0 20px 40px -20px ${alpha(theme.palette.primary.main, 0.35)}`,
    borderColor: alpha(theme.palette.accent.main, 0.4),
    transform: 'translateY(-3px)',
  },
}))

const Body = ({
  icon,
  iconTone,
  eyebrow,
  title,
  subtitle,
  children,
}: Pick<CardProps, 'icon' | 'iconTone' | 'eyebrow' | 'title' | 'subtitle' | 'children'>) => (
  <CardContent>
    <Stack spacing={1}>
      {icon && (
        <Stack sx={{ mb: 0.5 }}>
          <IconBadge icon={icon} tone={iconTone ?? 'accent'} />
        </Stack>
      )}
      {eyebrow && (
        <Typography variant="eyebrow" color="accent.main">
          {eyebrow}
        </Typography>
      )}
      {title && <Typography variant="h5">{title}</Typography>}
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}
      {children}
    </Stack>
  </CardContent>
)

/**
 * General-purpose corporate card: optional media, eyebrow/title/subtitle
 * header, free-form body, and an actions footer. Pass `interactive` (with
 * `href` or `onClick`) to make the entire card a single accessible control
 * instead of relying on hover alone.
 */
export const Card = ({
  icon,
  iconTone,
  eyebrow,
  title,
  subtitle,
  media,
  actions,
  children,
  interactive = false,
  fullHeight = false,
  href,
  onClick,
  'aria-label': ariaLabel,
}: CardProps) => {
  const mediaEl = media && <CardMedia component="img" height={media.height ?? 180} image={media.src} alt={media.alt} />

  if (interactive) {
    return (
      <InteractiveSurface fullHeight={fullHeight}>
        <CardActionArea
          {...(href ? { href } : {})}
          onClick={onClick}
          aria-label={ariaLabel}
          sx={{ height: '100%', alignItems: 'stretch', display: 'flex', flexDirection: 'column' }}
        >
          {mediaEl}
          <Body icon={icon} iconTone={iconTone} eyebrow={eyebrow} title={title} subtitle={subtitle}>
            {children}
          </Body>
        </CardActionArea>
        {actions && <CardActions sx={{ px: 2, pb: 2 }}>{actions}</CardActions>}
      </InteractiveSurface>
    )
  }

  return (
    <Surface fullHeight={fullHeight}>
      {mediaEl}
      <Body icon={icon} iconTone={iconTone} eyebrow={eyebrow} title={title} subtitle={subtitle}>
        {children}
      </Body>
      {actions && <CardActions sx={{ px: 2, pb: 2 }}>{actions}</CardActions>}
    </Surface>
  )
}
