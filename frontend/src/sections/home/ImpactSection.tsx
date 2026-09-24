import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import { Button, SectionHeading } from '../../components'
import { impact } from '../../data'

const METRIC_THEMES = ['primary', 'accent', 'secondary', 'info'] as const

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FCFAF6' : '#14100D',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '15%',
    width: '450px',
    height: '450px',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '10%',
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const MetricCard = styled(Box)<{ colorScheme: 'primary' | 'accent' | 'secondary' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      primary: theme.palette.primary.main,
      accent: theme.palette.accent.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
    }
    const targetColor = colorMap[colorScheme]

    return {
      padding: theme.spacing(4, 3.5),
      borderRadius: 18,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: `0 6px 20px -4px ${alpha(theme.palette.text.primary, 0.04)}`,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(2.5),
      position: 'relative',
      overflow: 'hidden',
      transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: targetColor,
      },
      '&:hover': {
        borderColor: alpha(targetColor, 0.45),
        boxShadow: `0 14px 32px -6px ${alpha(targetColor, 0.16)}`,
        transform: 'translateY(-4px)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 2.5),
      },
    }
  }
)

const HighlightShelf = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3.5, 4),
  borderRadius: 18,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.85),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.03)}`,
}))

const TrustStrip = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2.5, 3.5),
  borderRadius: 14,
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.main, 0.03) : alpha(theme.palette.background.paper, 0.7),
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}))

export const ImpactSection = () => (
  <SectionWrapper aria-labelledby="impact-heading">
    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        {/* Section Heading */}
        <SectionHeading
          headingId="impact-heading"
          eyebrow={impact.eyebrow}
          heading={impact.heading}
          description={impact.subheading}
          maxWidth={820}
        />

        {/* 4 Dedicated Large Metric Cards Grid */}
        <Grid container spacing={3} sx={{ width: '100%', alignItems: 'stretch' }}>
          {impact.metrics.map((metric, idx) => {
            const scheme = METRIC_THEMES[idx % METRIC_THEMES.length]

            return (
              <Grid key={metric.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
                <MetricCard colorScheme={scheme}>
                  <Stack spacing={1.5}>
                    {/* Top Category & Trend Tag */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box
                        sx={(theme) => ({
                          px: 1,
                          py: 0.35,
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
                        {metric.category}
                      </Box>

                      <Box
                        sx={(theme) => ({
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          px: 1,
                          py: 0.35,
                          borderRadius: 999,
                          fontSize: '0.71875rem',
                          fontWeight: 700,
                          bgcolor: alpha(theme.palette[scheme].main, 0.1),
                          color: theme.palette[scheme].main,
                          border: `1px solid ${alpha(theme.palette[scheme].main, 0.2)}`,
                        })}
                      >
                        <TrendingUpRoundedIcon sx={{ fontSize: '0.875rem' }} />
                        {metric.trend}
                      </Box>
                    </Box>

                    {/* Metric Value */}
                    <Typography
                      variant="h2"
                      sx={(theme) => ({
                        fontWeight: 800,
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        color: theme.palette[scheme].main,
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        pt: 1,
                      })}
                    >
                      {metric.value}
                    </Typography>

                    {/* Metric Label */}
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1.0625rem', lineHeight: 1.3 }}>
                      {metric.label}
                    </Typography>
                  </Stack>

                  {/* Sublabel */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.55, fontSize: '0.84375rem', borderTop: (theme) => `1px solid ${theme.palette.divider}`, pt: 1.5 }}
                  >
                    {metric.sublabel}
                  </Typography>
                </MetricCard>
              </Grid>
            )
          })}
        </Grid>

        {/* 3-Pillar Enterprise Guarantee Shelf */}
        <HighlightShelf>
          <Grid container spacing={3}>
            {impact.highlights.map((item, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box
                    sx={(theme) => ({
                      width: 38,
                      height: 38,
                      borderRadius: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: alpha(theme.palette.accent.main, 0.12),
                      color: theme.palette.accent.main,
                      flexShrink: 0,
                    })}
                  >
                    <CheckCircleRoundedIcon sx={{ fontSize: '1.25rem' }} />
                  </Box>
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.96875rem' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.84375rem', lineHeight: 1.55 }}>
                      {item.description}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </HighlightShelf>

        {/* Standards & Trust Strip */}
        <TrustStrip>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <VerifiedUserOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.35rem' }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.875rem' }}>
              Global Quality & Regulatory Conformance
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            {impact.trustBadges.map((badge, bIdx) => (
              <Box
                key={bIdx}
                sx={(theme) => ({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 1.25,
                  py: 0.45,
                  borderRadius: 999,
                  fontSize: '0.78125rem',
                  fontWeight: 600,
                  bgcolor: alpha(theme.palette.text.primary, 0.04),
                  color: 'text.secondary',
                  border: `1px solid ${theme.palette.divider}`,
                })}
              >
                <AutoAwesomeOutlinedIcon sx={{ fontSize: '0.8125rem', color: 'accent.main' }} />
                <span>{badge}</span>
              </Box>
            ))}
          </Box>
        </TrustStrip>

        {/* CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Button tone="primary" variant="outlined" href={impact.cta.href} size="large" endIcon={<ArrowForwardIcon />}>
            {impact.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </SectionWrapper>
)
