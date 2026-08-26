import { alpha, styled, keyframes } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Button, Chip } from '../../components'
import { careersHeroData } from '../../data/careers/careers'

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
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(10),
  },
}))

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
  backgroundColor: theme.palette.primary.main,
  animation: `${pulseGlow} 2s ease-in-out infinite`,
}))

const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 45%, ${theme.palette.accent.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}))

export const CareersHeroSection = () => (
  <Root aria-labelledby="careers-hero-heading">
    <AmbientGlow aria-hidden="true" />
    <GridPattern aria-hidden="true" />

    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
      <Stack spacing={3.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Chip
          icon={<PulseDot />}
          label={careersHeroData.eyebrow}
          variant="outlined"
          size="medium"
          sx={(theme) => ({
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.78125rem',
            fontWeight: 700,
            color: theme.palette.primary.main,
            borderColor: alpha(theme.palette.primary.main, 0.4),
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            backdropFilter: 'blur(8px)',
            px: 0.75,
            py: 0.5,
          })}
        />

        <Typography
          id="careers-hero-heading"
          variant="display"
          component="h1"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4.25rem' },
            lineHeight: { xs: 1.15, sm: 1.12, md: 1.08 },
            fontWeight: 800,
            letterSpacing: '-0.02em',
            maxWidth: 900,
          })}
        >
          {careersHeroData.headline} <GradientText>{careersHeroData.headlineHighlight}</GradientText>
        </Typography>

        <Typography
          variant="body1"
          sx={(theme) => ({
            fontSize: { xs: '1.0625rem', sm: '1.1875rem' },
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
            fontWeight: 450,
            maxWidth: 780,
          })}
        >
          {careersHeroData.subheadline}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
          <Button
            tone="primary"
            variant="contained"
            size="large"
            href="#internships"
            endIcon={<ArrowDownwardIcon />}
            sx={{
              px: 3.5,
              py: 1.4,
              fontSize: '1rem',
              fontWeight: 700,
            }}
          >
            Explore College Internships
          </Button>

          <Button
            tone="primary"
            variant="outlined"
            size="large"
            href="#open-roles"
            sx={{
              px: 3,
              py: 1.4,
              fontSize: '1rem',
              fontWeight: 700,
            }}
          >
            Full-Time Positions
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
