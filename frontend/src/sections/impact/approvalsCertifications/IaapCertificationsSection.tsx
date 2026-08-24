import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { SectionHeading } from '../../../components'
import { iaapCertificationsData } from '../../../data/impact/approvalsCertifications'

const IAAP_ICONS: Record<string, ReactNode> = {
  cpacc: <WorkspacePremiumOutlinedIcon />,
  was: <CodeOutlinedIcon />,
  'sebi-ready': <GavelOutlinedIcon />,
}

const CredentialCard = styled(Box)(({ theme }) => ({
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
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const IaapCertificationsSection = () => (
  <Box component="section" aria-labelledby="iaap-certifications-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="iaap-certifications-heading"
          eyebrow={iaapCertificationsData.eyebrow}
          heading={iaapCertificationsData.heading}
          description={iaapCertificationsData.description}
          maxWidth={780}
        />

        {/* Feature Quote Card */}
        <Box
          sx={(theme) => ({
            maxWidth: 960,
            width: '100%',
            p: { xs: 3, sm: 3.5 },
            borderRadius: Number(theme.shape.borderRadius) * 0.1,
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
            {iaapCertificationsData.quote}
          </Typography>
        </Box>

        {/* 3 Credential Pillars */}
        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {iaapCertificationsData.credentials.map((cred) => (
            <Grid key={cred.id} size={{ xs: 12, md: 4 }}>
              <CredentialCard>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 46,
                        height: 46,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {IAAP_ICONS[cred.id]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        border: `1px solid ${alpha(theme.palette.accent.main, 0.3)}`,
                        color: theme.palette.accent.dark,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        letterSpacing: '0.03em',
                      })}
                    >
                      {cred.badge}
                    </Box>
                  </Stack>

                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                      {cred.title}
                    </Typography>
                    <Typography variant="caption" sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700, fontSize: '0.8125rem' })}>
                      {cred.subtitle}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.9rem' }}>
                    {cred.description}
                  </Typography>
                </Stack>

                <Box
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: Number(theme.shape.borderRadius) * 0.1,
                    bgcolor: alpha(theme.palette.accent.main, 0.05),
                    border: `1px dashed ${alpha(theme.palette.accent.main, 0.3)}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  })}
                >
                  <VerifiedUserIcon sx={{ fontSize: 16, color: 'accent.main', flexShrink: 0 }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.78125rem' }}>
                    Application: {cred.relevance}
                  </Typography>
                </Box>
              </CredentialCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
