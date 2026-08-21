import { alpha, styled, keyframes } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import GroupsIcon from '@mui/icons-material/Groups'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import TimelineIcon from '@mui/icons-material/Timeline'
import { Chip, Timeline, type TimelineItem } from '../../components'
import { storyHero } from '../../data'
import heroBg from '../../assets/hero-bg.jpg'
import heroBgMobile from '../../assets/hero-bg-mobile.jpg'

// Keyframe animations for floating and pulse effects
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

// Ambient background lighting
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
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.light, 0.15)} 0%, ${alpha(theme.palette.accent.main, 0.03)} 45%, transparent 70%)`,
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
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.14)} 0%, ${alpha(theme.palette.primary.main, 0.03)} 45%, transparent 70%)`,
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

// Gradient Text Highlight driven by theme palette tokens
const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 45%, ${theme.palette.accent.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}))

// Hero visual image frame
const VisualFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.8,
  padding: theme.spacing(1.25),
  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.accent.light, 0.08)} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 24px 48px -12px ${alpha(theme.palette.secondary.dark, 0.12)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
}))

const VisualImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 380,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundImage: `url(${heroBgMobile})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    height: 440,
  },
  [theme.breakpoints.up('md')]: {
    height: 480,
    backgroundImage: `url(${heroBg})`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(180deg, transparent 65%, ${alpha(theme.palette.common.black, 0.25)} 100%)`,
  },
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
  backgroundColor: alpha(theme.palette.background.paper, 0.92),
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
  boxShadow: `0 14px 32px ${alpha(theme.palette.text.primary, 0.12)}, 0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`,
  animation: `${floatAnimation} 4s ease-in-out infinite`,
  animationDelay: floatDelay || '0s',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    borderColor: theme.palette.accent.main,
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.accent.main, 0.18)}`,
  },
}))

const timelineItems: TimelineItem[] = storyHero.milestones.map((milestone) => ({
  id: milestone.year,
  date: milestone.year,
  title: milestone.label,
  description: milestone.description,
}))

/** Page hero: founding story narrative with hero image frame, floating glass cards, and reusable horizontal timeline. */
export const StoryHeroSection = () => (
  <Root aria-labelledby="story-hero-heading">
    <AmbientGlow aria-hidden="true" />
    <GridPattern aria-hidden="true" />

    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 10 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Grid container spacing={{ xs: 5, md: 6, lg: 8 }} sx={{ alignItems: 'center' }}>
          {/* Left Column: Story Content */}
          <Grid size={{ xs: 12, md: 7, lg: 6 }}>
            <Stack spacing={3.5}>
              <Chip
                icon={<PulseDot />}
                label={storyHero.eyebrow}
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
                id="story-hero-heading"
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
                {storyHero.heading.split(' ')[0]} {storyHero.heading.split(' ')[1]}{' '}
                <GradientText>{storyHero.heading.split(' ').slice(2).join(' ')}</GradientText>
              </Typography>

              <Typography
                variant="body1"
                sx={(theme) => ({
                  fontSize: { xs: '1.0625rem', sm: '1.1875rem' },
                  lineHeight: 1.75,
                  color: theme.palette.text.secondary,
                  fontWeight: 450,
                })}
              >
                {storyHero.body}
              </Typography>
            </Stack>
          </Grid>

          {/* Right Column: Hero Visual Frame with Glassmorphism Overlays */}
          <Grid size={{ xs: 12, md: 5, lg: 6 }}>
            <Box sx={{ position: 'relative', px: { xs: 0, sm: 2, md: 0 } }}>
              <VisualFrame>
                <VisualImage
                  role="img"
                  aria-label="WinVinaya founders and inclusive technology team working on accessibility auditing in a modern office."
                />
              </VisualFrame>

              {/* Glassmorphism Overlay Card 1: Top Badge */}
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
                  <VerifiedUserIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                    Founded 2013
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                    A Decade of Inclusive Excellence
                  </Typography>
                </Box>
              </GlassCard>

              {/* Glassmorphism Overlay Card 2: Bottom Badge */}
              <GlassCard
                floatDelay="2s"
                sx={{
                  bottom: { xs: 16, sm: 28 },
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
                  <GroupsIcon sx={{ fontSize: 26 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                    50%+ PwD Team
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                    Lived-Experience Auditing Pioneers
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
                  border: `1px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                  boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.1)}`,
                })}
              >
                <TaskAltIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '0.04em' }}>
                  PURPOSE-DRIVEN INNOVATION
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Horizontal Timeline Section using shared Timeline component */}
        <Box sx={{ pt: { xs: 2, md: 4 } }}>
          <Stack spacing={1.5} sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'accent.main' }}>
              <TimelineIcon fontSize="small" />
              <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                EVOLUTION MILESTONES
              </Typography>
            </Stack>
          </Stack>
          <Timeline orientation="horizontal" items={timelineItems} />
        </Box>
      </Stack>
    </Container>
  </Root>
)
