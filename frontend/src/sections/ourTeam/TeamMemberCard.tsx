import { alpha, styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { TeamMember } from '../../data'

export interface TeamMemberCardProps {
  member: TeamMember
  /** Rotates through the theme's brand colors for visual variety across a grid. */
  toneIndex?: number
}

const getInitials = (name: string) =>
  name
    .replace(/["“”]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

const resolveTone = (theme: Theme, toneIndex: number) => {
  const tones = [theme.palette.primary, theme.palette.accent, theme.palette.secondary]
  return tones[toneIndex % tones.length]
}

const Surface = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0 1px 3px ${alpha(theme.palette.common.black, 0.06)}`,
  transition: theme.transitions.create(['box-shadow', 'transform', 'border-color']),
  '&:hover': {
    boxShadow: `0 20px 40px -20px ${alpha(theme.palette.primary.main, 0.35)}`,
    borderColor: alpha(theme.palette.accent.main, 0.4),
    transform: 'translateY(-3px)',
  },
}))

const Photo = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'toneIndex',
})<{ toneIndex: number }>(({ theme, toneIndex }) => {
  const tone = resolveTone(theme, toneIndex)
  return {
    position: 'relative',
    aspectRatio: '1 / 1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(155deg, ${alpha(tone.main, 0.16)} 0%, ${alpha(tone.main, 0.07)} 100%)`,
  }
})

/** "Photo card" placeholder — a theme-toned monogram in place of a real headshot; swap in a real photo via `media` when available. */
export const TeamMemberCard = ({ member, toneIndex = 0 }: TeamMemberCardProps) => (
  <Surface>
    <Photo toneIndex={toneIndex} aria-hidden="true">
      <Typography
        component="span"
        sx={(theme) => ({
          fontFamily: theme.typography.h1.fontFamily,
          fontWeight: 700,
          fontSize: '1.75rem',
          color: resolveTone(theme, toneIndex).main,
          letterSpacing: '0.02em',
        })}
      >
        {getInitials(member.name)}
      </Typography>
    </Photo>
    <Stack spacing={0.75} sx={{ p: 3 }}>
      <Typography variant="h6">{member.name}</Typography>
      <Typography variant="body2" color="accent.main" sx={{ fontWeight: 600 }}>
        {member.role}
      </Typography>
    </Stack>
  </Surface>
)
