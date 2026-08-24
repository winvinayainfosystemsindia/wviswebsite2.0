import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { Button, SectionHeading } from '../../../components'

const SpotlightContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2.4,
  padding: theme.spacing(4.5),
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.35)}`,
  boxShadow: `0 20px 44px -8px ${alpha(theme.palette.primary.main, 0.14)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const SPOTLIGHT_HIGHLIGHTS = [
  'Multi-center trainer and staff timesheet collation with zero spreadsheet friction',
  'Automated approval workflows and anomaly detection built into daily operations',
  'Centralized program MIS and beneficiary tracking for WinVinaya Foundation',
  'Accessible by design across screen-reader and keyboard user workflows',
]

export const NamedCaseStudySpotlightSection = () => (
  <Box component="section" aria-labelledby="named-spotlight-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="named-spotlight-heading"
          eyebrow="Featured Live Case Study"
          heading="The Clearest Proof: A System We Depend on Ourselves"
          description="While most client case studies are kept confidential, crm.winvinaya.com is one story we can name outright — our own custom, AI-powered MIS running daily Foundation operations."
          maxWidth={800}
        />

        <SpotlightContainer sx={{ width: '100%', maxWidth: 1100 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
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
                    LIVE PRODUCTION DEPLOYMENT
                  </Box>
                  <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}>
                    WinVinaya Foundation
                  </Typography>
                </Stack>

                <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.875rem' }, fontWeight: 800, color: 'text.primary', lineHeight: 1.25 }}>
                  crm.winvinaya.com — AI-Powered MIS & Timesheet Management System
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.975rem' }}>
                  Anyone can propose an AI strategy or pitch a slide deck. We believe in engineering solutions that prove their worth in production. We designed, developed, and deployed <strong>crm.winvinaya.com</strong> to replace fragmented manual trackers and spreadsheets with a single, highly reliable operational backbone.
                </Typography>

                <Stack spacing={1.25} sx={{ pt: 1 }}>
                  {SPOTLIGHT_HIGHLIGHTS.map((item, idx) => (
                    <Stack key={idx} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                      <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'primary.main', flexShrink: 0, mt: 0.3 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55, fontSize: '0.8875rem' }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Box sx={{ pt: 1.5 }}>
                  <Button
                    tone="primary"
                    variant="contained"
                    size="large"
                    href="https://crm.winvinaya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon />}
                    sx={{ px: 3.5, py: 1.5, fontWeight: 700 }}
                  >
                    Launch Live System: crm.winvinaya.com
                  </Button>
                </Box>
              </Stack>
            </Grid>

            {/* Right Column: Architecture & Metric Visual Card */}
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
                  Core System Architecture
                </Typography>

                <Stack spacing={1.75}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={(theme) => ({ p: 1, borderRadius: Number(theme.shape.borderRadius), bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.main })}>
                      <AutoAwesomeOutlinedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                        Agentic Automation
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Automated timesheet collation and anomaly detection
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={(theme) => ({ p: 1, borderRadius: Number(theme.shape.borderRadius), bgcolor: alpha(theme.palette.accent.main, 0.12), color: theme.palette.accent.dark })}>
                      <StorageOutlinedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                        PostgreSQL Data Layer
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Structured relational models & secure audit trails
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={(theme) => ({ p: 1, borderRadius: Number(theme.shape.borderRadius), bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.main })}>
                      <TableChartOutlinedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                        Executive MIS Dashboards
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Real-time student, cohort, and center metrics
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </SpotlightContainer>
      </Stack>
    </Container>
  </Box>
)
