import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import { Card, SectionHeading } from '../../components'
import { storyProof } from '../../data'

const PROOF_ICONS: Record<string, ReactNode> = {
  'namm-academy': <SchoolOutlinedIcon />,
  'ai-capacity-building': <GroupsOutlinedIcon />,
  'force-for-good': <VolunteerActivismOutlinedIcon />,
}

/** "Proof in Practice" — concrete examples grounding the story in real programs. */
export const ProofSection = () => (
  <Box component="section" aria-labelledby="proof-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 6, md: 7 }} sx={{ alignItems: 'center' }}>
        <SectionHeading headingId="proof-heading" eyebrow={storyProof.eyebrow} heading={storyProof.heading} maxWidth={640} />
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {storyProof.items.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <Card fullHeight icon={PROOF_ICONS[item.id]} iconTone="accent" title={item.title} subtitle={item.description} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
