import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { alpha, styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

export interface CarouselItem {
  id: string | number
  content: ReactNode
}

export interface CarouselProps {
  items: CarouselItem[]
  /** Accessible name for the carousel region, e.g. "Featured client stories". */
  ariaLabel: string
  autoplay?: boolean
  /** Milliseconds between auto-advances. */
  interval?: number
  showArrows?: boolean
  showDots?: boolean
}

const Viewport = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: Number(theme.shape.borderRadius) * 1.4,
}))

const Track = styled('div')({
  display: 'flex',
  willChange: 'transform',
  transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
})

const Slide = styled('div')({
  flex: '0 0 100%',
  minWidth: 0,
})

const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: alpha(theme.palette.background.paper, 0.9),
  boxShadow: theme.shadows[2],
  '&:hover': { backgroundColor: theme.palette.background.paper },
}))

const Controls = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}))

const Dot = styled('button', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  width: active ? 24 : 10,
  height: 10,
  borderRadius: 999,
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  backgroundColor: active ? theme.palette.accent.main : alpha(theme.palette.text.secondary, 0.3),
  transition: theme.transitions.create(['width', 'background-color']),
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 2,
  },
}))

/**
 * Accessible content carousel. Auto-rotation (opt-in) pauses on hover/focus
 * and never runs when the user has requested reduced motion; previous/next
 * and slide-dot controls are always available regardless of autoplay.
 */
export const Carousel = ({
  items,
  ariaLabel,
  autoplay = false,
  interval = 6000,
  showArrows = true,
  showDots = true,
}: CarouselProps) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [userPlaying, setUserPlaying] = useState(autoplay)
  const theme = useTheme()
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const regionRef = useRef<HTMLDivElement>(null)
  const count = items.length

  const isPlaying = autoplay && userPlaying && !paused && !prefersReducedMotion

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (!isPlaying) return
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, interval)
    return () => window.clearInterval(timer)
  }, [isPlaying, interval, count])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    }
  }

  if (count === 0) return null

  return (
    <Box
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <Viewport>
        <Track sx={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <Slide
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              {item.content}
            </Slide>
          ))}
        </Track>

        {showArrows && count > 1 && (
          <>
            <NavButton onClick={goPrev} aria-label="Previous slide" sx={{ left: theme.spacing(1.5) }}>
              <ChevronLeftIcon />
            </NavButton>
            <NavButton onClick={goNext} aria-label="Next slide" sx={{ right: theme.spacing(1.5) }}>
              <ChevronRightIcon />
            </NavButton>
          </>
        )}
      </Viewport>

      {(showDots || autoplay) && count > 1 && (
        <Controls>
          {autoplay && !prefersReducedMotion && (
            <IconButton
              onClick={() => setUserPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
              aria-pressed={isPlaying}
              size="small"
            >
              {isPlaying ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
            </IconButton>
          )}
          {showDots && (
            <Box component="span" aria-label="Slides" sx={{ display: 'flex', gap: 1 }}>
              {items.map((item, i) => (
                <Dot
                  key={item.id}
                  type="button"
                  active={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => goTo(i)}
                />
              ))}
            </Box>
          )}
        </Controls>
      )}
    </Box>
  )
}
