import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { SectionHeading, Stat } from '../../components'
import { outcomes } from '../../data'

const StatCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: alpha(theme.palette.primary.main, 0.3),
    boxShadow: `0 10px 24px -6px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}))

/** "Real Outcomes" — headline figures, framed as people rather than metrics. */
export const OutcomesSection = () => (
  <Box component="section" aria-labelledby="outcomes-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 7 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="outcomes-heading"
          eyebrow={outcomes.eyebrow}
          heading={outcomes.heading}
          description={outcomes.description}
          maxWidth={620}
        />
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {outcomes.stats.map((stat) => (
            <Grid key={stat.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard>
                <Stat value={stat.value} label={stat.label} />
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
