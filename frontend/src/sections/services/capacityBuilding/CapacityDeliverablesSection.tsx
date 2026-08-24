import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { SectionHeading } from '../../../components'
import { capacityDeliverablesData } from '../../../data/services/capacityBuilding'

const DeliverableCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.6,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const CapacityDeliverablesSection = () => (
  <Box component="section" aria-labelledby="capacity-deliverables-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="capacity-deliverables-heading"
          eyebrow={capacityDeliverablesData.eyebrow}
          heading={capacityDeliverablesData.heading}
          description={capacityDeliverablesData.description}
          maxWidth={720}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {capacityDeliverablesData.items.map((item, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: idx === 4 ? 12 : 6, lg: idx === 4 ? 4 : 4 }}>
              <DeliverableCard>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={(theme) => ({
                      p: 1,
                      borderRadius: Number(theme.shape.borderRadius),
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      color: theme.palette.primary.main,
                      display: 'flex',
                      flexShrink: 0,
                    })}
                  >
                    <TaskAltIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.875rem' }}>
                  {item.description}
                </Typography>
              </DeliverableCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
