import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import { SectionHeading } from '../../../components'
import { organizationalApprovalsData } from '../../../data/impact/approvalsCertifications'

const ApprovalSpotlightCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.4,
  padding: theme.spacing(4.5),
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.35)}`,
  boxShadow: `0 20px 44px -8px ${alpha(theme.palette.primary.main, 0.12)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

export const OrganizationalApprovalsSection = () => (
  <Box
    component="section"
    aria-labelledby="org-approvals-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="org-approvals-heading"
          eyebrow={organizationalApprovalsData.eyebrow}
          heading={organizationalApprovalsData.heading}
          description={organizationalApprovalsData.description}
          maxWidth={780}
        />

        {organizationalApprovalsData.approvals.map((item) => (
          <ApprovalSpotlightCard key={item.id} sx={{ width: '100%', maxWidth: 1100 }}>
            <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                    <Box
                      sx={(theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.75,
                        px: 1.5,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.15),
                        color: theme.palette.accent.dark,
                        fontSize: '0.75rem',
                        fontWeight: 800,
                      })}
                    >
                      <VerifiedUserIcon sx={{ fontSize: 16 }} />
                      {item.badge}
                    </Box>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}>
                      {item.statPill}
                    </Typography>
                  </Stack>

                  <Box>
                    <Typography variant="h4" sx={{ fontSize: { xs: '1.4rem', sm: '1.75rem' }, fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.9375rem' })}>
                      {item.subtitle}
                    </Typography>
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {item.description}
                  </Typography>

                  <Stack spacing={1.25} sx={{ pt: 1 }}>
                    {item.highlights.map((hl, idx) => (
                      <Stack key={idx} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                        <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'primary.main', flexShrink: 0, mt: 0.3 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55, fontSize: '0.8875rem' }}>
                          {hl}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>

              {/* Right Column: Visual Verification Details Card */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={(theme) => ({
                    p: 3.5,
                    borderRadius: Number(theme.shape.borderRadius) * 0.1,
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                  })}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.8125rem' }}>
                    Legal & Compliance Overview
                  </Typography>

                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={(theme) => ({ p: 1, borderRadius: Number(theme.shape.borderRadius) * 0.1, bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.main })}>
                        <AccountBalanceOutlinedIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                          Registered Charitable Trust
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Registered under Indian Trust Act for social welfare
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={(theme) => ({ p: 1, borderRadius: Number(theme.shape.borderRadius) * 0.1, bgcolor: alpha(theme.palette.accent.main, 0.12), color: theme.palette.accent.dark })}>
                        <DescriptionOutlinedIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                          Section 80G Tax Deductible
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Income Tax Department of India certification
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={(theme) => ({ p: 1, borderRadius: Number(theme.shape.borderRadius) * 0.1, bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.main })}>
                        <VolunteerActivismOutlinedIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                          CSR Mandate Eligible
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Corporate Social Responsibility partnership ready
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </ApprovalSpotlightCard>
        ))}
      </Stack>
    </Container>
  </Box>
)
