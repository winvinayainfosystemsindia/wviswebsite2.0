import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined'
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { SectionHeading } from '../../../components'
import { whereThisFitsData } from '../../../data/services/powerPlatform'

const USECASE_ICONS: Record<string, ReactNode> = {
  'impact-mel': <VolunteerActivismOutlinedIcon />,
  'org-mis': <AssessmentOutlinedIcon />,
  'data-apps': <AppRegistrationOutlinedIcon />,
  'workflow-automation': <SyncAltOutlinedIcon />,
}

const UseCaseCard = styled(Box)(({ theme }) => ({
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

export const WhereThisFitsSection = () => (
  <Box component="section" aria-labelledby="where-this-fits-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="where-this-fits-heading"
          eyebrow={whereThisFitsData.eyebrow}
          heading={whereThisFitsData.heading}
          description={whereThisFitsData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {whereThisFitsData.useCases.map((useCase) => (
            <Grid key={useCase.id} size={{ xs: 12, sm: 6 }}>
              <UseCaseCard>
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
                      {useCase.category}
                    </Box>
                    <Box sx={{ color: 'primary.main' }}>{USECASE_ICONS[useCase.id]}</Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary', pt: 0.5 }}>
                    {useCase.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                    {useCase.description}
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
                    {useCase.tag}
                  </Typography>
                </Box>
              </UseCaseCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
