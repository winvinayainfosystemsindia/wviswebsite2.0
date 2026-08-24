import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import { SectionHeading } from '../../../components'
import { agenticDifferentiatorsData } from '../../../data/services/agenticAiCustomApps'

const DIFF_ICONS: Record<string, ReactNode> = {
  'own-client': <FactCheckOutlinedIcon />,
  'accessible-by-design': <AccessibleForwardOutlinedIcon />,
  'integrated-ai': <SmartToyOutlinedIcon />,
}

const DifferentiatorCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
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
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

export const AgenticDifferentiatorsSection = () => (
  <Box component="section" aria-labelledby="agentic-diff-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="agentic-diff-heading"
          eyebrow={agenticDifferentiatorsData.eyebrow}
          heading={agenticDifferentiatorsData.heading}
          description={agenticDifferentiatorsData.description}
          maxWidth={760}
        />

        <Grid container spacing={3.5} sx={{ width: '100%' }}>
          {agenticDifferentiatorsData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }}>
              <DifferentiatorCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box
                    sx={(theme) => ({
                      width: 48,
                      height: 48,
                      borderRadius: Number(theme.shape.borderRadius) * 1.3,
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    })}
                  >
                    {DIFF_ICONS[item.id]}
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
                    {item.badge}
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'text.primary' }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.9rem' }}>
                  {item.description}
                </Typography>
              </DifferentiatorCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
