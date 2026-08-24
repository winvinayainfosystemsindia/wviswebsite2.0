import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import { SectionHeading } from '../../../components'
import { internalToolingData } from '../../../data/services/documentRemediation'

const ComparisonCard = styled(Box)<{ isHighlight?: boolean }>(({ theme, isHighlight }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: isHighlight ? theme.palette.background.paper : alpha(theme.palette.background.paper, 0.7),
  border: isHighlight
    ? `2px solid ${alpha(theme.palette.primary.main, 0.4)}`
    : `1px solid ${theme.palette.divider}`,
  boxShadow: isHighlight
    ? `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 12px ${alpha(theme.palette.common.black, 0.04)}`
    : `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  overflow: 'hidden',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: isHighlight ? theme.palette.primary.main : alpha(theme.palette.text.secondary, 0.4),
    boxShadow: isHighlight
      ? `0 20px 44px ${alpha(theme.palette.primary.main, 0.18)}`
      : `0 8px 24px ${alpha(theme.palette.text.primary, 0.08)}`,
  },
}))

export const InternalToolingSection = () => (
  <Box component="section" aria-labelledby="internal-tooling-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="internal-tooling-heading"
          eyebrow={internalToolingData.eyebrow}
          heading={internalToolingData.heading}
          description={internalToolingData.description}
          maxWidth={800}
        />

        {/* Side-by-Side Comparison: Traditional vs. WinVinaya Engine */}
        <Grid container spacing={4} sx={{ width: '100%', maxWidth: 1060 }}>
          {/* Traditional Manual Approach */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ComparisonCard isHighlight={false}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box
                    sx={(theme) => ({
                      width: 44,
                      height: 44,
                      borderRadius: Number(theme.shape.borderRadius) * 1.3,
                      bgcolor: alpha(theme.palette.error.main, 0.1),
                      color: theme.palette.error.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}
                  >
                    <HourglassEmptyIcon sx={{ fontSize: 24 }} />
                  </Box>

                  <Box
                    sx={(theme) => ({
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 99,
                      bgcolor: alpha(theme.palette.error.main, 0.08),
                      border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
                      color: theme.palette.error.main,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    })}
                  >
                    {internalToolingData.comparison.traditional.badge}
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 700, color: 'text.primary' }}>
                  {internalToolingData.comparison.traditional.title}
                </Typography>

                <Stack spacing={2} sx={{ pt: 1 }}>
                  {internalToolingData.comparison.traditional.points.map((pt, idx) => (
                    <Stack key={idx} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <CancelOutlinedIcon sx={{ fontSize: 20, color: 'error.main', flexShrink: 0, mt: 0.2 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {pt}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </ComparisonCard>
          </Grid>

          {/* WinVinaya Proprietary AI Engine */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ComparisonCard isHighlight={true}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box
                    sx={(theme) => ({
                      width: 44,
                      height: 44,
                      borderRadius: Number(theme.shape.borderRadius) * 1.3,
                      bgcolor: alpha(theme.palette.primary.main, 0.14),
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                    })}
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 24 }} />
                  </Box>

                  <Box
                    sx={(theme) => ({
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 99,
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                      color: theme.palette.primary.main,
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    })}
                  >
                    {internalToolingData.comparison.winvinaya.badge}
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'text.primary' }}>
                  {internalToolingData.comparison.winvinaya.title}
                </Typography>

                <Stack spacing={2} sx={{ pt: 1 }}>
                  {internalToolingData.comparison.winvinaya.points.map((pt, idx) => (
                    <Stack key={idx} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: 'primary.main', flexShrink: 0, mt: 0.2 }} />
                      <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.primary', fontWeight: 500 }}>
                        {pt}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </ComparisonCard>
          </Grid>
        </Grid>

        {/* Human QA Note Card */}
        <Box
          sx={(theme) => ({
            maxWidth: 1060,
            width: '100%',
            p: { xs: 3, sm: 3.5 },
            borderRadius: Number(theme.shape.borderRadius) * 1.6,
            bgcolor: alpha(theme.palette.accent.main, 0.05),
            border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2.5,
          })}
        >
          <Box
            sx={(theme) => ({
              p: 1.25,
              borderRadius: Number(theme.shape.borderRadius),
              bgcolor: alpha(theme.palette.accent.main, 0.14),
              color: theme.palette.accent.main,
              display: 'flex',
              flexShrink: 0,
            })}
          >
            <FactCheckOutlinedIcon sx={{ fontSize: 26 }} />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.925rem' }}>
            <strong style={{ color: 'inherit' }}>Expert Human Review Guarantee: </strong>
            {internalToolingData.expertNote}
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
)
