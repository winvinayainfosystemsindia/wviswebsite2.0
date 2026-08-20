import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import { Card, SectionHeading } from '../../components'
import { whyUs } from '../../data'

const WHY_US_ICONS: Record<string, ReactNode> = {
  'lived-expertise': <AccessibleOutlinedIcon />,
  standards: <WorkspacePremiumOutlinedIcon />,
  'compliant-and-usable': <CheckCircleOutlineOutlinedIcon />,
  'one-partner': <HandshakeOutlinedIcon />,
}

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.06),
}))

const StepCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 14px -2px ${alpha(theme.palette.common.black, 0.05)}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 12px 28px -6px ${alpha(theme.palette.primary.main, 0.15)}`,
  },
}))

export const WhyWinVinayaSection = () => (
  <Root aria-labelledby="why-us-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 8, md: 10 }}>
        {/* Top: 4 Core Differentiators */}
        <Stack spacing={{ xs: 6, md: 8 }}>
          <SectionHeading headingId="why-us-heading" eyebrow={whyUs.eyebrow} heading={whyUs.heading} maxWidth={640} />

          <Grid container spacing={3}>
            {whyUs.items.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
                <Card
                  fullHeight
                  icon={WHY_US_ICONS[item.id]}
                  iconTone="accent"
                  title={item.title}
                  subtitle={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Bottom: 4-Step Engagement Process */}
        <Stack spacing={4}>
          <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="overline" color="accent.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
              HOW WE WORK
            </Typography>
            <Typography variant="h3" sx={{ mt: 0.5 }}>
              {whyUs.workflowHeading}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {whyUs.workflowSteps.map((step) => (
              <Grid key={step.stepNumber} size={{ xs: 12, sm: 6, md: 3 }}>
                <StepCard>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 999,
                      bgcolor: alpha(theme.palette.accent.main, 0.12),
                      color: theme.palette.accent.main,
                      fontWeight: 800,
                      fontSize: '0.9rem',
                    })}
                  >
                    {step.stepNumber}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {step.description}
                  </Typography>
                </StepCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
