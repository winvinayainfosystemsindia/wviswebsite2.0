import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import VerifiedIcon from '@mui/icons-material/Verified'
import GavelIcon from '@mui/icons-material/Gavel'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PublicIcon from '@mui/icons-material/Public'
import PolicyIcon from '@mui/icons-material/Policy'
import SecurityIcon from '@mui/icons-material/Security'
import { SectionHeading } from '../../../components'
import { auditStandardsData } from '../../../data/services/accessibilityAudit'

const STANDARD_ICONS: Record<string, React.ReactNode> = {
  wcag: <VerifiedIcon />,
  sebi: <AccountBalanceIcon />,
  gigw: <PolicyIcon />,
  is17802: <SecurityIcon />,
  rpwd: <GavelIcon />,
  section508: <PublicIcon />,
  ada: <WorkspacePremiumIcon />,
}

const StandardCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['border-color', 'box-shadow', 'transform']),
  '&:hover': {
    borderColor: alpha(theme.palette.accent.main, 0.45),
    boxShadow: `0 14px 30px ${alpha(theme.palette.accent.main, 0.12)}`,
    transform: 'translateY(-4px)',
  },
}))

export const AuditStandardsSection = () => (
  <Box
    component="section"
    aria-labelledby="standards-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="standards-heading"
          eyebrow={auditStandardsData.eyebrow}
          heading={auditStandardsData.heading}
          description={auditStandardsData.description}
          maxWidth={720}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {auditStandardsData.standards.map((standard) => (
            <Grid key={standard.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <StandardCard>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 44,
                        height: 44,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.accent.main, 0.12),
                        color: theme.palette.accent.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`,
                      })}
                    >
                      {STANDARD_ICONS[standard.id]}
                    </Box>

                    {standard.badge && (
                      <Box
                        sx={(theme) => ({
                          px: 1.25,
                          py: 0.4,
                          borderRadius: 99,
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                          color: theme.palette.primary.dark,
                          fontSize: '0.725rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                        })}
                      >
                        {standard.badge}
                      </Box>
                    )}
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                    {standard.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {standard.description}
                  </Typography>
                </Stack>
              </StandardCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
