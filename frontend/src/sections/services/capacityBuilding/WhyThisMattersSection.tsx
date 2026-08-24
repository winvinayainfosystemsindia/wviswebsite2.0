import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { SectionHeading } from '../../../components'
import { whyThisMattersData } from '../../../data/services/capacityBuilding'

const STAGE_ICONS = [
  <SchoolOutlinedIcon key="1" />,
  <ConstructionOutlinedIcon key="2" />,
  <VerifiedUserOutlinedIcon key="3" />,
]

const StageCard = styled(Box)(({ theme }) => ({
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

export const WhyThisMattersSection = () => (
  <Box
    component="section"
    aria-labelledby="why-this-matters-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="why-this-matters-heading"
          eyebrow={whyThisMattersData.eyebrow}
          heading={whyThisMattersData.heading}
          description={whyThisMattersData.description}
          maxWidth={800}
        />

        {/* Feature Quote Card */}
        <Box
          sx={(theme) => ({
            maxWidth: 960,
            width: '100%',
            p: { xs: 3, sm: 3.5 },
            borderRadius: Number(theme.shape.borderRadius) * 1.6,
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
          })}
        >
          <FormatQuoteIcon sx={{ fontSize: 32, color: 'primary.main', transform: 'rotate(180deg)', flexShrink: 0 }} />
          <Typography variant="body1" sx={(theme) => ({ color: theme.palette.text.primary, fontWeight: 500, lineHeight: 1.7, fontSize: '1.05rem' })}>
            {whyThisMattersData.subtext}
          </Typography>
        </Box>

        {/* 3-Stage Arc Grid */}
        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {whyThisMattersData.arc.map((stage, idx) => (
            <Grid key={stage.step} size={{ xs: 12, md: 4 }}>
              <StageCard>
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
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {STAGE_ICONS[idx]}
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
                      STAGE 0{stage.step}
                    </Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary' }}>
                    {stage.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                    {stage.description}
                  </Typography>
                </Stack>
              </StageCard>
            </Grid>
          ))}
        </Grid>

        {/* Ribbon Lifecycle Note */}
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
            AWARENESS WORKSHOP
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16, color: 'accent.main' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'accent.dark', fontSize: '0.8125rem' }}>
            PRACTICAL EXECUTION
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16, color: 'accent.main' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'accent.dark', fontSize: '0.8125rem' }}>
            SUSTAINED IN-HOUSE INDEPENDENCE
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
)
