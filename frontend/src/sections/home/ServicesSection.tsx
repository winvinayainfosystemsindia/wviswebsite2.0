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
  padding: theme.spacing(2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  textDecoration: 'none',
  color: 'inherit',
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  boxShadow: `0 2px 10px -2px ${alpha(theme.palette.common.black, 0.04)}`,
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.5),
    boxShadow: `0 10px 24px -6px ${alpha(theme.palette.accent.main, 0.12)}`,
    transform: 'translateY(-3px)',
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
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={{ xs: 5, md: 6 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="services-heading"
          eyebrow={servicesTeaser.eyebrow}
          heading={servicesTeaser.heading}
          description={servicesTeaser.subheading}
          maxWidth={660}
        />

        <Grid container spacing={2.5} sx={{ width: '100%' }}>
          {servicesTeaser.items.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: 'flex' }}>
              <ServiceCard href={service.href} aria-label={service.title}>
                <Stack spacing={1.75}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Box
                      sx={(theme) => ({
                        width: 40,
                        height: 40,
                        borderRadius: Number(theme.shape.borderRadius),
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        color: theme.palette.accent.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                        flexShrink: 0,
                      })}
                    >
                      {SERVICE_ICONS[service.id]}
                    </Box>

                    <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>
                      {service.title}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {service.description}
                  </Typography>

                  {/* Deliverable Badges */}
                  <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75, pt: 0.25 }}>
                    {service.deliverables.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={(theme) => ({
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.4,
                          py: 0.25,
                          px: 1,
                          borderRadius: 999,
                          bgcolor: alpha(theme.palette.text.primary, 0.04),
                          border: `1px solid ${theme.palette.divider}`,
                        })}
                      >
                        <CheckOutlinedIcon sx={{ fontSize: 11, color: 'accent.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.7rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, pt: 2, mt: 'auto' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'accent.main', fontSize: '0.825rem' }}>
                    Learn More
                  </Typography>
                  <ArrowForwardIcon
                    className="arrow-icon"
                    sx={(theme) => ({
                      fontSize: '0.9rem',
                      transition: theme.transitions.create(['transform', 'color']),
                      color: theme.palette.accent.main,
                    })}
                  />
                </Box>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Button tone="primary" variant="contained" href={servicesTeaser.cta.href} size="large" endIcon={<ArrowForwardIcon />}>
            {servicesTeaser.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
)
