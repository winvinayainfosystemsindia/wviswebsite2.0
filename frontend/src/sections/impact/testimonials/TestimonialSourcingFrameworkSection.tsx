import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { SectionHeading } from '../../../components'

import { sourcingFrameworkData } from '../../../data/impact/testimonials'

const FrameworkCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

const CandidateCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
    borderColor: alpha(theme.palette.accent.main, 0.5),
    boxShadow: `0 12px 28px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
}))

export const TestimonialSourcingFrameworkSection = () => (
  <Box component="section" aria-labelledby="sourcing-framework-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="sourcing-framework-heading"
          eyebrow={sourcingFrameworkData.eyebrow}
          heading={sourcingFrameworkData.heading}
          description={sourcingFrameworkData.description}
          maxWidth={780}
        />

        {/* 3-Step Methodology Grid */}
        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {sourcingFrameworkData.steps.map((stepItem) => (
            <Grid key={stepItem.step} size={{ xs: 12, md: 4 }}>
              <FrameworkCard>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 44,
                        height: 44,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1rem',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {stepItem.step}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.35,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontSize: '0.75rem',
                        fontWeight: 800,
                      })}
                    >
                      STEP {stepItem.step}
                    </Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary' }}>
                    {stepItem.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                    {stepItem.description}
                  </Typography>
                </Stack>
              </FrameworkCard>
            </Grid>
          ))}
        </Grid>

        {/* Partner Engagement Cohorts Callout */}
        <Box sx={{ width: '100%', pt: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              mb: 3,
              fontSize: '0.8125rem',
            }}
          >
            Verified Partner Engagement Cohorts
          </Typography>

          <Grid container spacing={3} sx={{ width: '100%' }}>
            {sourcingFrameworkData.candidates.map((cand) => (
              <Grid key={cand.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                <CandidateCard>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box
                        sx={(theme) => ({
                          px: 1.2,
                          py: 0.35,
                          borderRadius: 99,
                          bgcolor: alpha(theme.palette.accent.main, 0.1),
                          color: theme.palette.accent.dark,
                          fontSize: '0.725rem',
                          fontWeight: 700,
                        })}
                      >
                        {cand.badge}
                      </Box>
                      <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                    </Stack>

                    <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'text.primary' }}>
                      {cand.partner}
                    </Typography>

                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.78125rem' })}>
                      {cand.engagement}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55, fontSize: '0.85rem' }}>
                      {cand.keyOutcome}
                    </Typography>
                  </Stack>
                </CandidateCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  </Box>
)
