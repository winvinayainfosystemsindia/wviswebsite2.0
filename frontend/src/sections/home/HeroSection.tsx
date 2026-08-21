import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Chip } from '../../components'
import { heroContent } from '../../data'
import heroBg from '../../assets/hero-bg.jpg'
import heroBgMobile from '../../assets/hero-bg-mobile.jpg'

/** Full-bleed dark hero surface (fixed brand-dark, same in both site color modes). */
const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  isolation: 'isolate',
  backgroundColor: theme.palette.inverse.main,
}))

/** Photograph of assistive/braille technology in use — the literal, on-brand hero image. */
const Photo = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  backgroundImage: `url(${heroBgMobile})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: '65% center',
  },
}))

/** Warm duotone grade: multiplies the brand-dark brown over the (cool-toned) photo so it reads on-brand. */
const PhotoGrade = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  backgroundColor: alpha(theme.palette.inverse.main, 0.62),
  mixBlendMode: 'multiply',
}))

/** Scrim guaranteeing AA/AAA text contrast for the headline zone regardless of the photo behind it. */
const Scrim = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background: `linear-gradient(100deg, ${theme.palette.inverse.main} 0%, ${theme.palette.inverse.main} 24%, ${alpha(theme.palette.inverse.main, 0.88)} 42%, ${alpha(theme.palette.inverse.main, 0.35)} 68%, ${alpha(theme.palette.inverse.main, 0.55)} 100%), linear-gradient(180deg, ${alpha(theme.palette.common.black, 0.15)} 0%, transparent 24%, transparent 66%, ${alpha(theme.palette.inverse.main, 0.6)} 100%)`,
  [theme.breakpoints.down('md')]: {
    background: `linear-gradient(180deg, ${alpha(theme.palette.inverse.main, 0.62)} 0%, ${alpha(theme.palette.inverse.main, 0.92)} 58%, ${theme.palette.inverse.main} 100%)`,
  },
}))

const ShowcasePanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  backgroundColor: alpha(theme.palette.inverse.main, 0.4),
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.14)}`,
  boxShadow: `0 32px 64px -16px ${alpha(theme.palette.common.black, 0.55)}`,
}))

const ShowcaseBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 2.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'background-color']),
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: alpha(theme.palette.common.white, 0.22),
    backgroundColor: alpha(theme.palette.common.white, 0.08),
  },
}))

const BadgePill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 1.75),
  borderRadius: 999,
  backgroundColor: alpha(theme.palette.common.white, 0.06),
  border: `1px solid ${alpha(theme.palette.common.white, 0.16)}`,
}))

export const HeroSection = () => (
  <Root aria-labelledby="hero-heading">
    <Photo role="img" aria-label="A person's hands reading a braille display connected to a keyboard, using assistive technology." />
    <PhotoGrade aria-hidden="true" />
    <Scrim aria-hidden="true" />

    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 9, md: 13 } }}>
      <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3.5} sx={{ maxWidth: 660 }}>
            <Chip
              label={heroContent.eyebrow}
              variant="outlined"
              size="small"
              sx={(theme) => ({
                alignSelf: 'flex-start',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: theme.palette.accent.light,
                borderColor: alpha(theme.palette.accent.light, 0.5),
                backgroundColor: alpha(theme.palette.common.white, 0.05),
              })}
            />
            <Typography
              id="hero-heading"
              variant="display"
              component="h1"
              sx={{ color: 'inverse.contrastText' }}
            >
              {heroContent.headline}
            </Typography>
            <Typography
              variant="body1"
              sx={(theme) => ({
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: alpha(theme.palette.inverse.contrastText, 0.82),
              })}
            >
              {heroContent.subheadline}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button tone="accent" variant="contained" href={heroContent.primaryCta.href} size="large" endIcon={<ArrowForwardIcon />}>
                {heroContent.primaryCta.label}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={heroContent.secondaryCta.href}
                sx={(theme) => ({
                  color: theme.palette.inverse.contrastText,
                  borderColor: alpha(theme.palette.common.white, 0.4),
                  '&:hover': {
                    borderColor: theme.palette.common.white,
                    backgroundColor: alpha(theme.palette.common.white, 0.08),
                  },
                })}
              >
                {heroContent.secondaryCta.label}
              </Button>
            </Stack>

            {/* Key feature pills */}
            <Stack direction="row" spacing={1.5} sx={{ pt: 1, flexWrap: 'wrap', gap: 1.5 }}>
              {heroContent.badges.map((badge, idx) => (
                <BadgePill key={idx}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.light' }} />
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'inverse.contrastText' }}>
                    {badge.label}
                  </Typography>
                  <Typography variant="caption" sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.65) })}>
                    • {badge.sublabel}
                  </Typography>
                </BadgePill>
              ))}
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <ShowcasePanel>
            <ShowcaseBadge>
              <Box
                sx={(theme) => ({
                  p: 1.25,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.light, 0.18),
                  color: theme.palette.primary.light,
                  display: 'flex',
                })}
              >
                <CheckCircleOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'inverse.contrastText' }}>
                  WCAG 2.1 & 2.2 AA / AAA Compliance
                </Typography>
                <Typography variant="caption" sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.68) })}>
                  50+ Checkpoints Verified for Web & Mobile Apps
                </Typography>
              </Box>
            </ShowcaseBadge>

            <ShowcaseBadge>
              <Box
                sx={(theme) => ({
                  p: 1.25,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.accent.light, 0.18),
                  color: theme.palette.accent.light,
                  display: 'flex',
                })}
              >
                <RecordVoiceOverOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'inverse.contrastText' }}>
                  Lived-Experience Assistive Tech Validation
                </Typography>
                <Typography variant="caption" sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.68) })}>
                  Tested by NVDA, JAWS, VoiceOver & TalkBack Experts
                </Typography>
              </Box>
            </ShowcaseBadge>

            <ShowcaseBadge>
              <Box
                sx={(theme) => ({
                  p: 1.25,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.info.light, 0.18),
                  color: theme.palette.info.light,
                  display: 'flex',
                })}
              >
                <ShieldOutlinedIcon />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'inverse.contrastText' }}>
                  Enterprise VPAT & ACR Documentation
                </Typography>
                <Typography variant="caption" sx={(theme) => ({ color: alpha(theme.palette.inverse.contrastText, 0.68) })}>
                  Audit-Ready Voluntary Product Accessibility Templates
                </Typography>
              </Box>
            </ShowcaseBadge>
          </ShowcasePanel>
        </Grid>
      </Grid>
    </Container>
  </Root>
)
