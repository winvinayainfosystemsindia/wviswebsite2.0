import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { SectionHeading } from '../../components'
import { leadershipTeam } from '../../data'
import { TeamMemberCard } from './TeamMemberCard'

export const LeadershipSection = () => (
  <Box component="section" aria-labelledby="leadership-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 5, md: 6 }} sx={{ alignItems: 'center' }}>
        <SectionHeading headingId="leadership-heading" heading="Leadership Team" maxWidth={620} />
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {leadershipTeam.map((member, index) => (
            <Grid key={member.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <TeamMemberCard member={member} toneIndex={index} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
