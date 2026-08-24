import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { SectionHeading } from '../../../components'
import { sectorsServedData } from '../../../data/impact/clientsPartners'

const SECTOR_ICONS: Record<string, ReactNode> = {
  'fintech-capital-markets': <AccountBalanceOutlinedIcon />,
  'healthcare-technology': <HealthAndSafetyOutlinedIcon />,
  'ngos-nonprofits': <VolunteerActivismOutlinedIcon />,
  'higher-education-publishing': <MenuBookOutlinedIcon />,
  'government-public-sector': <GavelOutlinedIcon />,
}

const SectorCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

export const SectorsServedSection = () => (
  <Box
    component="section"
    id="sectors-served"
    aria-labelledby="sectors-served-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="sectors-served-heading"
          eyebrow={sectorsServedData.eyebrow}
          heading={sectorsServedData.heading}
          description={sectorsServedData.description}
          maxWidth={780}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {sectorsServedData.sectors.map((sector, idx) => (
            <Grid key={sector.id} size={{ xs: 12, md: idx === 4 ? 12 : 6, lg: idx === 4 ? 12 : 6 }}>
              <SectorCard>
                <Stack spacing={2.5}>
                  {/* Top Row: Icon & Badge */}
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {SECTOR_ICONS[sector.id]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        border: `1px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                        color: theme.palette.accent.dark,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        letterSpacing: '0.03em',
                      })}
                    >
                      {sector.badge}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {sector.title}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {sector.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                    {sector.description}
                  </Typography>

                  {/* Deliverables Checklist */}
                  <Stack spacing={1} sx={{ pt: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Capabilities & Deliverables:
                    </Typography>
                    {sector.deliverables.map((item, dIdx) => (
                      <Stack key={dIdx} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                        <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'primary.main', flexShrink: 0, mt: 0.3 }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.8125rem' }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  {/* Standards and Tools Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 1 }}>
                    {sector.standardsAndTools.map((tool, tIdx) => (
                      <Box
                        key={tIdx}
                        sx={(theme) => ({
                          px: 1,
                          py: 0.35,
                          borderRadius: Number(theme.shape.borderRadius) * 0.1,
                          bgcolor: alpha(theme.palette.text.primary, 0.04),
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                          color: theme.palette.text.secondary,
                          fontSize: '0.725rem',
                          fontWeight: 600,
                        })}
                      >
                        {tool}
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </SectorCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
