import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { awardsCta } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.inverse.main,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.22)} 0%, transparent 60%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 60%)`,
}))

/** Closing CTA band, on the fixed dark brand surface — same treatment used to close the other About-family pages. */
export const AwardsCtaSection = () => (
  <Root aria-labelledby="awards-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="awards-cta-heading"
          heading={awardsCta.heading}
          description={awardsCta.body}
          tone="inverse"
          maxWidth={640}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button tone="accent" variant="contained" size="large" href={awardsCta.primaryCta.href} endIcon={<ArrowForwardIcon />}>
            {awardsCta.primaryCta.label}
          </Button>
          <Button
            tone="primary"
            variant="outlined"
            size="large"
            href={awardsCta.secondaryCta.href}
            sx={(theme) => ({
              color: theme.palette.inverse.contrastText,
              borderColor: alpha(theme.palette.inverse.contrastText, 0.4),
            })}
          >
            {awardsCta.secondaryCta.label}
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
