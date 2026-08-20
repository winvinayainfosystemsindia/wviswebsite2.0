import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Card, SectionHeading } from '../../components'
import { findNavItem, servicesTeaser } from '../../data'

const SERVICE_ICONS: Record<string, ReactNode> = {
  'accessibility-audit-testing': <FactCheckOutlinedIcon />,
  'document-accessibility-remediation': <DescriptionOutlinedIcon />,
  'corporate-training': <SchoolOutlinedIcon />,
  'microsoft-power-platform-solutions': <BoltOutlinedIcon />,
  'agentic-ai-custom-application-development': <SmartToyOutlinedIcon />,
  'capacity-building-adoption': <TrendingUpOutlinedIcon />,
}

const services = (findNavItem('services')?.children ?? []).filter((item) => item.id !== 'all-services')

/**
 * "What We Do" services grid. The six service lines are read straight from
 * the shared navigation data (`findNavItem('services')`) so this list and
 * the navbar's Services dropdown can never drift out of sync.
 */
export const ServicesSection = () => (
  <Box component="section" aria-labelledby="services-heading" sx={{ bgcolor: 'background.default' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading
          headingId="services-heading"
          eyebrow={servicesTeaser.eyebrow}
          heading={servicesTeaser.heading}
          description={servicesTeaser.subheading}
          maxWidth={620}
        />

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: 'flex' }}>
              <Card
                interactive
                fullHeight
                href={service.href}
                aria-label={service.label}
                icon={SERVICE_ICONS[service.id]}
                iconTone="accent"
                title={service.label}
                subtitle={service.description}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button tone="primary" variant="outlined" href={servicesTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
            {servicesTeaser.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
