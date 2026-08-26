import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, SectionHeading } from '../../components'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.inverse.main,
  color: theme.palette.inverse.contrastText,
  backgroundImage: `radial-gradient(80% 120% at 100% 0%, ${alpha(theme.palette.accent.main, 0.24)} 0%, transparent 65%), radial-gradient(80% 120% at 0% 100%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
}))

export const CareersCtaSection = () => (
  <Root aria-labelledby="careers-cta-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <SectionHeading
          headingId="careers-cta-heading"
          heading="Are You a College Placement Officer or Academic Partner?"
          description="We collaborate with engineering colleges, polytechnics, and universities across India to conduct technical accessibility bootcamps and recruit top student interns for ongoing live projects."
          tone="inverse"
          maxWidth={760}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            tone="accent"
            variant="contained"
            size="large"
            component="a"
            href="mailto:careers@winvinayainfosystems.com?subject=Campus%20Partnership%20Inquiry%20-%20WinVinaya"
            startIcon={<EmailOutlinedIcon />}
            sx={{
              px: 4,
              py: 1.6,
              fontSize: '1.0625rem',
              fontWeight: 700,
            }}
          >
            Contact Campus Hiring Team
          </Button>

          <Button
            variant="outlined"
            size="large"
            href="/contact-us"
            endIcon={<ArrowForwardIcon />}
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
            General Inquiries
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
