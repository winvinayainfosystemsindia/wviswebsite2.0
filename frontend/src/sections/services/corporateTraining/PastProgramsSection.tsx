import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import { SectionHeading } from '../../../components'
import { pastProgramsData } from '../../../data/services/corporateTraining'

const ProgramCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
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
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const PastProgramsSection = () => (
  <Box component="section" aria-labelledby="past-programs-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="past-programs-heading"
          eyebrow={pastProgramsData.eyebrow}
          heading={pastProgramsData.heading}
          description={pastProgramsData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {pastProgramsData.programs.map((program) => (
            <Grid key={program.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <ProgramCard>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        px: 1.2,
                        py: 0.35,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                      })}
                    >
                      {program.category}
                    </Box>
                    <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 20, color: 'accent.main' }} />
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'text.primary', pt: 0.5 }}>
                    {program.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {program.description}
                  </Typography>
                </Stack>

                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    pt: 1.5,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  })}
                >
                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main', flexShrink: 0 }} />
                  <Typography variant="caption" sx={(theme) => ({ color: theme.palette.accent.dark, fontWeight: 700, fontSize: '0.78125rem' })}>
                    {program.tag}
                  </Typography>
                </Box>
              </ProgramCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
