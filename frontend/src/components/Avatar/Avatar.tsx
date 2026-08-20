import { styled } from '@mui/material/styles'
import MuiAvatar from '@mui/material/Avatar'
import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar'
import { Badge } from '../Badge'
import type { BadgeTone } from '../Badge'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type AvatarStatus = 'online' | 'away' | 'busy' | 'offline'

export interface AvatarProps extends Omit<MuiAvatarProps, 'children'> {
  /** Full name used to derive initials when no `src` is available, and as the default accessible name. */
  name: string
  size?: AvatarSize
  status?: AvatarStatus
}

const SIZE_MAP: Record<AvatarSize, number> = { sm: 32, md: 40, lg: 56, xl: 88 }

const STATUS_TONE: Record<AvatarStatus, BadgeTone> = {
  online: 'success',
  away: 'warning',
  busy: 'danger',
  offline: 'neutral',
}

const STATUS_LABEL: Record<AvatarStatus, string> = {
  online: 'Online',
  away: 'Away',
  busy: 'Busy',
  offline: 'Offline',
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

const StyledAvatar = styled(MuiAvatar)<{ ownSize: number }>(({ theme, ownSize }) => ({
  width: ownSize,
  height: ownSize,
  fontSize: ownSize * 0.4,
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: `2px solid ${theme.palette.background.paper}`,
}))

/**
 * Person/entity avatar with an image, initials fallback, and an optional
 * presence-status dot. Always carries an accessible name derived from `name`.
 */
export const Avatar = ({ name, size = 'md', status, alt, ...rest }: AvatarProps) => {
  const dimension = SIZE_MAP[size]
  const avatar = (
    <StyledAvatar ownSize={dimension} alt={alt ?? name} {...rest}>
      {getInitials(name)}
    </StyledAvatar>
  )

  if (!status) return avatar

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      tone={STATUS_TONE[status]}
      srLabel={`${STATUS_LABEL[status]}`}
    >
      {avatar}
    </Badge>
  )
}
