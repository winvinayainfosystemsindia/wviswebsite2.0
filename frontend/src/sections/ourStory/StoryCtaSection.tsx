import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'
import { storyCta } from '../../data'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
}))

/** Closing CTA band navigating to contact & services pages. */
export const StoryCtaSection = () => (
  <Root aria-labelledby="story-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading headingId="story-cta-heading" heading={storyCta.heading} tone="inverse" maxWidth={680} />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button tone="accent" variant="contained" size="large" href={storyCta.primaryCta.href} endIcon={<ArrowForwardIcon />}>
            {storyCta.primaryCta.label}
          </Button>
          <Button
            variant="outlined"
            size="large"
            href={storyCta.secondaryCta.href}
            sx={(theme) => ({
              color: theme.palette.inverse.contrastText,
              borderColor: alpha(theme.palette.inverse.contrastText, 0.4),
              backgroundColor: alpha(theme.palette.common.white, 0.04),
              backdropFilter: 'blur(8px)',
              '&:hover': {
                borderColor: theme.palette.inverse.contrastText,
                backgroundColor: alpha(theme.palette.common.white, 0.12),
                transform: 'translateY(-1px)',
              },
            })}
          >
            {storyCta.secondaryCta.label}
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
