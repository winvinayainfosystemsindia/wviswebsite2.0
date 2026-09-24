import { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import { Avatar, Button, SectionHeading } from '../../components'
import { impact } from '../../data'

const STAT_COLOR_SCHEMES = ['primary', 'accent', 'secondary', 'info'] as const

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    width: '450px',
    height: '450px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const TestimonialSpotlightCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  padding: theme.spacing(4.5),
  borderRadius: 18,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 10px 30px -6px ${alpha(theme.palette.text.primary, 0.05)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.4),
    boxShadow: `0 16px 36px -8px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const SectorTabButton = styled('button')<{ active: boolean }>(({ theme, active }) => ({
  padding: '6px 14px',
  borderRadius: 8,
  fontSize: '0.8125rem',
  fontWeight: 600,
  border: active
    ? `1.5px solid ${theme.palette.accent.main}`
    : `1px solid ${theme.palette.divider}`,
  backgroundColor: active
    ? alpha(theme.palette.accent.main, 0.12)
    : theme.palette.mode === 'light'
      ? alpha(theme.palette.background.default, 0.6)
      : alpha(theme.palette.background.paper, 0.5),
  color: active ? theme.palette.accent.main : theme.palette.text.secondary,
  cursor: 'pointer',
  transition: theme.transitions.create(['all']),
  '&:hover': {
    backgroundColor: alpha(theme.palette.accent.main, 0.1),
    color: theme.palette.accent.main,
    borderColor: theme.palette.accent.main,
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.accent.main}`,
    outlineOffset: 2,
  },
}))

