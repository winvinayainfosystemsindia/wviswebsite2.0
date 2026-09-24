import { useState, type ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Button, SectionHeading } from '../../components'
import { servicesTeaser } from '../../data'

const SERVICE_ICONS: Record<string, { icon: ReactNode; color: 'accent' | 'primary' | 'secondary' }> = {
  'accessibility-audit-testing': {
    icon: <FactCheckOutlinedIcon sx={{ fontSize: '1.6rem' }} />,
    color: 'accent',
  },
  'document-accessibility-remediation': {
    icon: <DescriptionOutlinedIcon sx={{ fontSize: '1.6rem' }} />,
    color: 'accent',
  },
  'corporate-training': {
    icon: <SchoolOutlinedIcon sx={{ fontSize: '1.6rem' }} />,
    color: 'primary',
  },
  'microsoft-power-platform-solutions': {
    icon: <BoltOutlinedIcon sx={{ fontSize: '1.6rem' }} />,
    color: 'primary',
  },
  'agentic-ai-custom-application-development': {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: '1.6rem' }} />,
    color: 'primary',
  },
  'capacity-building-adoption': {
    icon: <GavelOutlinedIcon sx={{ fontSize: '1.6rem' }} />,
    color: 'secondary',
  },
}

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '5%',
    width: '450px',
    height: '450px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const FilterButton = styled('button')<{ active: boolean }>(({ theme, active }) => ({
  padding: '8px 18px',
  borderRadius: 999,
  fontSize: '0.875rem',
  fontWeight: 600,
  border: active
    ? `1.5px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.palette.divider}`,
  backgroundColor: active
    ? alpha(theme.palette.primary.main, 0.1)
    : theme.palette.mode === 'light'
      ? '#FFFFFF'
      : alpha(theme.palette.background.paper, 0.6),
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  cursor: 'pointer',
  transition: theme.transitions.create(['all']),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}))

const ServiceCard = styled('a')<{ cardTheme: 'accent' | 'primary' | 'secondary' }>(
  ({ theme, cardTheme }) => {
    const colorMap = {
      accent: theme.palette.accent.main,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
    }
    const targetColor = colorMap[cardTheme]

    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      padding: theme.spacing(3.5),
      borderRadius: 16,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
      border: `1px solid ${theme.palette.divider}`,
      textDecoration: 'none',
      color: theme.palette.text.primary,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: `0 4px 16px -2px ${alpha(theme.palette.text.primary, 0.04)}`,
      transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: 'transparent',
        transition: theme.transitions.create(['background-color']),
      },
      '&:hover': {
        borderColor: alpha(targetColor, 0.45),
        boxShadow: `0 14px 32px -6px ${alpha(targetColor, 0.16)}`,
        transform: 'translateY(-4px)',
        '&::before': {
          backgroundColor: targetColor,
        },
        '& .arrow-icon': {
          transform: 'translateX(5px)',
          color: targetColor,
        },
        '& .explore-text': {
          color: targetColor,
        },
      },
      '&:focus-visible': {
        outline: `3px solid ${alpha(targetColor, 0.7)}`,
        outlineOffset: 3,
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2.75),
      },
    }
  }
)

