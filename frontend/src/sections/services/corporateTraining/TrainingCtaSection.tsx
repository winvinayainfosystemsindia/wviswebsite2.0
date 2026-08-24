import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../../components'
import { corporateTrainingCtaData } from '../../../data/services/corporateTraining'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
}))

/** Closing CTA band navigating directly to training consultation request. */
export const TrainingCtaSection = () => (
  <Root aria-labelledby="training-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="training-cta-heading"
          heading={corporateTrainingCtaData.heading}
          description={corporateTrainingCtaData.body}
          tone="inverse"
          maxWidth={720}
        />

        <Button
          tone="accent"
          variant="contained"
          size="large"
          href={corporateTrainingCtaData.cta.href}
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4,
            py: 1.6,
            fontSize: '1.0625rem',
            fontWeight: 700,
          }}
        >
          {corporateTrainingCtaData.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
