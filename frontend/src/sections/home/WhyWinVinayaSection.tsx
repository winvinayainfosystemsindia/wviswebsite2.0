import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Button, SectionHeading } from '../../components'
import { whyUs } from '../../data'

const STEP_ICONS: Record<string, React.ReactNode> = {
  '01': <SearchRoundedIcon sx={{ fontSize: '1.35rem' }} />,
  '02': <BuildCircleOutlinedIcon sx={{ fontSize: '1.35rem' }} />,
  '03': <VerifiedUserOutlinedIcon sx={{ fontSize: '1.35rem' }} />,
  '04': <SchoolOutlinedIcon sx={{ fontSize: '1.35rem' }} />,
}

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FCFAF6' : '#14100D',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(9, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(13, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '15%',
    left: '-5%',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const ComparisonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: 22,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.95),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 10px 32px -6px ${alpha(theme.palette.text.primary, 0.05)}`,
  overflow: 'hidden',
}))

const StepperTrack = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: theme.spacing(2, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 54,
    left: '8%',
    right: '8%',
    height: 3,
    background: `linear-gradient(90deg, ${theme.palette.accent.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.accent.main} 100%)`,
    opacity: 0.35,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}))

const StepCardNode = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  height: '100%',
  padding: theme.spacing(3.5, 3),
  borderRadius: 18,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 6px 20px -4px ${alpha(theme.palette.text.primary, 0.04)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2.25),
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 14px 32px -6px ${alpha(theme.palette.primary.main, 0.16)}`,
    transform: 'translateY(-4px)',
    '& .step-number-badge': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
}))

