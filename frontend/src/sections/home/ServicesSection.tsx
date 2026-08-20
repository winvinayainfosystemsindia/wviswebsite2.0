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
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import { Button, SectionHeading } from '../../components'
import { servicesTeaser } from '../../data'

const SERVICE_ICONS: Record<string, ReactNode> = {
  'accessibility-audit-testing': <FactCheckOutlinedIcon />,
  'document-accessibility-remediation': <DescriptionOutlinedIcon />,
  'corporate-training': <SchoolOutlinedIcon />,
  'microsoft-power-platform-solutions': <BoltOutlinedIcon />,
  'agentic-ai-custom-application-development': <SmartToyOutlinedIcon />,
  'capacity-building-adoption': <TrendingUpOutlinedIcon />,
}

const ServiceCard = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  color: 'inherit',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 4px 16px -4px ${alpha(theme.palette.common.black, 0.05)}`,
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.5),
    boxShadow: `0 16px 36px -8px ${alpha(theme.palette.accent.main, 0.15)}`,
    transform: 'translateY(-4px)',
    '& .arrow-icon': {
      transform: 'translateX(4px)',
      color: theme.palette.accent.main,
    },
  },
  '&:focus-visible': {
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.7)}`,
    outlineOffset: 3,
  },
}))

export const ServicesSection = () => (
  <Box component="section" aria-labelledby="services-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading
          headingId="services-heading"
          eyebrow={servicesTeaser.eyebrow}
          heading={servicesTeaser.heading}
          description={servicesTeaser.subheading}
          maxWidth={660}
        />

        <Grid container spacing={3.5}>
          {servicesTeaser.items.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: 'flex' }}>
              <ServiceCard href={service.href} aria-label={service.title}>
                <Stack spacing={2.5}>
                  <Box
                    sx={(theme) => ({
                      width: 52,
                      height: 52,
                      borderRadius: Number(theme.shape.borderRadius) * 1.5,
                      bgcolor: alpha(theme.palette.accent.main, 0.1),
                      color: theme.palette.accent.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                    })}
                  >
                    {SERVICE_ICONS[service.id]}
                  </Box>

                  <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {service.description}
                  </Typography>

                  {/* Deliverable Badges */}
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, pt: 0.5 }}>
                    {service.deliverables.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={(theme) => ({
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          py: 0.5,
                          px: 1.25,
                          borderRadius: 999,
                          bgcolor: alpha(theme.palette.text.primary, 0.04),
                          border: `1px solid ${theme.palette.divider}`,
                        })}
                      >
                        <CheckOutlinedIcon sx={{ fontSize: 12, color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.72rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 3, mt: 'auto' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'accent.main' }}>
                    Learn More
                  </Typography>
                  <ArrowForwardIcon
                    className="arrow-icon"
                    fontSize="small"
                    sx={(theme) => ({
                      transition: theme.transitions.create(['transform', 'color']),
                      color: theme.palette.accent.main,
                    })}
                  />
                </Box>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button tone="primary" variant="contained" href={servicesTeaser.cta.href} size="large" endIcon={<ArrowForwardIcon />}>
            {servicesTeaser.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
