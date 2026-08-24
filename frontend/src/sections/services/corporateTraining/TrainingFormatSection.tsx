import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import { SectionHeading } from '../../../components'
import { trainingFormatData } from '../../../data/services/corporateTraining'

const FORMAT_ICONS: Record<string, ReactNode> = {
  'in-person': <GroupsOutlinedIcon />,
  'multi-phase': <DateRangeOutlinedIcon />,
  'trainer-track': <RecordVoiceOverOutlinedIcon />,
  'custom-curriculum': <TuneOutlinedIcon />,
}

const FormatCard = styled(Box)(({ theme }) => ({
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
    borderColor: alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const TrainingFormatSection = () => (
  <Box component="section" aria-labelledby="training-format-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="training-format-heading"
          eyebrow={trainingFormatData.eyebrow}
          heading={trainingFormatData.heading}
          description={trainingFormatData.description}
          maxWidth={720}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {trainingFormatData.formats.map((format) => (
            <Grid key={format.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <FormatCard>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        p: 1.25,
                        borderRadius: Number(theme.shape.borderRadius),
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        flexShrink: 0,
                      })}
                    >
                      {FORMAT_ICONS[format.id]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1,
                        py: 0.3,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        color: theme.palette.accent.dark,
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                      })}
                    >
                      {format.badge}
                    </Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                    {format.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {format.description}
                  </Typography>
                </Stack>
              </FormatCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
