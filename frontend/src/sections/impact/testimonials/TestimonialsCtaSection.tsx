import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../../components'

import { testimonialsCtaData } from '../../../data/impact/testimonials'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
}))

/** Closing CTA band navigating directly to project consultation and success stories. */
export const TestimonialsCtaSection = () => (
  <Root aria-labelledby="testimonials-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="testimonials-cta-heading"
          heading={testimonialsCtaData.heading}
          description={testimonialsCtaData.body}
          tone="inverse"
          maxWidth={720}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            tone="accent"
            variant="contained"
            size="large"
            href={testimonialsCtaData.cta.href}
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.6,
              fontSize: '1.0625rem',
              fontWeight: 700,
            }}
          >
            {testimonialsCtaData.cta.label}
          </Button>

          <Button
            variant="outlined"
            size="large"
            href={testimonialsCtaData.secondaryCta.href}
            sx={(theme) => ({
              px: 3.5,
              py: 1.6,
              fontSize: '1.0625rem',
              fontWeight: 700,
              color: theme.palette.inverse.contrastText,
              borderColor: alpha(theme.palette.inverse.contrastText, 0.4),
              backgroundColor: alpha(theme.palette.inverse.contrastText, 0.05),
              '&:hover': {
                borderColor: theme.palette.inverse.contrastText,
                backgroundColor: alpha(theme.palette.inverse.contrastText, 0.15),
              },
            })}
          >
            {testimonialsCtaData.secondaryCta.label}
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
