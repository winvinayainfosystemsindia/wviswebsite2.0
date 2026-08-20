import type { ReactNode } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import { Chip } from '../Chip'

export interface SectionHeadingProps {
  eyebrow?: string
  heading: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  /** Use 'inverse' on the dark brand surface (e.g. the final CTA band) so text stays legible. */
  tone?: 'default' | 'inverse'
  headingVariant?: TypographyProps['variant']
  maxWidth?: number | string
  /** Id applied to the heading element, for `aria-labelledby` on the enclosing `<section>`. */
  headingId?: string
}

/**
 * Consistent eyebrow + heading + description block reused at the top of
 * every marketing section. `tone="inverse"` swaps text colors for use on
 * the dark brand surface instead of the default light background.
 */
export const SectionHeading = ({
  eyebrow,
  heading,
  description,
  align = 'center',
  tone = 'default',
  headingVariant = 'h2',
  maxWidth = 640,
  headingId,
}: SectionHeadingProps) => {
  const headingColor = tone === 'inverse' ? 'inverse.contrastText' : 'text.primary'
  const descriptionColor = tone === 'inverse' ? 'inverse.contrastText' : 'text.secondary'

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        maxWidth,
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      {eyebrow && (
        <Chip
          label={eyebrow}
          tone={tone === 'inverse' ? 'neutral' : 'accent'}
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.75rem',
            ...(tone === 'inverse' && {
              borderColor: 'inverse.contrastText',
              color: 'inverse.contrastText',
              opacity: 0.85,
            }),
          }}
        />
      )}
      <Typography id={headingId} variant={headingVariant} sx={{ color: headingColor }}>
        {heading}
      </Typography>
      {description && (
        <Typography variant="body1" sx={{ color: descriptionColor, opacity: tone === 'inverse' ? 0.85 : 1 }}>
          {description}
        </Typography>
      )}
    </Stack>
  )
}
