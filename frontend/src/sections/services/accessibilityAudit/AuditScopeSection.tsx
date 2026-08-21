import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LanguageIcon from '@mui/icons-material/Language'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import DescriptionIcon from '@mui/icons-material/Description'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import { SectionHeading } from '../../../components'
import { auditScopeData } from '../../../data/services/accessibilityAudit'

const SCOPE_ICONS: Record<string, ReactNode> = {
  web: <LanguageIcon />,
  mobile: <PhoneIphoneIcon />,
  documents: <DescriptionIcon />,
  dashboards: <DashboardIcon />,
  fintech: <ShowChartIcon />,
}

const ScopeCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.75),
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: alpha(theme.palette.accent.main, 0.5),
    boxShadow: `0 14px 30px ${alpha(theme.palette.accent.main, 0.14)}`,
  },
}))

export const AuditScopeSection = () => (
  <Box
    component="section"
    aria-labelledby="audit-scope-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="audit-scope-heading"
          eyebrow={auditScopeData.eyebrow}
          heading={auditScopeData.heading}
          description={auditScopeData.description}
          maxWidth={680}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {auditScopeData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ScopeCard>
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
                    border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                  })}
                >
                  {SCOPE_ICONS[item.id]}
                </Box>
                <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </ScopeCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
