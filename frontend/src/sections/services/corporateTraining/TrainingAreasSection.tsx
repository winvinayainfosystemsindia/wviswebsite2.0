import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import InsightsIcon from '@mui/icons-material/Insights'
import TerminalIcon from '@mui/icons-material/Terminal'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { SectionHeading } from '../../../components'
import { trainingAreasData } from '../../../data/services/corporateTraining'

const AREA_ICONS: Record<string, ReactNode> = {
  genai: <AutoAwesomeIcon />,
  'power-platform': <InsightsIcon />,
  'modern-qa': <TerminalIcon />,
}

const AreaCard = styled(Box)(({ theme }) => ({
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

export const TrainingAreasSection = () => (
  <Box
    component="section"
    aria-labelledby="training-areas-heading"
    id="training-areas"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="training-areas-heading"
          eyebrow={trainingAreasData.eyebrow}
          heading={trainingAreasData.heading}
          description={trainingAreasData.description}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {trainingAreasData.areas.map((area) => (
            <Grid key={area.id} size={{ xs: 12, lg: 4 }}>
              <AreaCard>
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
                      {AREA_ICONS[area.id]}
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
                      {area.badge}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {area.title}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {area.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {area.description}
                  </Typography>

                  {/* Tech Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 0.5 }}>
                    {area.tags.map((tag, idx) => (
                      <Box
                        key={idx}
                        sx={(theme) => ({
                          px: 1,
                          py: 0.3,
                          borderRadius: Number(theme.shape.borderRadius) * 0.8,
                          bgcolor: alpha(theme.palette.text.primary, 0.04),
                          border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                          color: theme.palette.text.secondary,
                          fontSize: '0.725rem',
                          fontWeight: 600,
                        })}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>

                  {/* Key Highlights Checklist */}
                  <Box sx={{ pt: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Program Highlights:
                    </Typography>
                    <Stack spacing={1}>
                      {area.keyHighlights.map((hl, idx) => (
                        <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                          <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main', flexShrink: 0, mt: 0.3 }} />
                          <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.8125rem' }}>
                            {hl}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </AreaCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
