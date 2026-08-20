import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { Chip, SectionHeading } from '../../components'
import { foundationPartnerships } from '../../data'

/** "Partnerships That Extend the Reach" — named collaborators, shown as a tag row beneath the context paragraph. */
export const PartnershipsSection = () => (
  <Box component="section" aria-labelledby="foundation-partnerships-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="foundation-partnerships-heading"
          eyebrow={foundationPartnerships.eyebrow}
          heading={foundationPartnerships.heading}
          description={foundationPartnerships.body}
          maxWidth={720}
        />
        <Stack direction="row" spacing={1.25} sx={{ flexWrap: 'wrap', gap: 1.25, justifyContent: 'center' }}>
          {foundationPartnerships.partners.map((partner) => (
            <Chip key={partner} label={partner} tone="accent" variant="outlined" />
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
)
