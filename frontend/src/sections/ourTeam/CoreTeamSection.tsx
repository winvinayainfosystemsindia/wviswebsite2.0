import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { SectionHeading } from '../../components'
import { coreTeam } from '../../data'
import { TeamMemberCard } from './TeamMemberCard'

export const CoreTeamSection = () => (
  <Box component="section" aria-labelledby="core-team-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={{ xs: 5, md: 6 }} sx={{ alignItems: 'center' }}>
        <SectionHeading headingId="core-team-heading" heading="Core Team" maxWidth={620} />
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {coreTeam.map((member, index) => (
            <Grid key={member.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <TeamMemberCard member={member} toneIndex={index} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)
