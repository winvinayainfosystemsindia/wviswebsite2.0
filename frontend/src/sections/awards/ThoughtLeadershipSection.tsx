import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import { Card, SectionHeading } from '../../components'
import { thoughtLeadership } from '../../data'

const THOUGHT_LEADERSHIP_ICONS: Record<string, ReactNode> = {
  'speaking-engagements': <RecordVoiceOverOutlinedIcon />,
  'policy-participation': <GavelOutlinedIcon />,
}

/** "Thought Leadership" — the team's contributions to the wider accessibility/inclusion conversation. */
export const ThoughtLeadershipSection = () => (
  <Box component="section" aria-labelledby="thought-leadership-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 7 }} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="thought-leadership-heading"
          eyebrow={thoughtLeadership.eyebrow}
          heading={thoughtLeadership.heading}
          description={thoughtLeadership.body}
          maxWidth={680}
        />
        <Grid container spacing={3} sx={{ width: '100%', justifyContent: 'center' }}>
          {thoughtLeadership.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 5 }} sx={{ display: 'flex' }}>
              <Card
                fullHeight
                icon={THOUGHT_LEADERSHIP_ICONS[item.id]}
                iconTone="primary"
                title={item.title}
                subtitle={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
