import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../../components'
import { successStoriesCtaData } from '../../../data/impact/successStories'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
}))

/** Closing CTA band navigating directly to project consultation. */
export const SuccessStoriesCtaSection = () => (
  <Root aria-labelledby="success-stories-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="success-stories-cta-heading"
          heading={successStoriesCtaData.heading}
          description={successStoriesCtaData.body}
          tone="inverse"
          maxWidth={720}
        />

        <Button
          tone="accent"
          variant="contained"
          size="large"
          href={successStoriesCtaData.cta.href}
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4,
            py: 1.6,
            fontSize: '1.0625rem',
            fontWeight: 700,
          }}
        >
          {successStoriesCtaData.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
