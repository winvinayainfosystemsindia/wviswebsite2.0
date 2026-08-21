import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export interface TimelineItem {
  id: string | number
  title: ReactNode
  /** Human-readable date shown to everyone, e.g. "March 2026" or "2013". */
  date?: string
  /** Machine-readable ISO date for the `<time datetime>` attribute. */
  dateTime?: string
  description?: ReactNode
  icon?: ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  /** Alternate items left/right of the spine from the `md` breakpoint up (for vertical mode). */
  alternate?: boolean
  /** Layout orientation: 'vertical' (default) or 'horizontal'. */
  orientation?: 'vertical' | 'horizontal'
}

// Vertical Timeline Styled Components
const VerticalList = styled('ol')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 15,
    width: 2,
    backgroundColor: theme.palette.divider,
    [theme.breakpoints.up('md')]: {
      left: '50%',
      transform: 'translateX(-1px)',
    },
  },
}))

const VerticalItem = styled('li', {
  shouldForwardProp: (prop) => prop !== 'alternate',
})<{ alternate: boolean }>(({ theme, alternate }) => ({
  position: 'relative',
  display: 'flex',
  gap: theme.spacing(3),
  paddingLeft: theme.spacing(5),
  paddingBottom: theme.spacing(4),
  '&:last-of-type': { paddingBottom: 0 },
  ...(alternate && {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      width: '50%',
      '&:nth-of-type(odd)': {
        marginLeft: 0,
        flexDirection: 'row-reverse',
        textAlign: 'right',
        paddingRight: theme.spacing(5),
      },
      '&:nth-of-type(even)': {
        marginLeft: '50%',
        paddingLeft: theme.spacing(5),
      },
    },
  }),
}))

const VerticalMarker = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 8,
  top: 2,
  width: 16,
  height: 16,
  borderRadius: '50%',
  backgroundColor: theme.palette.accent.main,
  boxShadow: `0 0 0 4px ${alpha(theme.palette.accent.main, 0.16)}`,
  [theme.breakpoints.up('md')]: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
}))

const VerticalContent = styled('div')(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  padding: theme.spacing(2, 2.5),
  boxShadow: `0 4px 14px ${alpha(theme.palette.text.primary, 0.04)}`,
}))

// Horizontal Timeline Styled Components
const HorizontalList = styled('ol')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: theme.spacing(3),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 18,
      left: '8%',
      right: '8%',
      height: 2,
      backgroundColor: theme.palette.divider,
      zIndex: 1,
    },
  },
}))

const HorizontalItem = styled('li')(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}))

const HorizontalMarker = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.accent.main}`,
  boxShadow: `0 0 0 4px ${alpha(theme.palette.accent.main, 0.14)}`,
  color: theme.palette.accent.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 800,
  fontSize: '0.85rem',
  transition: theme.transitions.create(['transform', 'box-shadow']),
}))

const HorizontalContent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.6,
  padding: theme.spacing(2.25, 2.5),
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['border-color', 'transform', 'box-shadow']),
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.45),
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 28px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
}))

/**
 * Chronological event list rendered as a semantic `<ol>` so screen readers
 * announce position ("item 2 of 5"). Supports both `vertical` and `horizontal` orientations.
 */
export const Timeline = ({ items, alternate = false, orientation = 'vertical' }: TimelineProps) => {
  if (orientation === 'horizontal') {
    return (
      <HorizontalList>
        {items.map((item) => (
          <HorizontalItem key={item.id}>
            <HorizontalMarker aria-hidden="true">
              {item.icon || (
                <Box
                  sx={(theme) => ({
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: theme.palette.accent.main,
                  })}
                />
              )}
            </HorizontalMarker>
            <HorizontalContent>
              <Stack spacing={0.75} sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
                {item.date && (
                  <Typography variant="caption" sx={(theme) => ({ fontWeight: 800, color: theme.palette.accent.dark, letterSpacing: '0.06em' })}>
                    {item.dateTime ? <time dateTime={item.dateTime}>{item.date}</time> : item.date}
                  </Typography>
                )}
                <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.55 }}>
                    {item.description}
                  </Typography>
                )}
              </Stack>
            </HorizontalContent>
          </HorizontalItem>
        ))}
      </HorizontalList>
    )
  }

  return (
    <VerticalList>
      {items.map((item) => (
        <VerticalItem key={item.id} alternate={alternate}>
          <VerticalMarker aria-hidden="true">{item.icon}</VerticalMarker>
          <VerticalContent>
            <Stack spacing={0.5}>
              {item.date && (
                <Typography variant="overline" color="accent.main">
                  {item.dateTime ? <time dateTime={item.dateTime}>{item.date}</time> : item.date}
                </Typography>
              )}
              <Typography variant="h6">{item.title}</Typography>
              {item.description && (
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              )}
            </Stack>
          </VerticalContent>
        </VerticalItem>
      ))}
    </VerticalList>
  )
}
