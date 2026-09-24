import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import { Button, SectionHeading } from '../../components'
import { whyUs } from '../../data'

const ADVANTAGE_ICONS: Record<string, { icon: ReactNode; color: 'accent' | 'primary' | 'secondary' | 'info' }> = {
  'lived-expertise': {
    icon: <AccessibleOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'accent',
  },
  standards: {
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'primary',
  },
  'compliant-and-usable': {
    icon: <CodeRoundedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'secondary',
  },
  'one-partner': {
    icon: <HandshakeOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'info',
  },
}

const STEP_ICONS: Record<string, ReactNode> = {
  '01': <SearchRoundedIcon sx={{ fontSize: '1.35rem' }} />,
  '02': <BuildCircleOutlinedIcon sx={{ fontSize: '1.35rem' }} />,
  '03': <VerifiedUserOutlinedIcon sx={{ fontSize: '1.35rem' }} />,
  '04': <SchoolOutlinedIcon sx={{ fontSize: '1.35rem' }} />,
}

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FFFDF9' : '#14100D',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    left: '-5%',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const SpotlightCard = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 100,
  padding: theme.spacing(4.5),
  borderRadius: 18,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 12px 36px -8px ${alpha(theme.palette.primary.main, 0.08)}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    position: 'static',
    padding: theme.spacing(3),
  },
}))

const FeatureRow = styled(Box)<{ colorScheme: 'accent' | 'primary' | 'secondary' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      accent: theme.palette.accent.main,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
    }
    const targetColor = colorMap[colorScheme]

    return {
      padding: theme.spacing(3, 3.5),
      borderRadius: 16,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.8),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.03)}`,
      display: 'flex',
      gap: theme.spacing(2.5),
      alignItems: 'flex-start',
      transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
      '&:hover': {
        borderColor: alpha(targetColor, 0.45),
        boxShadow: `0 12px 28px -6px ${alpha(targetColor, 0.14)}`,
        transform: 'translateX(4px)',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: theme.spacing(2.5),
      },
    }
  }
)

const FeatureIconCircle = styled(Box)<{ colorScheme: 'accent' | 'primary' | 'secondary' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      accent: { bg: alpha(theme.palette.accent.main, 0.1), color: theme.palette.accent.main, border: alpha(theme.palette.accent.main, 0.25) },
      primary: { bg: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main, border: alpha(theme.palette.primary.main, 0.25) },
      secondary: { bg: alpha(theme.palette.secondary.main, 0.1), color: theme.palette.secondary.main, border: alpha(theme.palette.secondary.main, 0.25) },
      info: { bg: alpha(theme.palette.info.main, 0.1), color: theme.palette.info.main, border: alpha(theme.palette.info.main, 0.25) },
    }
    const current = colorMap[colorScheme]

    return {
      width: 52,
      height: 52,
      borderRadius: 14,
      backgroundColor: current.bg,
      color: current.color,
      border: `1px solid ${current.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }
  }
)

/* Stepper Component Styles */
const StepperTrack = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: theme.spacing(4, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 60,
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
  borderRadius: 16,
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
      transform: 'scale(1.08)',
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

export const WhyWinVinayaSection = () => (
  <SectionWrapper aria-labelledby="why-us-heading">
    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 9, md: 14 } }}>
      <Stack spacing={{ xs: 8, md: 12 }} sx={{ alignItems: 'center' }}>
        {/* Top Header */}
        <SectionHeading
          headingId="why-us-heading"
          eyebrow={whyUs.eyebrow}
          heading={whyUs.heading}
          description={whyUs.subheading}
          maxWidth={820}
        />

        {/* Part 1: The WinVinaya Advantage (Pleasant Split Showcase Layout) */}
        <Grid container spacing={{ xs: 4, lg: 5 }} sx={{ width: '100%', alignItems: 'stretch' }}>
          {/* Left Column: Spotlight Showcase Card */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <SpotlightCard>
              <Stack spacing={2.5}>
                <Box
                  sx={(theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1.5,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    alignSelf: 'flex-start',
                  })}
                >
                  <StarRoundedIcon sx={{ fontSize: '1rem' }} />
                  {whyUs.badge}
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.3 }}>
                  {whyUs.spotlightHeading}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.96875rem', lineHeight: 1.75 }}>
                  {whyUs.spotlightDescription}
                </Typography>

                {/* Micro Stat Badges */}
                <Grid container spacing={1.5} sx={{ pt: 1 }}>
                  {whyUs.spotlightStats.map((stat, idx) => (
                    <Grid key={idx} size={{ xs: 4 }}>
                      <Box
                        sx={(theme) => ({
                          p: 1.5,
                          borderRadius: 2,
                          textAlign: 'center',
                          bgcolor: alpha(theme.palette.accent.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.accent.main, 0.15)}`,
                        })}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 800, color: 'accent.main', fontSize: '1.25rem', lineHeight: 1 }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontWeight: 600, fontSize: '0.71875rem', display: 'block', mt: 0.5 }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>

              <Box sx={{ pt: 2, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Button
                  tone="primary"
                  variant="contained"
                  href="/contact"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  sx={{ py: 1.3, fontWeight: 600 }}
                >
                  Schedule Accessibility Consultation
                </Button>
              </Box>
            </SpotlightCard>
          </Grid>

          {/* Right Column: Stacked Feature Row List */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={2.5}>
              {whyUs.items.map((item) => {
                const conf = ADVANTAGE_ICONS[item.id] || {
                  icon: <AccessibleOutlinedIcon />,
                  color: 'primary',
                }

                return (
                  <FeatureRow key={item.id} colorScheme={conf.color}>
                    <FeatureIconCircle colorScheme={conf.color}>{conf.icon}</FeatureIconCircle>
                    <Stack spacing={0.85} sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Typography variant="h6" sx={{ fontSize: '1.0625rem', fontWeight: 700, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Box
                          sx={(theme) => ({
                            px: 1,
                            py: 0.25,
                            borderRadius: 1,
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            bgcolor: alpha(theme.palette.text.primary, 0.05),
                            color: 'text.secondary',
                            border: `1px solid ${theme.palette.divider}`,
                          })}
                        >
                          {item.tag}
                        </Box>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', lineHeight: 1.65 }}>
                        {item.description}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, pt: 0.5 }}>
                        <CheckCircleRoundedIcon sx={{ fontSize: '0.9375rem', color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.78125rem' }}>
                          {item.proofPoint}
                        </Typography>
                      </Box>
                    </Stack>
                  </FeatureRow>
                )
              })}
            </Stack>
          </Grid>
        </Grid>

        {/* Part 2: How We Work — Modern 4-Phase Stepper */}
        <Stack spacing={{ xs: 5, md: 6 }} sx={{ width: '100%', alignItems: 'center', pt: 2 }}>
          <SectionHeading
            eyebrow={whyUs.workflowEyebrow}
            heading={whyUs.workflowHeading}
            description={whyUs.workflowSubheading}
            headingVariant="h3"
            maxWidth={780}
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
        </Stack>
      </Stack>
    </Container>
  </SectionWrapper>
)
