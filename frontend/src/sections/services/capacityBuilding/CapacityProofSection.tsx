import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import { SectionHeading } from '../../../components'
import { capacityProofData } from '../../../data/services/capacityBuilding'

const PROOF_ICONS = [
  <CastForEducationOutlinedIcon key="1" />,
  <HandshakeOutlinedIcon key="2" />,
  <AutoAwesomeOutlinedIcon key="3" />,
]

const ProofCard = styled(Box)<{ isHighlight?: boolean }>(({ theme, isHighlight }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.5),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: isHighlight
    ? `2px solid ${alpha(theme.palette.primary.main, 0.4)}`
    : `1px solid ${theme.palette.divider}`,
  boxShadow: isHighlight
    ? `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 12px ${alpha(theme.palette.common.black, 0.04)}`
    : `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: isHighlight ? theme.palette.primary.main : alpha(theme.palette.accent.main, 0.5),
    boxShadow: isHighlight
      ? `0 24px 48px ${alpha(theme.palette.primary.main, 0.18)}`
      : `0 14px 32px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
}))

export const CapacityProofSection = () => (
  <Box component="section" aria-labelledby="capacity-proof-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="capacity-proof-heading"
          eyebrow={capacityProofData.eyebrow}
          heading={capacityProofData.heading}
          description={capacityProofData.description}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {capacityProofData.items.map((item, idx) => (
            <Grid key={item.id} size={{ xs: 12, lg: 4 }}>
              <ProofCard isHighlight={idx === 0}>
                <Stack spacing={2.5}>
                  {/* Top Row: Icon & Badge */}
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 48,
                        height: 48,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: idx === 0 ? alpha(theme.palette.primary.main, 0.14) : alpha(theme.palette.accent.main, 0.14),
                        color: idx === 0 ? theme.palette.primary.main : theme.palette.accent.dark,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${idx === 0 ? alpha(theme.palette.primary.main, 0.3) : alpha(theme.palette.accent.main, 0.3)}`,
                      })}
                    >
                      {PROOF_ICONS[idx]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: idx === 0 ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.accent.main, 0.1),
                        border: `1px solid ${idx === 0 ? alpha(theme.palette.primary.main, 0.3) : alpha(theme.palette.accent.main, 0.3)}`,
                        color: idx === 0 ? theme.palette.primary.main : theme.palette.accent.dark,
                        fontSize: '0.725rem',
                        fontWeight: 800,
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
                    <Typography variant="caption" sx={(theme) => ({ color: idx === 0 ? theme.palette.primary.main : theme.palette.accent.dark, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {item.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {item.description}
                  </Typography>

                  {/* Highlights Checklist */}
                  <Box sx={{ pt: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Outcomes:
                    </Typography>
                    <Stack spacing={1}>
                      {item.highlights.map((hl, hlIdx) => (
                        <Stack key={hlIdx} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                          <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: idx === 0 ? 'primary.main' : 'accent.main', flexShrink: 0, mt: 0.3 }} />
                          <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.8125rem' }}>
                            {hl}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </ProofCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
