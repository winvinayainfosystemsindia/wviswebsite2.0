import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import { SectionHeading } from '../../../components'
import { capacityPillarsData } from '../../../data/services/capacityBuilding'

const PILLAR_ICONS: Record<string, ReactNode> = {
  'trainer-enablement': <CastForEducationOutlinedIcon />,
  'change-management': <TrendingUpOutlinedIcon />,
  'disability-culture': <Diversity3OutlinedIcon />,
  'handover-maintenance': <HandshakeOutlinedIcon />,
}

const PillarCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
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

export const CapacityPillarsSection = () => (
  <Box
    component="section"
    aria-labelledby="capacity-pillars-heading"
    id="capacity-pillars"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="capacity-pillars-heading"
          eyebrow={capacityPillarsData.eyebrow}
          heading={capacityPillarsData.heading}
          description={capacityPillarsData.description}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {capacityPillarsData.pillars.map((pillar) => (
            <Grid key={pillar.id} size={{ xs: 12, sm: 6 }}>
              <PillarCard>
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
                      {PILLAR_ICONS[pillar.id]}
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
                      {pillar.badge}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {pillar.title}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {pillar.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                    {pillar.description}
                  </Typography>
                </Stack>
              </PillarCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
