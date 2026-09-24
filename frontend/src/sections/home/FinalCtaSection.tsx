import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button } from '../../components'
import winVinayaLogo from '../../assets/logo/winvinayainfosystems_logo.png'

/* Authentic Brand & Tool SVG Icons */
const MicrosoftIcon = () => (
  <svg width="32" height="32" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#f35325" d="M1 1h10v10H1z" />
    <path fill="#81bc06" d="M12 1h10v10H12z" />
    <path fill="#05a6f0" d="M1 12h10v10H1z" />
    <path fill="#ffba08" d="M12 12h10v10H12z" />
  </svg>
)

const FigmaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 9.5 57 9.5 9.5 0 0 1 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19Z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
  </svg>
)

const GoogleGeminiIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
      fill="url(#gemini-grad)"
    />
    <defs>
      <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1BA1E3" />
        <stop offset="0.5" stopColor="#9B72CB" />
        <stop offset="1" stopColor="#D96570" />
      </linearGradient>
    </defs>
  </svg>
)

const GitHubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const W3CIcon = () => (
  <svg width="34" height="22" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.7 0L12.5 19.3L7.3 0H0l9 33.3h7L21.3 14l5.3 19.3h7L42.6 0h-7.3l-5.2 19.3L25 0h-7.3z"
      fill="#005A9C"
    />
    <path
      d="M50.2 22.8c-1.3 1.6-3.2 2.4-5.6 2.4-1.7 0-3-.4-4-1.3-.9-.9-1.4-2.1-1.4-3.6 0-1.6.5-2.9 1.6-3.9 1.1-.9 2.5-1.4 4.3-1.4 1.2 0 2.2.2 3.1.6v-2.3c0-.9-.3-1.6-.8-2.1-.5-.5-1.3-.8-2.3-.8-1.4 0-2.8.6-4.2 1.7l-2.4-3.3c2-1.7 4.3-2.6 6.9-2.6 2.3 0 4.1.6 5.3 1.9 1.2 1.3 1.8 3.1 1.8 5.4v12.5h-5.2v-3.2h-.1zm-4.3-3.6c-.8 0-1.5.2-2 .7-.5.5-.7 1.1-.7 1.8 0 .7.2 1.2.7 1.6.5.4 1.1.6 1.9.6 1 0 1.8-.3 2.5-.9.7-.6 1-1.4 1-2.4v-1.9c-.8-.3-1.6-.5-2.5-.5z"
      fill="#005A9C"
    />
  </svg>
)

const NVDAIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#548021" strokeWidth="2" fill="none" />
    <path d="M7 12L10.5 15.5L17 8.5" stroke="#548021" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SectionWrapper = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.background.default, 0.6) : theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(12, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(16, 0),
  },
}))

const IntegrationCard = styled(Box)<{ isCenter?: boolean }>(({ theme, isCenter }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  borderRadius: 16,
  backgroundColor: isCenter
    ? theme.palette.background.paper
    : theme.palette.mode === 'light'
      ? '#FFFFFF'
      : alpha(theme.palette.background.paper, 0.7),
  border: isCenter
    ? `2px solid ${alpha(theme.palette.primary.main, 0.4)}`
    : `1px solid ${theme.palette.divider}`,
  boxShadow: isCenter
    ? `0 16px 36px -4px ${alpha(theme.palette.primary.main, 0.2)}, 0 4px 12px ${alpha(theme.palette.text.primary, 0.05)}`
    : `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: isCenter ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 12px 24px -4px ${alpha(theme.palette.primary.main, 0.15)}`,
  },
  [theme.breakpoints.down('sm')]: {
    width: 68,
    height: 68,
    borderRadius: 12,
  },
}))

export const FinalCtaSection = () => (
  <SectionWrapper aria-labelledby="integrations-cta-heading">
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        {/* Left Side: 21st.dev Exact 7-Card Integrations Diamond Grid */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: 'relative',
              width: 'fit-content',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Radial Blur Overlay */}
            <Box
              aria-hidden="true"
              sx={(theme) => ({
                position: 'absolute',
                inset: -20,
                borderRadius: '50%',
                background: `radial-gradient(circle at center, transparent 0%, ${alpha(theme.palette.background.default, 0.1)} 50%, ${alpha(theme.palette.background.default, 0.8)} 85%)`,
                pointerEvents: 'none',
                zIndex: 10,
              })}
            />

            {/* Row 1: 2 Cards */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2, justifyContent: 'center' }}>
              <IntegrationCard aria-label="Google Gemini & AI">
                <GoogleGeminiIcon />
              </IntegrationCard>
              <IntegrationCard aria-label="Microsoft Power Platform & Power BI">
                <MicrosoftIcon />
              </IntegrationCard>
            </Box>

            {/* Row 2: 3 Cards with Center WinVinaya Logo */}
            <Box sx={{ display: 'flex', gap: 2, my: 0.5, alignItems: 'center', justifyContent: 'center' }}>
              <IntegrationCard aria-label="Figma & Design Systems">
                <FigmaIcon />
              </IntegrationCard>

              {/* Center WinVinaya Logo Card */}
              <IntegrationCard isCenter aria-label="WinVinaya Infosystems Core Engine">
                <Box
                  component="img"
                  src={winVinayaLogo}
                  alt="WinVinaya Logo"
                  sx={{
                    width: 44,
                    height: 44,
                    objectFit: 'contain',
                  }}
                />
              </IntegrationCard>

              <IntegrationCard aria-label="GitHub & CI/CD Pipelines">
                <GitHubIcon />
              </IntegrationCard>
            </Box>

            {/* Row 3: 2 Cards */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
              <IntegrationCard aria-label="NVDA, JAWS & Screen Readers">
                <NVDAIcon />
              </IntegrationCard>
              <IntegrationCard aria-label="W3C & WCAG 2.2 Standards">
                <W3CIcon />
              </IntegrationCard>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Clean Narrative & Action CTA */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            spacing={3}
            sx={{
              maxWidth: 480,
              mx: { xs: 'auto', md: 0 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              id="integrations-cta-heading"
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.5rem' },
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: 'text.primary',
              }}
            >
              Seamlessly Integrate Accessibility with Your Enterprise Tools
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: '1.0625rem',
                lineHeight: 1.75,
              }}
            >
              From Figma design audits and GitHub CI/CD test automation to Microsoft Power Platform and lived-experience screen reader validation — our solutions plug directly into your workflow.
            </Typography>

            <Box sx={{ pt: 1, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, flexWrap: 'wrap' }}>
              <Button
                tone="primary"
                variant="contained"
                size="large"
                href="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{ py: 1.35, px: 3.5, fontWeight: 600 }}
              >
                Schedule Consultation
              </Button>
              <Button
                tone="accent"
                variant="outlined"
                size="large"
                href="/services/accessibility-audit-testing"
                sx={{ py: 1.35, px: 3, fontWeight: 600 }}
              >
                Request an Audit
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </SectionWrapper>
)
