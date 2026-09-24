import { useState, type ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion, AnimatePresence } from 'framer-motion'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import { Button, SectionHeading } from '../../components'
import { servicesTeaser, type ServiceDetail } from '../../data'

interface ServiceMeta {
  icon: ReactNode
  accentColor: string
  metricText: string
  metricLabel: string
  visualType: 'audit' | 'document' | 'training' | 'powerbi' | 'agentic' | 'governance'
  tags: string[]
}

const SERVICE_CONFIG: Record<string, ServiceMeta> = {
  'accessibility-audit-testing': {
    icon: <FactCheckOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#D97706',
    metricText: '99.8%',
    metricLabel: 'Defect Detection Rate',
    visualType: 'audit',
    tags: ['WCAG 2.2 AAA', 'Section 508', 'JAWS & NVDA', 'VoiceOver'],
  },
  'document-accessibility-remediation': {
    icon: <DescriptionOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#059669',
    metricText: '50K+',
    metricLabel: 'Documents Remediated',
    visualType: 'document',
    tags: ['PDF/UA', 'Screen Reader Tag Tree', 'Table Structuring', 'Alt-Text'],
  },
  'corporate-training': {
    icon: <SchoolOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#4338CA',
    metricText: '5,000+',
    metricLabel: 'Engineers & Designers Upskilled',
    visualType: 'training',
    tags: ['Role-Specific Labs', 'Live AT Emulation', 'VPAT Writing', 'CPACC Prep'],
  },
  'microsoft-power-platform-solutions': {
    icon: <BoltOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#2563EB',
    metricText: '100%',
    metricLabel: 'Keyboard & Screen Reader Accessible',
    visualType: 'powerbi',
    tags: ['Power BI Dashboards', 'Power Apps UX', 'Power Automate', 'Dataverse'],
  },
  'agentic-ai-custom-application-development': {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#7C3AED',
    metricText: '<120ms',
    metricLabel: 'AI Response Latency',
    visualType: 'agentic',
    tags: ['Autonomous Agents', 'Inclusive LLMs', 'Voice-First UX', 'Zero Tech Debt'],
  },
  'capacity-building-adoption': {
    icon: <GavelOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#B45309',
    metricText: 'Zero',
    metricLabel: 'Litigation Risk Guarantee',
    visualType: 'governance',
    tags: ['EAA 2025 Readiness', 'Continuous Monitoring', 'DEI Policy', 'Audit Logging'],
  },
}

const SectionWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'light' ? '#FCFAF6' : '#14100D',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  overflow: 'hidden',
  padding: theme.spacing(9, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(13, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '10%',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '5%',
    width: '450px',
    height: '450px',
    background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.05)} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
}))

const ServiceNavItem = styled('button')<{ active: boolean; accentColor: string }>(
  ({ theme, active, accentColor }) => ({
    width: '100%',
    textAlign: 'left',
    padding: theme.spacing(2.25, 2.5),
    borderRadius: 16,
    border: active
      ? `1.5px solid ${accentColor}`
      : `1px solid ${theme.palette.divider}`,
    backgroundColor: active
      ? theme.palette.mode === 'light'
        ? '#FFFFFF'
        : alpha(theme.palette.background.paper, 0.95)
      : theme.palette.mode === 'light'
        ? alpha('#FFFFFF', 0.6)
        : alpha(theme.palette.background.paper, 0.4),
    boxShadow: active
      ? `0 10px 28px -6px ${alpha(accentColor, 0.2)}`
      : `0 2px 8px -2px ${alpha(theme.palette.text.primary, 0.02)}`,
    cursor: 'pointer',
    transition: theme.transitions.create([
      'background-color',
      'border-color',
      'box-shadow',
      'transform',
    ]),
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : theme.palette.background.paper,
      borderColor: active ? accentColor : alpha(accentColor, 0.5),
      transform: 'translateY(-2px)',
    },
    '&:focus-visible': {
      outline: `2px solid ${accentColor}`,
      outlineOffset: 2,
    },
  })
)

