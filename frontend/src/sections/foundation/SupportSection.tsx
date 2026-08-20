import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined'
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined'
import { Card, SectionHeading } from '../../components'
import { support } from '../../data'

const SUPPORT_ICONS: Record<string, ReactNode> = {
  mentoring: <SupportAgentOutlinedIcon />,
  educonnect: <ConnectWithoutContactOutlinedIcon />,
  'self-sustaining': <SelfImprovementOutlinedIcon />,
}

/** "How Candidates Are Supported" — what happens after enrollment, through to independence. */
export const SupportSection = () => (
  <Box component="section" aria-labelledby="support-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 7 }} sx={{ alignItems: 'center' }}>
        <SectionHeading headingId="support-heading" eyebrow={support.eyebrow} heading={support.heading} maxWidth={680} />
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {support.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <Card fullHeight icon={SUPPORT_ICONS[item.id]} iconTone="primary" title={item.title} subtitle={item.description} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
