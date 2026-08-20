import { styled } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export type SpinnerSize = 'sm' | 'md' | 'lg'
export type SpinnerTone = 'primary' | 'accent' | 'neutral'

export interface LoadingSpinnerProps extends Omit<CircularProgressProps, 'size' | 'color'> {
  size?: SpinnerSize
  tone?: SpinnerTone
  /** Visible + screen-reader label, e.g. "Loading results…". Defaults to "Loading". */
  label?: string
  /** Hide the label visually while still announcing it to screen readers. */
  hideLabel?: boolean
}

const SIZE_MAP: Record<SpinnerSize, number> = { sm: 18, md: 32, lg: 48 }

const StyledProgress = styled(CircularProgress, {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: SpinnerTone }>(({ theme, tone }) => ({
  color:
    tone === 'accent'
      ? theme.palette.accent.main
      : tone === 'neutral'
        ? theme.palette.text.secondary
        : theme.palette.primary.main,
}))

const VisuallyHidden = styled('span')({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
})

/**
 * Indeterminate/determinate loading indicator. Wrapped in `role="status"` so
 * assistive tech announces the busy state without a page reflow.
 */
export const LoadingSpinner = ({
  size = 'md',
  tone = 'primary',
  label = 'Loading',
  hideLabel = false,
  ...rest
}: LoadingSpinnerProps) => (
  <Stack direction="row" spacing={1.5} role="status" aria-live="polite" sx={{ alignItems: 'center' }}>
    <StyledProgress tone={tone} size={SIZE_MAP[size]} thickness={4} {...rest} />
    {hideLabel ? <VisuallyHidden>{label}</VisuallyHidden> : <Typography variant="body2" color="text.secondary">{label}</Typography>}
  </Stack>
)
