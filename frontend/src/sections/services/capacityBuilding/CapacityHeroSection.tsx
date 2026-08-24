import { alpha, styled, keyframes } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import { Button, Chip } from '../../../components'
import { capacityHeroData } from '../../../data/services/capacityBuilding'
import heroBg from '../../../assets/hero-bg.jpg'
import heroBgMobile from '../../../assets/hero-bg-mobile.jpg'

// Keyframe animations for ambient micro-interactions
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`

const pulseGlow = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}))

// Ambient theme background lighting
const AmbientGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  zIndex: 1,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-15%',
    left: '-8%',
    width: '60vw',
    height: '60vw',
    maxWidth: 680,
    maxHeight: 680,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.16)} 0%, ${alpha(theme.palette.primary.main, 0.03)} 45%, transparent 70%)`,
    filter: 'blur(70px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10%',
    right: '-5%',
    width: '55vw',
    height: '55vw',
    maxWidth: 600,
    maxHeight: 600,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.light, 0.15)} 0%, ${alpha(theme.palette.accent.main, 0.03)} 45%, transparent 70%)`,
    filter: 'blur(70px)',
  },
}))

// Light grid pattern
const GridPattern = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 1,
  backgroundImage: `radial-gradient(${alpha(theme.palette.text.primary, 0.06)} 1.2px, transparent 1.2px)`,
  backgroundSize: '28px 28px',
  opacity: 0.7,
}))

const PulseDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.accent.main,
  animation: `${pulseGlow} 2s ease-in-out infinite`,
}))

// Gradient Text Highlight driven strictly by theme palette tokens
const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 45%, ${theme.palette.accent.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}))

const StatBadgePill = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.85, 2),
  borderRadius: 999,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`,
  transition: theme.transitions.create(['background-color', 'border-color', 'transform', 'box-shadow']),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.light, 0.06),
    borderColor: alpha(theme.palette.primary.main, 0.3),
    transform: 'translateY(-1px)',
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.08)}`,
  },
}))

// Hero visual image frame
const VisualFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.8,
  padding: theme.spacing(1.25),
  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.light, 0.08)} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 24px 48px -12px ${alpha(theme.palette.secondary.dark, 0.12)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
}))

const VisualImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 400,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundImage: `url(${heroBgMobile})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    height: 460,
  },
  [theme.breakpoints.up('md')]: {
    height: 520,
    backgroundImage: `url(${heroBg})`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(180deg, transparent 45%, ${alpha(theme.palette.common.black, 0.55)} 100%)`,
  },
}))

// Interactive Mockup Overlay within Visual Frame
const InteractiveAdoptionPreview = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  left: theme.spacing(3),
  right: theme.spacing(3),
  zIndex: 2,
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: 'blur(16px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  boxShadow: `0 12px 32px ${alpha(theme.palette.common.black, 0.2)}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.2),
}))

