import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionHeading } from '../../../components'
import { remediationApproachData } from '../../../data/services/documentRemediation'

const SpecCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

export const RemediationApproachSection = () => (
  <Box
    component="section"
    aria-labelledby="remediation-spec-heading"
    id="remediation-spec"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="remediation-spec-heading"
          eyebrow={remediationApproachData.eyebrow}
          heading={remediationApproachData.heading}
          description={remediationApproachData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {remediationApproachData.specs.map((spec) => (
            <Grid key={spec.number} size={{ xs: 12, sm: 6, lg: 3 }}>
              <SpecCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={(theme) => ({
                      width: 40,
                      height: 40,
                      borderRadius: 999,
                      bgcolor: alpha(theme.palette.primary.main, 0.14),
                      color: theme.palette.primary.main,
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      flexShrink: 0,
                    })}
                  >
                    0{spec.number}
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                    {spec.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, pt: 0.5, fontSize: '0.875rem' }}>
                  {spec.description}
                </Typography>
              </SpecCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
