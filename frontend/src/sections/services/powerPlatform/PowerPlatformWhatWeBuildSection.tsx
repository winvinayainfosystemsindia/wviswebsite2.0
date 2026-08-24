import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined'
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined'
import { SectionHeading } from '../../../components'
import { powerPlatformWhatWeBuildData } from '../../../data/services/powerPlatform'

const SOLUTION_ICONS: Record<string, ReactNode> = {
  'power-bi': <InsightsOutlinedIcon />,
  'power-apps': <AppRegistrationOutlinedIcon />,
  'power-automate': <SyncAltOutlinedIcon />,
}

const SolutionCard = styled(Box)(({ theme }) => ({
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

export const PowerPlatformWhatWeBuildSection = () => (
  <Box
    component="section"
    aria-labelledby="power-what-we-build-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="power-what-we-build-heading"
          eyebrow={powerPlatformWhatWeBuildData.eyebrow}
          heading={powerPlatformWhatWeBuildData.heading}
          description={powerPlatformWhatWeBuildData.description}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {powerPlatformWhatWeBuildData.solutions.map((item) => (
            <Grid key={item.id} size={{ xs: 12, lg: 4 }}>
              <SolutionCard>
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
                      {SOLUTION_ICONS[item.id]}
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
                      {item.badge}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {item.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {item.description}
                  </Typography>

                  {/* Feature Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 0.5 }}>
                    {item.tags.map((tag, idx) => (
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
                </Stack>
              </SolutionCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
