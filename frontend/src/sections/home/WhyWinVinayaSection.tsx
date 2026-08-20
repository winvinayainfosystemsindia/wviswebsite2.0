import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
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

/**
 * "Why WinVinaya" trust/differentiator grid — the section that carries the
 * brand's core credibility claim, so it gets a subtly tinted band to stand
 * apart from the plain sections around it.
 */
export const WhyWinVinayaSection = () => (
  <Root aria-labelledby="why-us-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading headingId="why-us-heading" eyebrow={whyUs.eyebrow} heading={whyUs.heading} maxWidth={620} />

        <Grid container spacing={3}>
          {whyUs.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex' }}>
              <Card
                fullHeight
                icon={WHY_US_ICONS[item.id]}
                iconTone="primary"
                title={item.title}
                subtitle={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Root>
)
