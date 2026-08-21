import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { SectionHeading } from '../../../components'
import { sebiMandateData } from '../../../data/services/accessibilityAudit'

const RequirementCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
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
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

const HighlightBanner = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(3.5, 4),
  backgroundColor: alpha(theme.palette.primary.main, 0.06),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
}))

export const SebiMandateSection = () => (
  <Box component="section" aria-labelledby="sebi-mandate-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="sebi-mandate-heading"
          eyebrow={sebiMandateData.eyebrow}
          heading={sebiMandateData.heading}
          description={sebiMandateData.description}
          maxWidth={780}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {sebiMandateData.requirements.map((req) => (
            <Grid key={req.number} size={{ xs: 12, sm: 6 }}>
              <RequirementCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={(theme) => ({
                      width: 40,
                      height: 40,
                      borderRadius: 999,
                      bgcolor: alpha(theme.palette.primary.main, 0.14),
                      color: theme.palette.primary.main,
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      flexShrink: 0,
                    })}
                  >
                    0{req.number}
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: '1.085rem', fontWeight: 700, color: 'text.primary' }}>
                    {req.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, pt: 0.5 }}>
                  {req.description}
                </Typography>
              </RequirementCard>
            </Grid>
          ))}
        </Grid>

        <HighlightBanner sx={{ maxWidth: 960, width: '100%' }}>
          <Box
            sx={(theme) => ({
              p: 1.5,
              borderRadius: Number(theme.shape.borderRadius) * 1.3,
              bgcolor: alpha(theme.palette.primary.main, 0.14),
              color: theme.palette.primary.main,
              display: 'flex',
              flexShrink: 0,
            })}
          >
            <AccountBalanceIcon sx={{ fontSize: 28 }} />
          </Box>
          <Stack spacing={0.75}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <VerifiedUserIcon sx={{ fontSize: 18, color: 'primary.main' }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                Stock Market & Trading Platform Expertise
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.925rem' }}>
              {sebiMandateData.note}
            </Typography>
          </Stack>
        </HighlightBanner>
      </Stack>
    </Container>
  </Box>
)
