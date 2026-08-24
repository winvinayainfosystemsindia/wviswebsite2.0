import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Button, SectionHeading } from '../../../components'
import { productionProofData } from '../../../data/services/agenticAiCustomApps'

const ProofCard = styled(Box)<{ isPrimary?: boolean }>(({ theme, isPrimary }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: Number(theme.shape.borderRadius) * 2.2,
  backgroundColor: theme.palette.background.paper,
  border: isPrimary
    ? `2px solid ${alpha(theme.palette.primary.main, 0.4)}`
    : `1px solid ${theme.palette.divider}`,
  boxShadow: isPrimary
    ? `0 16px 36px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 12px ${alpha(theme.palette.common.black, 0.04)}`
    : `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  position: 'relative',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: isPrimary ? theme.palette.primary.main : alpha(theme.palette.accent.main, 0.5),
    boxShadow: isPrimary
      ? `0 24px 48px ${alpha(theme.palette.primary.main, 0.18)}`
      : `0 14px 32px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
}))

export const ProductionProofSection = () => (
  <Box
    component="section"
    aria-labelledby="production-proof-heading"
    id="production-proof"
    sx={{ bgcolor: 'background.paper' }}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="production-proof-heading"
          eyebrow={productionProofData.eyebrow}
          heading={productionProofData.heading}
          description={productionProofData.description}
          maxWidth={760}
        />

        <Grid container spacing={4} sx={{ width: '100%', maxWidth: 1140 }}>
          {productionProofData.systems.map((system, idx) => (
            <Grid key={system.id} size={{ xs: 12, md: 6 }}>
              <ProofCard isPrimary={idx === 0}>
                <Stack spacing={3}>
                  {/* Card Header: Icon & Badge */}
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
                      {idx === 0 ? <StorageOutlinedIcon sx={{ fontSize: 26 }} /> : <AutoFixHighOutlinedIcon sx={{ fontSize: 26 }} />}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.5,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: idx === 0 ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.accent.main, 0.1),
                        border: `1px solid ${idx === 0 ? alpha(theme.palette.primary.main, 0.3) : alpha(theme.palette.accent.main, 0.3)}`,
                        color: idx === 0 ? theme.palette.primary.main : theme.palette.accent.dark,
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.03em',
                      })}
                    >
                      {system.badge}
                    </Box>
                  </Stack>

                  {/* Title & Subtitle */}
                  <Box>
                    <Typography variant="h5" sx={{ fontSize: '1.4rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {system.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={(theme) => ({ color: idx === 0 ? theme.palette.primary.main : theme.palette.accent.dark, fontWeight: 700 })}>
                      {system.subtitle}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.925rem' }}>
                    {system.description}
                  </Typography>

                  {/* Feature Highlights */}
                  <Box sx={{ pt: 1, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.25, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Operational Capabilities:
                    </Typography>
                    <Stack spacing={1.25}>
                      {system.highlights.map((hl, hlIdx) => (
                        <Stack key={hlIdx} direction="row" spacing={1.2} sx={{ alignItems: 'flex-start' }}>
                          <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: idx === 0 ? 'primary.main' : 'accent.main', flexShrink: 0, mt: 0.2 }} />
                          <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.55, fontSize: '0.84rem' }}>
                            {hl}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>

                  {/* Callout Quote */}
                  <Box
                    sx={(theme) => ({
                      p: 2,
                      borderRadius: Number(theme.shape.borderRadius) * 1.2,
                      bgcolor: idx === 0 ? alpha(theme.palette.primary.main, 0.05) : alpha(theme.palette.accent.main, 0.05),
                      borderLeft: `3px solid ${idx === 0 ? theme.palette.primary.main : theme.palette.accent.main}`,
                      display: 'flex',
                      gap: 1.2,
                    })}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 20, color: idx === 0 ? 'primary.main' : 'accent.main', transform: 'rotate(180deg)' }} />
                    <Typography variant="caption" sx={{ color: 'text.primary', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.5 }}>
                      {system.quote}
                    </Typography>
                  </Box>

                  {/* Action Link if URL exists */}
                  {system.url && (
                    <Box sx={{ pt: 1 }}>
                      <Button
                        variant="outlined"
                        tone="primary"
                        size="medium"
                        href={system.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                        sx={{ fontWeight: 700, textTransform: 'none', fontSize: '0.875rem' }}
                      >
                        Visit crm.winvinaya.com
                      </Button>
                    </Box>
                  )}
                </Stack>
              </ProofCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
