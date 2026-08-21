import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SavingsIcon from '@mui/icons-material/Savings'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { SectionHeading } from '../../../components'
import { audienceData } from '../../../data/services/accessibilityAudit'

const AUDIENCE_ICONS: Record<string, ReactNode> = {
  'sebi-entities': <AccountBalanceIcon />,
  'govt-psu': <AccountTreeIcon />,
  fintech: <SavingsIcon />,
  enterprise: <ShoppingBagIcon />,
}

const AudienceCard = styled(Box)(({ theme }) => ({
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
    transform: 'translateY(-3px)',
    borderColor: theme.palette.accent.main,
    boxShadow: `0 12px 28px ${alpha(theme.palette.accent.main, 0.12)}`,
  },
}))

export const WhoThisIsForSection = () => (
  <Box component="section" aria-labelledby="who-this-is-for-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="who-this-is-for-heading"
          eyebrow={audienceData.eyebrow}
          heading={audienceData.heading}
          maxWidth={680}
        />

        <Grid container spacing={3} sx={{ width: '100%' }}>
          {audienceData.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
              <AudienceCard>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
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
                      flexShrink: 0,
                    })}
                  >
                    {AUDIENCE_ICONS[item.id]}
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: '1.085rem', fontWeight: 700, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, pt: 0.5 }}>
                  {item.description}
                </Typography>
              </AudienceCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