const ShowcaseStage = styled(Box)(({ theme }) => ({
  height: '100%',
  minHeight: 520,
  padding: theme.spacing(4.5),
  borderRadius: 24,
  backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 16px 48px -12px ${alpha(theme.palette.text.primary, 0.08)}`,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    minHeight: 'auto',
  },
}))

const VisualCard = styled(Box)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'light' ? alpha(theme.palette.text.primary, 0.02) : alpha(theme.palette.background.default, 0.7),
  border: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  overflow: 'hidden',
}))

export const ServicesSection = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    servicesTeaser.items[0]?.id || 'accessibility-audit-testing'
  )

  const activeService: ServiceDetail =
    servicesTeaser.items.find((item) => item.id === selectedServiceId) ||
    servicesTeaser.items[0]

  const activeMeta = SERVICE_CONFIG[activeService.id] || {
    icon: <FactCheckOutlinedIcon sx={{ fontSize: '1.5rem' }} />,
    accentColor: '#D97706',
    metricText: '100%',
    metricLabel: 'Enterprise Standards',
    visualType: 'audit',
    tags: ['WCAG 2.2', 'Section 508'],
  }

  return (
    <SectionWrapper aria-labelledby="services-heading">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Section Heading */}
          <SectionHeading
            headingId="services-heading"
            eyebrow={servicesTeaser.eyebrow}
            heading={servicesTeaser.heading}
            description={servicesTeaser.subheading}
            maxWidth={860}
          />

          {/* Interactive Showcase: Left Navigation Stack + Right Dynamic Stage */}
          <Grid container spacing={3.5} sx={{ width: '100%', alignItems: 'stretch' }}>
            {/* Left Column: 6 Interactive Service Selector Cards */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Stack spacing={1.75}>
                {servicesTeaser.items.map((item) => {
                  const meta = SERVICE_CONFIG[item.id]
                  const isActive = item.id === activeService.id

                  return (
                    <ServiceNavItem
                      key={item.id}
                      type="button"
                      active={isActive}
                      accentColor={meta.accentColor}
                      onClick={() => setSelectedServiceId(item.id)}
                      aria-label={`Select ${item.title}`}
                      aria-pressed={isActive}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {/* Icon Box */}
                        <Box
                          sx={(theme) => ({
                            width: 44,
                            height: 44,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: isActive
                              ? alpha(meta.accentColor, 0.15)
                              : alpha(theme.palette.text.primary, 0.04),
                            color: isActive ? meta.accentColor : theme.palette.text.secondary,
                            border: `1px solid ${isActive ? alpha(meta.accentColor, 0.3) : theme.palette.divider}`,
                            flexShrink: 0,
                            transition: theme.transitions.create(['all']),
                          })}
                        >
                          {meta.icon}
                        </Box>

                        {/* Text Block */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 0.25 }}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: isActive ? 700 : 600,
                                fontSize: '0.96875rem',
                                color: isActive ? 'text.primary' : 'text.secondary',
                                lineHeight: 1.3,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {item.title}
                            </Typography>
                            {item.badge && (
                              <Box
                                sx={{
                                  px: 1,
                                  py: 0.2,
                                  borderRadius: 999,
                                  fontSize: '0.6875rem',
                                  fontWeight: 700,
                                  bgcolor: alpha(meta.accentColor, 0.12),
                                  color: meta.accentColor,
                                  whiteSpace: 'nowrap',
                                  flexShrink: 0,
                                }}
                              >
                                {item.badge}
                              </Box>
                            )}
                          </Box>

                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.8125rem',
                              display: '-webkit-box',
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {item.categoryLabel} • {meta.metricText} {meta.metricLabel}
                          </Typography>
                        </Box>

                        {/* Active Arrow indicator */}
                        <ArrowForwardIcon
                          sx={{
                            fontSize: '1.1rem',
                            color: isActive ? meta.accentColor : 'text.disabled',
                            transform: isActive ? 'translateX(0)' : 'translateX(-4px)',
                            opacity: isActive ? 1 : 0.3,
                            transition: 'all 0.2s ease',
                          }}
                        />
                      </Box>
                    </ServiceNavItem>
                  )
                })}
              </Stack>
            </Grid>

            {/* Right Column: Dynamic Interactive Showcase Canvas */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  style={{ height: '100%' }}
                >
                  <ShowcaseStage>
                    {/* Top Stage Bar */}
                    <Stack spacing={2.5}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 0.6,
                              px: 1.25,
                              py: 0.45,
                              borderRadius: 1,
                              fontSize: '0.78125rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              bgcolor: alpha(activeMeta.accentColor, 0.12),
                              color: activeMeta.accentColor,
                              border: `1px solid ${alpha(activeMeta.accentColor, 0.25)}`,
                            }}
                          >
                            <LayersOutlinedIcon sx={{ fontSize: '0.9375rem' }} />
                            <span>{activeService.categoryLabel}</span>
                          </Box>
                          {activeService.statBadge && (
                            <Box
                              sx={(theme) => ({
                                px: 1.1,
                                py: 0.45,
                                borderRadius: 1,
                                fontSize: '0.78125rem',
                                fontWeight: 600,
                                bgcolor: alpha(theme.palette.text.primary, 0.04),
                                color: 'text.secondary',
                                border: `1px solid ${theme.palette.divider}`,
                              })}
                            >
                              {activeService.statBadge}
                            </Box>
                          )}
                        </Box>

                        {/* Metric Highlight Chip */}
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 999,
                            bgcolor: alpha(activeMeta.accentColor, 0.08),
                            border: `1px solid ${alpha(activeMeta.accentColor, 0.2)}`,
                          }}
                        >
                          <Typography variant="caption" sx={{ fontWeight: 800, color: activeMeta.accentColor, fontSize: '0.9375rem' }}>
                            {activeMeta.metricText}
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.78125rem' }}>
                            {activeMeta.metricLabel}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Service Title & Full Description */}
                      <Stack spacing={1.25}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: '1.45rem', md: '1.85rem' },
                            color: 'text.primary',
                            lineHeight: 1.25,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {activeService.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ fontSize: '0.96875rem', lineHeight: 1.75 }}
                        >
                          {activeService.description}
                        </Typography>
                      </Stack>
                    </Stack>

                    {/* Live Simulation / Interactive Mockup Canvas */}
                    <VisualCard>
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TerminalRoundedIcon sx={{ fontSize: '1.1rem', color: activeMeta.accentColor }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'text.secondary' }}>
                              Verification & Enterprise Architecture
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, color: '#10B981', fontSize: '0.75rem' }}>
                              Live Verified
                            </Typography>
                          </Box>
                        </Box>

                        {/* Supported Tags / Standards Strip */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {activeMeta.tags.map((tag) => (
                            <Box
                              key={tag}
                              sx={(theme) => ({
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                px: 1.2,
                                py: 0.45,
                                borderRadius: 1,
                                fontSize: '0.78125rem',
                                fontWeight: 600,
                                bgcolor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.8),
                                color: 'text.primary',
                                border: `1px solid ${theme.palette.divider}`,
                                boxShadow: `0 2px 4px ${alpha(theme.palette.text.primary, 0.02)}`,
                              })}
                            >
                              <CheckCircleRoundedIcon sx={{ fontSize: '0.875rem', color: activeMeta.accentColor }} />
                              <span>{tag}</span>
                            </Box>
                          ))}
                        </Box>

                        {/* Deliverables Checklist */}
                        <Stack spacing={1} sx={{ pt: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.71875rem' }}>
                            Included Enterprise Deliverables:
                          </Typography>
                          <Grid container spacing={1.5}>
                            {activeService.deliverables.map((del, dIdx) => (
                              <Grid key={dIdx} size={{ xs: 12, sm: 4 }}>
                                <Box
                                  sx={(theme) => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1.25,
                                    borderRadius: 1.5,
                                    bgcolor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.6),
                                    border: `1px solid ${theme.palette.divider}`,
                                  })}
                                >
                                  <CheckCircleRoundedIcon sx={{ fontSize: '1rem', color: activeMeta.accentColor, flexShrink: 0 }} />
                                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.8125rem', lineHeight: 1.3 }}>
                                    {del}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Stack>
                      </Stack>
                    </VisualCard>

                    {/* Bottom Action Strip */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 2,
                        pt: 2.5,
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        <Button
                          tone="primary"
                          variant="contained"
                          href={activeService.href}
                          endIcon={<ArrowForwardIcon />}
                          sx={{ py: 1.2, px: 3, fontWeight: 700 }}
                        >
                          Explore Service Scope
                        </Button>
                        <Button
                          tone="accent"
                          variant="outlined"
                          href={servicesTeaser.ctaAudit.href}
                          sx={{ py: 1.2, px: 2.5, fontWeight: 600 }}
                        >
                          {servicesTeaser.ctaAudit.label}
                        </Button>
                      </Stack>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ShieldOutlinedIcon sx={{ fontSize: '1.1rem', color: 'primary.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                          Guaranteed Compliance & Expert Support
                        </Typography>
                      </Box>
                    </Box>
                  </ShowcaseStage>
                </motion.div>
              </AnimatePresence>
            </Grid>
          </Grid>

          {/* Bottom All Services Directory CTA Bar */}
          <Box
            sx={(theme) => ({
              width: '100%',
              p: { xs: 3, md: 3.5 },
              borderRadius: 20,
              bgcolor: theme.palette.mode === 'light' ? '#FFFFFF' : alpha(theme.palette.background.paper, 0.8),
              border: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2.5,
              boxShadow: `0 4px 20px -4px ${alpha(theme.palette.text.primary, 0.04)}`,
            })}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={(theme) => ({
                  width: 48,
                  height: 48,
                  borderRadius: 2.5,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                })}
              >
                <HubOutlinedIcon sx={{ fontSize: '1.6rem' }} />
              </Box>
              <Stack spacing={0.25}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1rem' }}>
                  Looking for a Custom Enterprise Engagement?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                  We craft tailored multi-year digital transformation, VPAT certifications, and lived-experience QA packages.
                </Typography>
              </Stack>
            </Box>

            <Button
              tone="primary"
              variant="contained"
              href={servicesTeaser.cta.href}
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3.5, py: 1.25, fontWeight: 700 }}
            >
              {servicesTeaser.cta.label}
            </Button>
          </Box>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}
