import type { ReactNode } from 'react'
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
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SectionHeading } from '../../components'
import { storyServices, findNavItem } from '../../data'

const SERVICE_ICONS: Record<string, ReactNode> = {
  'accessibility-audit-testing': <FactCheckOutlinedIcon />,
  'document-accessibility-remediation': <DescriptionOutlinedIcon />,
  'corporate-training': <SchoolOutlinedIcon />,
  'microsoft-power-platform-solutions': <BoltOutlinedIcon />,
  'agentic-ai-custom-application-development': <SmartToyOutlinedIcon />,
  'capacity-building-adoption': <TrendingUpOutlinedIcon />,
}

const servicesNav = findNavItem('services')
const serviceLinks = (servicesNav?.children ?? []).filter((child) => child.id !== 'all-services')

const ServiceRow = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2.25, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 4px 14px ${alpha(theme.palette.text.primary, 0.04)}`,
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.5),
    boxShadow: `0 12px 28px ${alpha(theme.palette.accent.main, 0.14)}`,
    transform: 'translateY(-3px)',
    '& .arrow-icon': { transform: 'translateX(4px)', color: theme.palette.accent.main },
  },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.7)}`,
    outlineOffset: 3,
  },
}))

/** "What We Do Today" — service lines grown out of the foundation practice. */
export const ServicesTodaySection = () => (
  <Box component="section" aria-labelledby="services-today-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5.5}>
        <SectionHeading
          headingId="services-today-heading"
          eyebrow={storyServices.eyebrow}
          heading={storyServices.heading}
          description={storyServices.intro}
          maxWidth={760}
        />

        <Grid container spacing={2.5}>
          {serviceLinks.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6 }}>
              <ServiceRow href={service.href}>
                <Box
                  sx={(theme) => ({
                    width: 44,
                    height: 44,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(theme.palette.accent.main, 0.12),
                    color: theme.palette.accent.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
                  })}
                >
                  {SERVICE_ICONS[service.id]}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, flex: 1, color: 'text.primary', fontSize: '1rem' }}>
                  {service.label}
                </Typography>
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={(theme) => ({
                    fontSize: '1.15rem',
                    color: theme.palette.text.secondary,
                    transition: theme.transitions.create(['transform', 'color']),
                  })}
                />
              </ServiceRow>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.085rem', lineHeight: 1.8, maxWidth: 820 }}>
          {storyServices.closingNote}
        </Typography>
      </Stack>
    </Container>
  </Box>
)
