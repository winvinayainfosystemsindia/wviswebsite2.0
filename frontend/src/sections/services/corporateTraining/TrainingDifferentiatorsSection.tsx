import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined'
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined'
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined'
import { SectionHeading } from '../../../components'
import { trainingDifferentiatorsData } from '../../../data/services/corporateTraining'

const DIFF_ICONS: Record<string, ReactNode> = {
  'hands-on': <TouchAppOutlinedIcon />,
  'real-work': <StorageOutlinedIcon />,
  'full-cycle': <SyncOutlinedIcon />,
  'build-trainers': <CoPresentOutlinedIcon />,
  accessible: <AccessibilityNewOutlinedIcon />,
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

export const TrainingDifferentiatorsSection = () => (
  <Box
    component="section"
    aria-labelledby="training-diff-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="training-diff-heading"
          eyebrow={trainingDifferentiatorsData.eyebrow}
          heading={trainingDifferentiatorsData.heading}
          description={trainingDifferentiatorsData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {trainingDifferentiatorsData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <DifferentiatorCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
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

                <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
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
