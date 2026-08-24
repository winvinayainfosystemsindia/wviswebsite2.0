import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SectionHeading } from '../../../components'
import { trainingProcessData } from '../../../data/services/corporateTraining'

const PHASE_ICONS = [
  <SchoolOutlinedIcon key="1" />,
  <ConstructionOutlinedIcon key="2" />,
  <VerifiedUserOutlinedIcon key="3" />,
]

const PhaseCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const TrainingProcessSection = () => (
  <Box
    component="section"
    aria-labelledby="training-process-heading"
    sx={{ bgcolor: 'background.paper' }}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="training-process-heading"
          eyebrow={trainingProcessData.eyebrow}
          heading={trainingProcessData.heading}
          description={trainingProcessData.description}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {trainingProcessData.phases.map((phase, idx) => (
            <Grid key={phase.phase} size={{ xs: 12, md: 4 }}>
              <PhaseCard>
                <Stack spacing={2.5}>
                  {/* Top Row: Phase Number and Icon */}
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
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {PHASE_ICONS[idx]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.5,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                        color: theme.palette.primary.main,
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                      })}
                    >
                      PHASE 0{phase.phase}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {phase.title}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.accent.dark, fontWeight: 700, fontSize: '0.78125rem' })}>
                      {phase.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {phase.description}
                  </Typography>

                  {/* Tangible Phase Output */}
                  <Box
                    sx={(theme) => ({
                      p: 1.75,
                      borderRadius: Number(theme.shape.borderRadius) * 1.2,
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                      border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
                    })}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', display: 'block', mb: 0.25, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Tangible Deliverable:
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.4 }}>
                      {phase.deliverable}
                    </Typography>
                  </Box>
                </Stack>
              </PhaseCard>
            </Grid>
          ))}
        </Grid>

        {/* Process Flow Ribbon Note */}
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            px: 3,
            py: 1.25,
            borderRadius: 99,
            bgcolor: alpha(theme.palette.accent.main, 0.08),
            border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
          })}
        >
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'accent.dark', fontSize: '0.8125rem' }}>
            WORKSHOP FLUENCY
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16, color: 'accent.main' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'accent.dark', fontSize: '0.8125rem' }}>
            CO-BUILDING PROTOTYPES
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16, color: 'accent.main' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'accent.dark', fontSize: '0.8125rem' }}>
            INDEPENDENT IN-HOUSE OWNERSHIP
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
)
