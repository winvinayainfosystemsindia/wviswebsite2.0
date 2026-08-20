import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export interface CardProps {
  eyebrow?: string
  title?: ReactNode
  subtitle?: ReactNode
  media?: { src: string; alt: string; height?: number }
  actions?: ReactNode
  children?: ReactNode
  /** Makes the whole card a single focusable, clickable control. */
  interactive?: boolean
  href?: string
  onClick?: () => void
  'aria-label'?: string
}

const Surface = styled(MuiCard)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
  transition: theme.transitions.create(['box-shadow', 'transform', 'border-color']),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
}))

const InteractiveSurface = styled(Surface)(({ theme }) => ({
  '&:hover': {
    boxShadow: `0 20px 40px -20px ${alpha(theme.palette.primary.main, 0.35)}`,
    borderColor: alpha(theme.palette.accent.main, 0.4),
    transform: 'translateY(-3px)',
  },
}))

const Body = ({ eyebrow, title, subtitle, children }: Pick<CardProps, 'eyebrow' | 'title' | 'subtitle' | 'children'>) => (
  <CardContent>
    <Stack spacing={1}>
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
  eyebrow,
  title,
  subtitle,
  media,
  actions,
  children,
  interactive = false,
  href,
  onClick,
  'aria-label': ariaLabel,
}: CardProps) => {
  const mediaEl = media && <CardMedia component="img" height={media.height ?? 180} image={media.src} alt={media.alt} />

  if (interactive) {
    return (
      <InteractiveSurface>
        <CardActionArea
          {...(href ? { href } : {})}
          onClick={onClick}
          aria-label={ariaLabel}
          sx={{ height: '100%', alignItems: 'stretch', display: 'block' }}
        >
          {mediaEl}
          <Body eyebrow={eyebrow} title={title} subtitle={subtitle}>
            {children}
          </Body>
        </CardActionArea>
        {actions && <CardActions sx={{ px: 2, pb: 2 }}>{actions}</CardActions>}
      </InteractiveSurface>
    )
  }

  return (
    <Surface>
      {mediaEl}
      <Body eyebrow={eyebrow} title={title} subtitle={subtitle}>
        {children}
      </Body>
      {actions && <CardActions sx={{ px: 2, pb: 2 }}>{actions}</CardActions>}
    </Surface>
  )
}
