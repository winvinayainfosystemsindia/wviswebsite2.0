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
  backgroundColor: alpha(theme.palette.accent.light, 0.05),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const StepCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3.25),
  borderRadius: Number(theme.shape.borderRadius) * 1.8,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 16px ${alpha(theme.palette.text.primary, 0.04)}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.75),
  transition: theme.transitions.create(['transform', 'border-color', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 14px 30px ${alpha(theme.palette.primary.main, 0.14)}`,
  },
}))

export const WhyWinVinayaSection = () => (
  <Root aria-labelledby="why-us-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 8, md: 10 }} sx={{ alignItems: 'center' }}>
        {/* Top: 4 Core Differentiators */}
        <Stack spacing={{ xs: 6, md: 8 }} sx={{ width: '100%', alignItems: 'center' }}>
          <SectionHeading headingId="why-us-heading" eyebrow={whyUs.eyebrow} heading={whyUs.heading} maxWidth={640} />

          <Grid container spacing={3} sx={{ width: '100%' }}>
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
        <Stack spacing={4} sx={{ width: '100%', alignItems: 'center' }}>
          <SectionHeading
            eyebrow="HOW WE WORK"
            heading={whyUs.workflowHeading}
            headingVariant="h3"
            maxWidth={600}
          />

          <Grid container spacing={3} sx={{ width: '100%' }}>
            {whyUs.workflowSteps.map((step) => (
              <Grid key={step.stepNumber} size={{ xs: 12, sm: 6, md: 3 }}>
                <StepCard>
                  <Box
                    sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 42,
                      height: 42,
                      borderRadius: 999,
                      bgcolor: alpha(theme.palette.accent.main, 0.14),
                      color: theme.palette.accent.main,
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                    })}
                  >
                    {step.stepNumber}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}>
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
