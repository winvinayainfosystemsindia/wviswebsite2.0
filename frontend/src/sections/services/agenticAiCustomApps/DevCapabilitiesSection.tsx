import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'
import { SectionHeading } from '../../../components'
import { devCapabilitiesData } from '../../../data/services/agenticAiCustomApps'

const CAPABILITY_ICONS: Record<string, ReactNode> = {
  'custom-web-mobile': <DevicesOutlinedIcon />,
  'enterprise-mis': <TableChartOutlinedIcon />,
  'ai-agent-design': <SmartToyOutlinedIcon />,
  'llm-api-integration': <AutoAwesomeOutlinedIcon />,
  'internal-automation': <SettingsSuggestOutlinedIcon />,
}

const CapabilityCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
}))

export const DevCapabilitiesSection = () => (
  <Box
    component="section"
    aria-labelledby="dev-capabilities-heading"
    sx={(theme) => ({
      bgcolor: alpha(theme.palette.accent.light, 0.04),
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="dev-capabilities-heading"
          eyebrow={devCapabilitiesData.eyebrow}
          heading={devCapabilitiesData.heading}
          description={devCapabilitiesData.description}
          maxWidth={760}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {devCapabilitiesData.capabilities.map((cap) => (
            <Grid key={cap.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <CapabilityCard>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box
                      sx={(theme) => ({
                        width: 44,
                        height: 44,
                        borderRadius: Number(theme.shape.borderRadius) * 1.3,
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                      })}
                    >
                      {CAPABILITY_ICONS[cap.id]}
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
                      {cap.badge}
                    </Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'text.primary' }}>
                    {cap.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.8875rem' }}>
                    {cap.description}
                  </Typography>
                </Stack>
              </CapabilityCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
