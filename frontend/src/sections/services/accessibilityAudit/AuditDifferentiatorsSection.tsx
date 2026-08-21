import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AltRouteIcon from '@mui/icons-material/AltRoute'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import { SectionHeading } from '../../../components'
import { differentiatorsData } from '../../../data/services/accessibilityAudit'

const DIFF_ICONS: Record<string, ReactNode> = {
  'native-at': <RecordVoiceOverIcon />,
  'two-paths': <AltRouteIcon />,
  'regulatory-ready': <AssignmentTurnedInIcon />,
}

const DifferentiatorCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

export const AuditDifferentiatorsSection = () => (
  <Box
    component="section"
    aria-labelledby="differentiators-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.05),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="differentiators-heading"
          eyebrow={differentiatorsData.eyebrow}
          heading={differentiatorsData.heading}
          maxWidth={680}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {differentiatorsData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }}>
              <DifferentiatorCard>
                <Box
                  sx={(theme) => ({
                    width: 46,
                    height: 46,
                    borderRadius: Number(theme.shape.borderRadius) * 1.3,
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  })}
                >
                  {DIFF_ICONS[item.id]}
                </Box>
                <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.description}
                </Typography>
              </DifferentiatorCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