// Glassmorphism Card Overlay
const GlassCard = styled(Box)<{ floatDelay?: string }>(({ theme, floatDelay }) => ({
  position: 'absolute',
  zIndex: 3,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 2.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.6,
  backgroundColor: alpha(theme.palette.background.paper, 0.94),
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  boxShadow: `0 14px 32px ${alpha(theme.palette.text.primary, 0.12)}, 0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`,
  animation: `${floatAnimation} 4s ease-in-out infinite`,
  animationDelay: floatDelay || '0s',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.18)}`,
  },
}))

const TrustBarSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(5),
}))

const TrustCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2.75, 3),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: alpha(theme.palette.background.default, 0.6),
  border: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(['background-color', 'border-color', 'transform', 'box-shadow']),
  height: '100%',
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}))

const TRUST_CREDENTIALS = [
  {
    icon: CastForEducationOutlinedIcon,
    tone: 'primary' as const,
    title: 'Trainer Enablement Certified',
    detail: 'Equipping internal teams to facilitate ongoing training across technical and business software.',
  },
  {
    icon: Diversity3OutlinedIcon,
    tone: 'accent' as const,
    title: 'Inclusive Culture by Default',
    detail: 'Disability awareness orientation programs that make accessibility an enduring daily practice.',
  },
  {
    icon: IntegrationInstructionsOutlinedIcon,
    tone: 'info' as const,
    title: 'Full-Stack Domain Mastery',
    detail: 'Capacity building across GenAI, Power Platform, QA Automation, Full Stack, Python, and Postgres.',
  },
]

export const CapacityHeroSection = () => (
  <Root aria-labelledby="capacity-hero-heading">
    <AmbientGlow aria-hidden="true" />
    <GridPattern aria-hidden="true" />

    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 10 } }}>
      <Grid container spacing={{ xs: 5, md: 6, lg: 8 }} sx={{ alignItems: 'center' }}>
        {/* Left Column: Headline & Action */}
        <Grid size={{ xs: 12, md: 7, lg: 6 }}>
          <Stack spacing={3.5}>
            <Chip
              icon={<PulseDot />}
              label={capacityHeroData.eyebrow}
              variant="outlined"
              size="medium"
              sx={(theme) => ({
                alignSelf: 'flex-start',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.78125rem',
                fontWeight: 700,
                color: theme.palette.accent.dark,
                borderColor: alpha(theme.palette.accent.main, 0.4),
                backgroundColor: alpha(theme.palette.accent.main, 0.08),
                backdropFilter: 'blur(8px)',
                px: 0.75,
                py: 0.5,
              })}
            />

            <Typography
              id="capacity-hero-heading"
              variant="display"
              component="h1"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                fontSize: { xs: '2.375rem', sm: '3.125rem', md: '3.5rem' },
                lineHeight: { xs: 1.15, sm: 1.12, md: 1.1 },
                fontWeight: 800,
                letterSpacing: '-0.02em',
              })}
            >
              {capacityHeroData.headline} <GradientText>{capacityHeroData.headlineHighlight}</GradientText>
            </Typography>

            <Typography
              variant="body1"
              sx={(theme) => ({
                fontSize: { xs: '1.0625rem', sm: '1.1875rem' },
                lineHeight: 1.75,
                color: theme.palette.text.secondary,
                fontWeight: 450,
                maxWidth: 580,
              })}
            >
              {capacityHeroData.subheadline}
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button
                tone="primary"
                variant="contained"
                href={capacityHeroData.primaryCta.href}
                size="large"
                endIcon={<ArrowForwardIcon className="cta-arrow" />}
                sx={(theme) => ({
                  px: 3.75,
                  py: 1.6,
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  '& .cta-arrow': { transition: theme.transitions.create('transform') },
                  '&:hover': {
                    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.45)}`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    '& .cta-arrow': { transform: 'translateX(4px)' },
                  },
                })}
              >
                {capacityHeroData.primaryCta.label}
              </Button>

              <Button
                variant="outlined"
                size="large"
                href={capacityHeroData.secondaryCta.href}
                sx={(theme) => ({
                  px: 3.5,
                  py: 1.6,
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    transform: 'translateY(-1px)',
                  },
                })}
              >
                {capacityHeroData.secondaryCta.label}
              </Button>
            </Stack>

            {/* Key Stat Pills */}
            <Stack direction="row" spacing={1.5} sx={{ pt: 1, flexWrap: 'wrap', gap: 1.5 }}>
              {capacityHeroData.stats.map((stat, idx) => (
                <StatBadgePill key={idx}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'accent.main' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.8125rem' }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.text.secondary, fontSize: '0.78125rem' })}>
                      • {stat.sublabel}
                    </Typography>
                  </Box>
                </StatBadgePill>
              ))}
            </Stack>
          </Stack>
        </Grid>

        {/* Right Column: Hero Visual Frame with Glassmorphism Overlays */}
        <Grid size={{ xs: 12, md: 5, lg: 6 }}>
          <Box sx={{ position: 'relative', px: { xs: 0, sm: 2, md: 0 } }}>
            <VisualFrame>
              <VisualImage
                role="img"
                aria-label="WinVinaya facilitators conducting trainer enablement and organizational accessibility adoption sessions."
              >
                {/* Live Adoption Roadmap Card */}
                <InteractiveAdoptionPreview>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <TrendingUpOutlinedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.825rem' }}>
                        In-House Adoption Framework
                      </Typography>
                    </Stack>
                    <Box
                      sx={(theme) => ({
                        px: 1,
                        py: 0.25,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.15),
                        color: theme.palette.accent.dark,
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                      })}
                    >
                      LONG-TERM VALUE
                    </Box>
                  </Stack>

                  <Grid container spacing={1} sx={{ pt: 0.5 }}>
                    <Grid size={{ xs: 6 }}>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                        <SchoolOutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                          Trainer Enablement
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                        <Diversity3OutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                          Inclusion Culture
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                        <HandshakeOutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                          Structured Handover
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                        <TerminalOutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                          Full-Stack Skills
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </InteractiveAdoptionPreview>
              </VisualImage>
            </VisualFrame>

            {/* Glassmorphism Overlay Card 1: Top Left */}
            <GlassCard
              floatDelay="0s"
              sx={{
                top: { xs: 16, sm: 24 },
                left: { xs: 12, sm: -20, md: -28 },
                maxWidth: 270,
              }}
            >
              <Box
                sx={(theme) => ({
                  p: 1,
                  borderRadius: Number(theme.shape.borderRadius) * 1.2,
                  bgcolor: alpha(theme.palette.accent.main, 0.14),
                  color: theme.palette.accent.dark,
                  display: 'flex',
                })}
              >
                <CastForEducationOutlinedIcon sx={{ fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                  EnAble India Track
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                  Multi-Course Trainer Enablement
                </Typography>
              </Box>
            </GlassCard>

            {/* Glassmorphism Overlay Card 2: Bottom Right */}
            <GlassCard
              floatDelay="2s"
              sx={{
                bottom: { xs: 16, sm: 32 },
                right: { xs: 12, sm: -16, md: -20 },
                maxWidth: 280,
              }}
            >
              <Box
                sx={(theme) => ({
                  p: 1,
                  borderRadius: Number(theme.shape.borderRadius) * 1.2,
                  bgcolor: alpha(theme.palette.primary.main, 0.14),
                  color: theme.palette.primary.main,
                  display: 'flex',
                })}
              >
                <AutoFixHighOutlinedIcon sx={{ fontSize: 26 }} />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                  Sustainable In-House
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                  Skills That Stick Long-Term
                </Typography>
              </Box>
            </GlassCard>

            {/* Corner Badge */}
            <Box
              sx={(theme) => ({
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 1,
                position: 'absolute',
                top: -16,
                right: 24,
                zIndex: 3,
                px: 2,
                py: 0.75,
                borderRadius: 99,
                bgcolor: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.1)}`,
              })}
            >
              <TrendingUpOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '0.04em' }}>
                SUSTAINED IN-HOUSE CAPABILITY
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>

    {/* Trust Credentials Bar */}
    <TrustBarSection>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {TRUST_CREDENTIALS.map((credential) => (
            <Grid key={credential.title} size={{ xs: 12, md: 4 }}>
              <TrustCard>
                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 1.4,
                    bgcolor: alpha(theme.palette[credential.tone].main, 0.12),
                    color: theme.palette[credential.tone].main,
                    display: 'flex',
                    flexShrink: 0,
                    border: `1px solid ${alpha(theme.palette[credential.tone].main, 0.2)}`,
                  })}
                >
                  <credential.icon sx={{ fontSize: 26 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5, fontSize: '0.9375rem' }}>
                    {credential.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                    {credential.detail}
                  </Typography>
                </Box>
              </TrustCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TrustBarSection>
  </Root>
)
