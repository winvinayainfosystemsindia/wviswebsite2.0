import { styled } from '@mui/material/styles'
import MuiSkeleton from '@mui/material/Skeleton'
import type { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export interface SkeletonProps extends MuiSkeletonProps {
  /** Render this many stacked lines instead of one shape (handy for paragraph/list placeholders). */
  lines?: number
}

const StyledSkeleton = styled(MuiSkeleton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.background.paper,
}))

/**
 * Placeholder shape shown while content is loading, so layout stays stable
 * and users see progress instead of a blank screen. Animation respects
 * `prefers-reduced-motion` globally via the theme's CssBaseline overrides.
 */
export const Skeleton = ({ lines, width, ...rest }: SkeletonProps) => {
  if (!lines || lines <= 1) {
    return <StyledSkeleton width={width} {...rest} />
  }

  return (
    <Stack spacing={1} sx={{ width: width ?? '100%' }}>
      {Array.from({ length: lines }).map((_, index) => (
        <StyledSkeleton
          key={index}
          width={index === lines - 1 ? '60%' : '100%'}
          {...rest}
        />
      ))}
    </Stack>
  )
}
