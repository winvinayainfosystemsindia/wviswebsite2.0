import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import { SectionHeading } from '../../../components'
import { capacityDomainsData } from '../../../data/services/capacityBuilding'

const DOMAIN_ICONS: Record<string, ReactNode> = {
  genai: <AutoAwesomeOutlinedIcon />,
  office: <ArticleOutlinedIcon />,
  'power-platform': <InsightsOutlinedIcon />,
  'test-automation': <TerminalOutlinedIcon />,
  'software-testing': <BugReportOutlinedIcon />,
  'software-dev': <CodeOutlinedIcon />,
  fullstack: <LayersOutlinedIcon />,
  python: <PsychologyOutlinedIcon />,
  postgres: <StorageOutlinedIcon />,
}

const DomainCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.6,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const CapacityDomainsSection = () => (
  <Box component="section" aria-labelledby="capacity-domains-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="capacity-domains-heading"
          eyebrow={capacityDomainsData.eyebrow}
          heading={capacityDomainsData.heading}
          description={capacityDomainsData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {capacityDomainsData.domains.map((domain) => (
            <Grid key={domain.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <DomainCard>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        p: 1.25,
                        borderRadius: Number(theme.shape.borderRadius),
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        flexShrink: 0,
                      })}
                    >
                      {DOMAIN_ICONS[domain.id]}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        px: 1.2,
                        py: 0.35,
                        borderRadius: 99,
                        bgcolor: alpha(theme.palette.accent.main, 0.1),
                        color: theme.palette.accent.dark,
                        fontSize: '0.725rem',
                        fontWeight: 700,
                      })}
                    >
                      {domain.category}
                    </Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'text.primary', pt: 0.5 }}>
                    {domain.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.875rem' }}>
                    {domain.description}
                  </Typography>
                </Stack>
              </DomainCard>
            </Grid>
          ))}
        </Grid>

        {/* Full-Stack Callout Banner */}
        <Box
          sx={(theme) => ({
            maxWidth: 960,
            width: '100%',
            p: { xs: 3, sm: 3.5 },
            borderRadius: Number(theme.shape.borderRadius) * 1.6,
            bgcolor: alpha(theme.palette.accent.main, 0.05),
            border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,
          })}
        >
          <Box
            sx={(theme) => ({
              p: 1.5,
              borderRadius: Number(theme.shape.borderRadius),
              bgcolor: alpha(theme.palette.accent.main, 0.14),
              color: theme.palette.accent.main,
              display: 'flex',
              flexShrink: 0,
            })}
          >
            <HubOutlinedIcon sx={{ fontSize: 28 }} />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            <strong style={{ color: 'inherit' }}>Cross-Stack Enablement: </strong>
            {capacityDomainsData.callout}
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
)
