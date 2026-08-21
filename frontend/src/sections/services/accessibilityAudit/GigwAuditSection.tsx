import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PolicyIcon from '@mui/icons-material/Policy'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { SectionHeading } from '../../../components'
import { gigwData } from '../../../data/services/accessibilityAudit'

const HighlightCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2.75, 3),
  borderRadius: Number(theme.shape.borderRadius) * 1.6,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.accent.main,
    boxShadow: `0 12px 28px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
}))

export const GigwAuditSection = () => (
  <Box
    component="section"
    aria-labelledby="gigw-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.05),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="gigw-heading"
          eyebrow={gigwData.eyebrow}
          heading={gigwData.heading}
          description={gigwData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%', maxWidth: 960 }}>
          {gigwData.highlights.map((highlight, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <HighlightCard>
                <Box
                  sx={(theme) => ({
                    p: 1.25,
                    borderRadius: Number(theme.shape.borderRadius) * 1.2,
                    bgcolor: alpha(theme.palette.accent.main, 0.14),
                    color: theme.palette.accent.main,
                    display: 'flex',
                    flexShrink: 0,
                    border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                  })}
                >
                  <PolicyIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center', mb: 0.5 }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: 'accent.main' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      Key Checkpoint
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {highlight}
                  </Typography>
                </Box>
              </HighlightCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
