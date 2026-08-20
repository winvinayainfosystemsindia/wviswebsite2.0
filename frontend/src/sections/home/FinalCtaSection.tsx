import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { Button, SectionHeading } from '../../components'
import { finalCta } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.inverse.main,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.22)} 0%, transparent 60%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 60%)`,
}))

const BENEFITS = [
  'Free Initial Accessibility Consultation',
  'No-Commitment Audit Estimate',
  'Fast 48-Hour Response Guarantee',
]

/** Closing CTA band navigating directly to the contact page. */
export const FinalCtaSection = () => (
  <Root aria-labelledby="final-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="final-cta-heading"
          heading={finalCta.heading}
          description={finalCta.body}
          tone="inverse"
          maxWidth={660}
        />

        <Button tone="accent" variant="contained" size="large" href={finalCta.cta.href} endIcon={<ArrowForwardIcon />}>
          {finalCta.cta.label}
        </Button>

        <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 2, pt: 1 }}>
          {BENEFITS.map((benefit, idx) => (
            <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <CheckCircleOutlinedIcon fontSize="small" sx={{ color: 'accent.light' }} />
              <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.8), fontWeight: 500 })}>
                {benefit}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Root>
)
