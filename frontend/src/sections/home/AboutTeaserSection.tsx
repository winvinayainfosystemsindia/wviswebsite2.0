import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import { Button, SectionHeading } from '../../components'
import { aboutTeaser } from '../../data'

const PILLAR_ICONS: Record<string, { icon: ReactNode; color: 'primary' | 'accent' | 'secondary' | 'info' }> = {
  'lived-experience': {
    icon: <VisibilityOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'primary',
  },
  'enterprise-ai': {
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'accent',
  },
  'compliance-assurance': {
    icon: <GppGoodOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'secondary',
  },
  'social-impact': {
    icon: <VolunteerActivismOutlinedIcon sx={{ fontSize: '1.65rem' }} />,
    color: 'info',
  },
}

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light' ? '#FCFAF6' : '#171310',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '15%',
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: '10%',
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.06)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const StoryCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  borderRadius: 16,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.85),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 8px 24px -4px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.35),
    boxShadow: `0 14px 32px -6px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const HighlightQuote = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  gap: theme.spacing(1.75),
  padding: theme.spacing(2.25, 2.5),
  borderRadius: 12,
  backgroundColor: alpha(theme.palette.accent.main, 0.06),
  borderLeft: `4px solid ${theme.palette.accent.main}`,
  borderTop: `1px solid ${alpha(theme.palette.accent.main, 0.12)}`,
  borderRight: `1px solid ${alpha(theme.palette.accent.main, 0.12)}`,
  borderBottom: `1px solid ${alpha(theme.palette.accent.main, 0.12)}`,
}))

const PillarBentoCard = styled(Box)<{ colorScheme: 'primary' | 'accent' | 'secondary' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      primary: theme.palette.primary.main,
      accent: theme.palette.accent.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
    }
    const targetColor = colorMap[colorScheme]

    return {
      position: 'relative',
      height: '100%',
      padding: theme.spacing(3),
      borderRadius: 16,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.85),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: `0 6px 18px -4px ${alpha(theme.palette.text.primary, 0.04)}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(2.25),
      transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
      overflow: 'hidden',
      '&:hover': {
        borderColor: alpha(targetColor, 0.45),
        boxShadow: `0 12px 28px -6px ${alpha(targetColor, 0.14)}`,
        transform: 'translateY(-3px)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2.5),
      },
    }
  }
)

const IconWrapper = styled(Box)<{ colorScheme: 'primary' | 'accent' | 'secondary' | 'info' }>(
  ({ theme, colorScheme }) => {
    const colorMap = {
      primary: {
        bg: alpha(theme.palette.primary.main, 0.1),
        text: theme.palette.primary.main,
        border: alpha(theme.palette.primary.main, 0.2),
      },
      accent: {
        bg: alpha(theme.palette.accent.main, 0.12),
        text: theme.palette.accent.main,
        border: alpha(theme.palette.accent.main, 0.25),
      },
      secondary: {
        bg: alpha(theme.palette.secondary.main, 0.1),
        text: theme.palette.secondary.main,
        border: alpha(theme.palette.secondary.main, 0.2),
      },
      info: {
        bg: alpha(theme.palette.info.main, 0.1),
        text: theme.palette.info.main,
        border: alpha(theme.palette.info.main, 0.2),
      },
    }
    const current = colorMap[colorScheme]

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      backgroundColor: current.bg,
      color: current.text,
      border: `1px solid ${current.border}`,
      flexShrink: 0,
    }
  }
)

const TagPill = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  padding: '5px 11px',
  borderRadius: 8,
  fontSize: '0.8125rem',
  fontWeight: 600,
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.primary.main, 0.07) : alpha(theme.palette.primary.main, 0.14),
  color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
}))

const StatsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: 16,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 6px 20px -4px ${alpha(theme.palette.text.primary, 0.04)}`,
  overflow: 'hidden',
}))

const StatsHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 3.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.accent.main, 0.04) : alpha(theme.palette.accent.main, 0.08),
}))

const StatColumn = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3.5, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(0.75),
  height: '100%',
  transition: theme.transitions.create(['background-color']),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.025),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5, 2),
  },
}))

export const AboutTeaserSection = () => (
  <SectionWrapper aria-labelledby="who-we-are-heading">
    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 7 }} sx={{ alignItems: 'center' }}>
        {/* Section Header */}
        <SectionHeading
          headingId="who-we-are-heading"
          eyebrow={aboutTeaser.eyebrow}
          heading={aboutTeaser.heading}
          description={aboutTeaser.subheading}
          maxWidth={820}
        />

        {/* Main Interactive Bento Layout */}
        <Grid container spacing={{ xs: 3.5, lg: 4 }} sx={{ width: '100%', alignItems: 'stretch' }}>
          {/* Left Column: Narrative Hero Story Card */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <StoryCard>
              <Stack spacing={2.75}>
                {/* Header Badge */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1.5,
                      bgcolor: alpha(theme.palette.accent.main, 0.1),
                      color: theme.palette.accent.dark,
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                    })}
                  >
                    <VerifiedOutlinedIcon sx={{ fontSize: '1rem', color: 'accent.main' }} />
                    {aboutTeaser.badge}
                  </Box>
                </Box>

                {/* Core Paragraphs for SEO & Client Attraction */}
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontSize: '1.03125rem', lineHeight: 1.75, fontWeight: 500 }}
                >
                  {aboutTeaser.storyParagraph1}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '0.9375rem', lineHeight: 1.7 }}
                >
                  {aboutTeaser.storyParagraph2}
                </Typography>

                {/* Impactful Quote Callout */}
                <HighlightQuote>
                  <FormatQuoteRoundedIcon
                    sx={{
                      color: 'accent.main',
                      fontSize: '1.75rem',
                      opacity: 0.85,
                      flexShrink: 0,
                      mt: -0.25,
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      lineHeight: 1.6,
                      fontSize: '0.90625rem',
                      fontStyle: 'italic',
                    }}
                  >
                    "{aboutTeaser.highlight}"
                  </Typography>
                </HighlightQuote>

                {/* Compliance & Standards Tags */}
                <Stack spacing={1.25} sx={{ pt: 0.5 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                    }}
                  >
                    Enterprise Compliance & Tech Frameworks:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.85 }}>
                    {aboutTeaser.complianceTags.map((tag) => (
                      <TagPill key={tag}>
                        <CheckCircleRoundedIcon sx={{ fontSize: '0.8125rem', color: 'primary.main' }} />
                        <span>{tag}</span>
                      </TagPill>
                    ))}
                  </Box>
                </Stack>
              </Stack>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{ pt: 2, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}
              >
                <Button
                  tone="accent"
                  variant="contained"
                  href={aboutTeaser.cta.href}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ py: 1.25, px: 2.75, fontWeight: 600 }}
                >
                  {aboutTeaser.cta.label}
                </Button>
                <Button
                  tone="primary"
                  variant="outlined"
                  href={aboutTeaser.ctaSecondary.href}
                  sx={{ py: 1.25, px: 2.25, fontWeight: 600 }}
                >
                  {aboutTeaser.ctaSecondary.label}
                </Button>
              </Stack>
            </StoryCard>
          </Grid>

          {/* Right Column: 4-Card Bento Pillar Grid */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Grid container spacing={2.5} sx={{ height: '100%' }}>
              {aboutTeaser.pillars.map((pillar) => {
                const conf = PILLAR_ICONS[pillar.id] || {
                  icon: <AutoAwesomeOutlinedIcon />,
                  color: 'primary',
                }

                return (
                  <Grid key={pillar.id} size={{ xs: 12, sm: 6 }} sx={{ display: 'flex' }}>
                    <PillarBentoCard colorScheme={conf.color}>
                      <Stack spacing={2}>
                        {/* Top Icon & Category Tag */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <IconWrapper colorScheme={conf.color}>{conf.icon}</IconWrapper>
                          <Box
                            sx={(theme) => ({
                              px: 1,
                              py: 0.35,
                              borderRadius: 1,
                              fontSize: '0.71875rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              bgcolor: alpha(theme.palette.text.primary, 0.05),
                              color: 'text.secondary',
                              border: `1px solid ${theme.palette.divider}`,
                            })}
                          >
                            {pillar.tag}
                          </Box>
                        </Box>

                        {/* Title & SEO-Rich Description */}
                        <Stack spacing={0.75}>
                          <Typography
                            component="h3"
                            variant="h6"
                            sx={{
                              fontSize: '1.0625rem',
                              fontWeight: 700,
                              color: 'text.primary',
                              lineHeight: 1.35,
                            }}
                          >
                            {pillar.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.6, fontSize: '0.875rem' }}
                          >
                            {pillar.description}
                          </Typography>
                        </Stack>
                      </Stack>

                      {/* Keywords Micro-tags for Visual Scannability & SEO */}
                      <Box
                        sx={{
                          pt: 1.25,
                          borderTop: (theme) => `1px dashed ${alpha(theme.palette.divider, 0.8)}`,
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 0.6,
                        }}
                      >
                        {pillar.keywords.map((kw) => (
                          <Typography
                            key={kw}
                            variant="caption"
                            sx={(theme) => ({
                              fontSize: '0.6875rem',
                              fontWeight: 600,
                              color: theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary',
                              bgcolor: alpha(theme.palette.background.default, 0.8),
                              px: 0.85,
                              py: 0.25,
                              borderRadius: 0.75,
                              border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                            })}
                          >
                            #{kw}
                          </Typography>
                        ))}
                      </Box>
                    </PillarBentoCard>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>

        {/* Clean, Unified Metric Strip */}
        <StatsContainer>
          <StatsHeader>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TrendingUpRoundedIcon sx={{ color: 'accent.main', fontSize: '1.25rem' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.875rem' }}>
                Enterprise Delivery & Social Impact Benchmark
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
              Trusted by industry leaders for bulletproof accessibility assurance
            </Typography>
          </StatsHeader>

          <Grid container>
            {aboutTeaser.stats.map((stat, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={(theme) => ({
                  borderRight: {
                    md: index < aboutTeaser.stats.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                    sm: index % 2 === 0 ? `1px solid ${theme.palette.divider}` : 'none',
                    xs: 'none',
                  },
                  borderBottom: {
                    md: 'none',
                    sm: index < 2 ? `1px solid ${theme.palette.divider}` : 'none',
                    xs: index < aboutTeaser.stats.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                  },
                })}
              >
                <StatColumn>
                  <Typography
                    variant="h4"
                    sx={(theme) => ({
                      fontWeight: 800,
                      fontSize: { xs: '1.875rem', md: '2.125rem' },
                      color:
                        index % 2 === 0
                          ? theme.palette.primary.main
                          : theme.palette.accent.main,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    })}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.9375rem', mt: 0.5 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ lineHeight: 1.4, fontSize: '0.8125rem', maxWidth: 220 }}
                  >
                    {stat.sublabel}
                  </Typography>
                </StatColumn>
              </Grid>
            ))}
          </Grid>
        </StatsContainer>
      </Stack>
    </Container>
  </SectionWrapper>
)
