import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { Button, SectionHeading } from '../../components'
import { finalCta } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.inverse.main,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.18)} 0%, transparent 60%)`,
}))

/** Closing CTA band navigating directly to the contact page. */
export const FinalCtaSection = () => (
  <Root aria-labelledby="final-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="final-cta-heading"
          heading={finalCta.heading}
          description={finalCta.body}
          tone="inverse"
          maxWidth={640}
        />

        <Button tone="accent" variant="contained" size="large" href={finalCta.cta.href}>
          {finalCta.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