const IconBox = styled(Box)<{ iconTone: 'accent' | 'primary' | 'secondary' }>(
  ({ theme, iconTone }) => {
    const colorMap = {
      accent: {
        bg: alpha(theme.palette.accent.main, 0.1),
        color: theme.palette.accent.main,
        border: alpha(theme.palette.accent.main, 0.25),
      },
      primary: {
        bg: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main,
        border: alpha(theme.palette.primary.main, 0.25),
      },
      secondary: {
        bg: alpha(theme.palette.secondary.main, 0.1),
        color: theme.palette.secondary.main,
        border: alpha(theme.palette.secondary.main, 0.25),
      },
    }
    const current = colorMap[iconTone]

    return {
      width: 48,
      height: 48,
      borderRadius: 12,
      backgroundColor: current.bg,
      color: current.color,
      border: `1px solid ${current.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: theme.transitions.create(['transform']),
    }
  }
)

export const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'accessibility' | 'engineering' | 'training'>('all')

  const filteredServices = servicesTeaser.items.filter((item) => {
    if (activeFilter === 'all') return true
    return item.category === activeFilter
  })

  return (
    <SectionWrapper aria-labelledby="services-heading">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Stack spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'center' }}>
          {/* Section Heading */}
          <SectionHeading
            headingId="services-heading"
            eyebrow={servicesTeaser.eyebrow}
            heading={servicesTeaser.heading}
            description={servicesTeaser.subheading}
            maxWidth={820}
          />

          {/* Interactive Category Filter Pills */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1.25,
            }}
          >
            <FilterButton
              active={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              type="button"
            >
              All Solutions ({servicesTeaser.items.length})
            </FilterButton>
            <FilterButton
              active={activeFilter === 'accessibility'}
              onClick={() => setActiveFilter('accessibility')}
              type="button"
            >
              Accessibility & Compliance
            </FilterButton>
            <FilterButton
              active={activeFilter === 'engineering'}
              onClick={() => setActiveFilter('engineering')}
              type="button"
            >
              AI & Enterprise Tech
            </FilterButton>
            <FilterButton
              active={activeFilter === 'training'}
              onClick={() => setActiveFilter('training')}
              type="button"
            >
              Training & Governance
            </FilterButton>
          </Box>

          {/* Service Cards Grid */}
          <Grid container spacing={3} sx={{ width: '100%', alignItems: 'stretch' }}>
            {filteredServices.map((service) => {
              const conf = SERVICE_ICONS[service.id] || {
                icon: <FactCheckOutlinedIcon />,
                color: 'accent',
              }

              return (
                <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: 'flex' }}>
                  <ServiceCard
                    href={service.href}
                    cardTheme={conf.color}
                    aria-label={`${service.title} - ${service.categoryLabel}`}
                  >
                    <Stack spacing={2.5}>
                      {/* Top Bar: Icon + Badges */}
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <IconBox iconTone={conf.color}>{conf.icon}</IconBox>

                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          {service.badge && (
                            <Box
                              sx={(theme) => ({
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                px: 1.1,
                                py: 0.35,
                                borderRadius: 1,
                                fontSize: '0.71875rem',
                                fontWeight: 700,
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                color: theme.palette.primary.main,
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                              })}
                            >
                              <StarRoundedIcon sx={{ fontSize: '0.875rem' }} />
                              {service.badge}
                            </Box>
                          )}
                          {service.statBadge && (
                            <Box
                              sx={(theme) => ({
                                px: 1,
                                py: 0.35,
                                borderRadius: 1,
                                fontSize: '0.71875rem',
                                fontWeight: 600,
                                bgcolor: alpha(theme.palette.text.primary, 0.05),
                                color: 'text.secondary',
                                border: `1px solid ${theme.palette.divider}`,
                              })}
                            >
                              {service.statBadge}
                            </Box>
                          )}
                        </Stack>
                      </Box>

                      {/* Title & Description */}
                      <Stack spacing={1}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            lineHeight: 1.35,
                            color: 'text.primary',
                          }}
                        >
                          {service.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.875rem', lineHeight: 1.65 }}
                        >
                          {service.description}
                        </Typography>
                      </Stack>

                      {/* Deliverables List */}
                      <Stack spacing={0.75} sx={{ pt: 0.5 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'text.secondary',
                            fontSize: '0.71875rem',
                          }}
                        >
                          Key Deliverables:
                        </Typography>
                        <Stack spacing={0.6}>
                          {service.deliverables.map((item, idx) => (
                            <Box
                              key={idx}
                              sx={{ display: 'flex', alignItems: 'center', gap: 0.85 }}
                            >
                              <CheckCircleRoundedIcon
                                sx={(theme) => ({
                                  fontSize: '0.9375rem',
                                  color:
                                    conf.color === 'accent'
                                      ? theme.palette.accent.main
                                      : theme.palette.primary.main,
                                  flexShrink: 0,
                                })}
                              />
                              <Typography
                                variant="caption"
                                sx={{
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  fontSize: '0.8125rem',
                                }}
                              >
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Stack>
                    </Stack>

                    {/* Bottom Link with Arrow */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        pt: 2.5,
                        mt: 2.5,
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        className="explore-text"
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          color: 'text.primary',
                          transition: (theme) => theme.transitions.create(['color']),
                        }}
                      >
                        Explore Service Details
                      </Typography>
                      <ArrowForwardIcon
                        className="arrow-icon"
                        sx={(theme) => ({
                          fontSize: '1rem',
                          color: 'text.secondary',
                          transition: theme.transitions.create(['transform', 'color']),
                        })}
                      />
                    </Box>
                  </ServiceCard>
                </Grid>
              )
            })}
          </Grid>

          {/* Dual Action CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ pt: 2, alignItems: 'center' }}
          >
            <Button
              tone="primary"
              variant="contained"
              href={servicesTeaser.cta.href}
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3.5, py: 1.4, fontWeight: 600 }}
            >
              {servicesTeaser.cta.label}
            </Button>
            <Button
              tone="accent"
              variant="outlined"
              href={servicesTeaser.ctaAudit.href}
              size="large"
              sx={{ px: 3, py: 1.4, fontWeight: 600 }}
            >
              {servicesTeaser.ctaAudit.label}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}