const StatBentoCard = styled(Box)<{ colorScheme: 'primary' | 'accent' | 'secondary' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      primary: theme.palette.primary.main,
      accent: theme.palette.accent.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
    }
    const targetColor = colorMap[colorScheme]

    return {
      padding: theme.spacing(3.5, 3),
      borderRadius: 16,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.03)}`,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(1.25),
      position: 'relative',
      overflow: 'hidden',
      transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3.5px',
        backgroundColor: targetColor,
      },
      '&:hover': {
        borderColor: alpha(targetColor, 0.5),
        boxShadow: `0 12px 28px -6px ${alpha(targetColor, 0.16)}`,
        transform: 'translateY(-3px)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2.75, 2.25),
      },
    }
  }
)

const TrustStrip = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2.5, 3.5),
  borderRadius: 14,
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.main, 0.035) : alpha(theme.palette.background.paper, 0.7),
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}))

export const ImpactSection = () => {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0)
  const activeTestimonial = impact.testimonials[selectedTestimonialIndex] || impact.testimonials[0]

  return (
    <SectionWrapper aria-labelledby="impact-heading">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Section Heading */}
          <SectionHeading
            headingId="impact-heading"
            eyebrow={impact.eyebrow}
            heading={impact.heading}
            description={impact.subheading}
            maxWidth={840}
          />

          {/* Main Bento Layout: Spotlight Testimonial (Left) + 4 Stat Tiles (Right) */}
          <Grid container spacing={{ xs: 3.5, lg: 4 }} sx={{ width: '100%', alignItems: 'stretch' }}>
            {/* Left Column: Interactive Case & Testimonial Spotlight */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <TestimonialSpotlightCard>
                <Stack spacing={3}>
                  {/* Top Header: Sector Tabs & Stars */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1.5,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {impact.testimonials.map((t, idx) => (
                        <SectorTabButton
                          key={t.id}
                          active={idx === selectedTestimonialIndex}
                          onClick={() => setSelectedTestimonialIndex(idx)}
                          type="button"
                        >
                          {t.sector}
                        </SectorTabButton>
                      ))}
                    </Box>

                    {/* 5-Star Rating Badge */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 999,
                        bgcolor: (theme) => alpha(theme.palette.accent.main, 0.1),
                        color: 'accent.main',
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <StarRoundedIcon key={i} sx={{ fontSize: '1.05rem', color: 'accent.main' }} />
                      ))}
                    </Box>
                  </Box>

                  {/* Quote Body with Icon */}
                  <Box sx={{ position: 'relative', pl: { xs: 0, sm: 2 } }}>
                    <FormatQuoteRoundedIcon
                      sx={{
                        color: (theme) => alpha(theme.palette.accent.main, 0.25),
                        fontSize: '3rem',
                        position: 'absolute',
                        top: -15,
                        left: -15,
                        display: { xs: 'none', sm: 'block' },
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="blockquote"
                      sx={{
                        fontStyle: 'italic',
                        fontWeight: 500,
                        m: 0,
                        lineHeight: 1.7,
                        fontSize: { xs: '1rem', md: '1.085rem' },
                        color: 'text.primary',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      "{activeTestimonial.quote}"
                    </Typography>
                  </Box>

                  {/* Client Profile Info */}
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', pt: 1 }}>
                    <Avatar name={activeTestimonial.name} size="md" />
                    <Stack spacing={0.25}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {activeTestimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                        {activeTestimonial.role} • {activeTestimonial.organization}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                {/* Delivered Outcomes Pill Strip */}
                <Box
                  sx={{
                    pt: 2.25,
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 1.25,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'text.secondary',
                      fontSize: '0.71875rem',
                      mr: 0.5,
                    }}
                  >
                    Verified Outcomes:
                  </Typography>
                  {activeTestimonial.outcomes.map((out, oIdx) => (
                    <Box
                      key={oIdx}
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.6,
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1,
                        fontSize: '0.78125rem',
                        fontWeight: 600,
                        bgcolor: alpha(theme.palette.accent.main, 0.08),
                        color: theme.palette.mode === 'light' ? theme.palette.accent.dark : theme.palette.accent.light,
                        border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
                      })}
                    >
                      <CheckCircleRoundedIcon sx={{ fontSize: '0.875rem', color: 'accent.main' }} />
                      <span>{out}</span>
                    </Box>
                  ))}
                </Box>
              </TestimonialSpotlightCard>
            </Grid>

            {/* Right Column: 4-Tile Stat Bento Grid */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Grid container spacing={2.5} sx={{ height: '100%' }}>
                {impact.stats.map((stat, idx) => {
                  const scheme = STAT_COLOR_SCHEMES[idx % STAT_COLOR_SCHEMES.length]

                  return (
                    <Grid key={stat.id} size={{ xs: 12, sm: 6 }} sx={{ display: 'flex' }}>
                      <StatBentoCard colorScheme={scheme}>
                        <Stack spacing={0.75}>
                          <Typography
                            variant="h3"
                            sx={(theme) => {
                              const colorMap = {
                                primary: theme.palette.primary.main,
                                accent: theme.palette.accent.main,
                                secondary: theme.palette.secondary.main,
                                info: theme.palette.info.main,
                              }
                              return {
                                fontWeight: 800,
                                fontSize: { xs: '2rem', sm: '2.25rem' },
                                color: colorMap[scheme],
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                              }
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.96875rem', lineHeight: 1.3 }}
                          >
                            {stat.label}
                          </Typography>
                        </Stack>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ lineHeight: 1.45, fontSize: '0.78125rem', display: 'block' }}
                        >
                          {stat.sublabel}
                        </Typography>
                      </StatBentoCard>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>

          {/* Standards & Industry Assurance Strip */}
          <TrustStrip>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <VerifiedUserOutlinedIcon sx={{ color: 'primary.main', fontSize: '1.35rem' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.875rem' }}>
                Global Regulatory & Quality Standards
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

          {/* Action Button Group */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'center' }}>
            <Button
              tone="primary"
              variant="contained"
              href={impact.cta.href}
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3.5, py: 1.35, fontWeight: 600 }}
            >
              {impact.cta.label}
            </Button>
            <Button
              tone="accent"
              variant="outlined"
              href={impact.ctaAudit.href}
              size="large"
              sx={{ px: 3, py: 1.35, fontWeight: 600 }}
            >
              {impact.ctaAudit.label}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}
