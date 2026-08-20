import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export interface TimelineItem {
  id: string | number
  title: ReactNode
  /** Human-readable date shown to everyone, e.g. "March 2026". */
  date?: string
  /** Machine-readable ISO date for the `<time datetime>` attribute. */
  dateTime?: string
  description?: ReactNode
  icon?: ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  /** Alternate items left/right of the spine from the `md` breakpoint up. */
  alternate?: boolean
}

const List = styled('ol')(({ theme }) => ({
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

const Item = styled('li', {
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

const Marker = styled('span')(({ theme }) => ({
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

const Content = styled('div')(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 2.5),
}))

/**
 * Chronological event list rendered as a semantic `<ol>` so screen readers
 * announce position ("item 2 of 5"). On wide screens, pass `alternate` to
 * flip items either side of a center spine.
 */
export const Timeline = ({ items, alternate = false }: TimelineProps) => (
  <List>
    {items.map((item) => (
      <Item key={item.id} alternate={alternate}>
        <Marker aria-hidden="true">{item.icon}</Marker>
        <Content>
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
        </Content>
      </Item>
    ))}
  </List>
)