const StepNumberBadge = styled(Box)(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: 12,
  backgroundColor: alpha(theme.palette.primary.main, 0.12),
  color: theme.palette.primary.main,
  border: `1.5px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 800,
  fontSize: '1rem',
  transition: theme.transitions.create(['all']),
}))

const COMPARISON_DATA = [
  {
    feature: 'Detection Coverage',
    automated: 'Misses over 60% of WCAG barriers (keyboard traps, dynamic focus, aria context)',
    winvinaya: '100% Comprehensive coverage validated by PwD engineers using NVDA, JAWS & VoiceOver',
  },
  {
    feature: 'False Positives',
    automated: 'High rate of false alarms that overwhelm software engineering teams',
    winvinaya: 'Zero false positives: Every reported defect is manually verified with clear reproduction steps',
  },
  {
    feature: 'Remediation Support',
    automated: 'Generic automated warnings without actionable engineering solutions',
    winvinaya: 'Direct code-level fix guidelines, ARIA patterns, and engineering pair-programming',
  },
  {
    feature: 'Legal Defensibility',
    automated: 'Automated scan badges offer zero legal protection under ADA Title III or EAA 2025',
    winvinaya: 'Court-tested VPAT and ACR documentation certified by IAAP-recognized specialists',
  },
]

export const WhyWinVinayaSection = () => (
  <SectionWrapper aria-labelledby="why-us-heading">
    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={{ xs: 8, md: 12 }} sx={{ alignItems: 'center' }}>
        {/* Section Heading */}
        <SectionHeading
          headingId="why-us-heading"
          eyebrow="The WinVinaya Advantage"
          heading="Why Global Enterprises Choose Lived-Experience Assurance"
          description="Automated tools alone create a false sense of compliance. We combine automated diagnostics with genuine lived-experience testing to deliver complete usability and risk mitigation."
          maxWidth={840}
        />

        {/* Part 1: Interactive Side-by-Side Comparison Matrix */}
        <ComparisonBox>
          <Grid container>
            {/* Left Comparison: Automated Tools Only */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={(theme) => ({
                p: { xs: 3.5, md: 4.5 },
                bgcolor: theme.palette.mode === 'light' ? alpha(theme.palette.text.primary, 0.02) : alpha(theme.palette.background.default, 0.5),
                borderRight: { md: `1px solid ${theme.palette.divider}` },
                borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
              })}
            >
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CancelRoundedIcon sx={{ color: 'error.main', fontSize: '1.35rem' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary', fontSize: '1.1rem' }}>
                    Conventional Automated Scanners
                  </Typography>
                </Box>

                <Stack spacing={2.5}>
                  {COMPARISON_DATA.map((row, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CancelRoundedIcon sx={{ color: 'error.main', fontSize: '1.1rem', mt: 0.25, flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', lineHeight: 1.55 }}>
                        {row.automated}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Right Comparison: The WinVinaya Advantage */}
            <Grid
              size={{ xs: 12, md: 7 }}
              sx={(theme) => ({
                p: { xs: 3.5, md: 4.5 },
                bgcolor: theme.palette.mode === 'light' ? alpha(theme.palette.accent.main, 0.04) : alpha(theme.palette.accent.main, 0.08),
              })}
            >
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleRoundedIcon sx={{ color: 'accent.main', fontSize: '1.35rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.15rem' }}>
                      The WinVinaya Lived-Experience Standard
                    </Typography>
                  </Box>

                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 1.25,
                      py: 0.35,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      bgcolor: alpha(theme.palette.accent.main, 0.15),
                      color: theme.palette.mode === 'light' ? theme.palette.accent.dark : theme.palette.accent.light,
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                    })}
                  >
                    <StarRoundedIcon sx={{ fontSize: '0.875rem' }} />
                    <span>50%+ PwD QA Team</span>
                  </Box>
                </Box>

                <Stack spacing={2.5}>
                  {COMPARISON_DATA.map((row, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <CheckCircleRoundedIcon sx={{ color: 'accent.main', fontSize: '1.15rem', mt: 0.25, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.90625rem', lineHeight: 1.55 }}>
                        {row.winvinaya}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </ComparisonBox>

        {/* Part 2: How We Work — 4-Phase Stepper */}
        <Stack spacing={{ xs: 5, md: 6 }} sx={{ width: '100%', alignItems: 'center' }}>
          <SectionHeading
            eyebrow="Proven Methodology"
            heading="Our 4-Phase Engagement Stepper"
            description="A structured, transparent roadmap designed to transition your digital assets from non-compliant to fully certified and continuously governed."
            headingVariant="h3"
            maxWidth={800}
          />

          <StepperTrack>
            <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
              {whyUs.workflowSteps.map((step) => (
                <Grid key={step.stepNumber} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
                  <StepCardNode>
                    <Stack spacing={2}>
                      {/* Top Node Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <StepNumberBadge className="step-number-badge">
                          {step.stepNumber}
                        </StepNumberBadge>

                        <Box
                          sx={(theme) => ({
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: alpha(theme.palette.accent.main, 0.1),
                            color: theme.palette.accent.main,
                          })}
                        >
                          {STEP_ICONS[step.stepNumber]}
                        </Box>
                      </Box>

                      {/* Phase & Title */}
                      <Stack spacing={0.5}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontSize: '0.71875rem',
                          }}
                        >
                          {step.phase}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: '1.0625rem',
                            color: 'text.primary',
                            lineHeight: 1.35,
                          }}
                        >
                          {step.title}
                        </Typography>
                      </Stack>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.84375rem', lineHeight: 1.6 }}
                      >
                        {step.description}
                      </Typography>
                    </Stack>

                    {/* Step Deliverables */}
                    <Box
                      sx={{
                        pt: 1.75,
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'text.secondary',
                          fontSize: '0.6875rem',
                          display: 'block',
                          mb: 0.75,
                        }}
                      >
                        Key Outputs:
                      </Typography>
                      <Stack spacing={0.5}>
                        {step.deliverables.map((del, dIdx) => (
                          <Box key={dIdx} sx={{ display: 'flex', alignItems: 'center', gap: 0.65 }}>
                            <TaskAltRoundedIcon sx={{ fontSize: '0.8125rem', color: 'primary.main', flexShrink: 0 }} />
                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.75rem' }}>
                              {del}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </StepCardNode>
                </Grid>
              ))}
            </Grid>
          </StepperTrack>

          <Box sx={{ pt: 1, textAlign: 'center' }}>
            <Button
              tone="primary"
              variant="contained"
              href="/contact"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3.5, py: 1.35, fontWeight: 600 }}
            >
              Get Started with Phase 1 Diagnostic
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  </SectionWrapper>
)
