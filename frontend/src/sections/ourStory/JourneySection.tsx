import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionHeading } from '../../components'
import { storyJourney } from '../../data'

const Highlight = styled(Box)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.accent.main}`,
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.accent.main, 0.05),
  borderRadius: `0 ${Number(theme.shape.borderRadius)}px ${Number(theme.shape.borderRadius)}px 0`,
}))

/** "From Testing Company to Inclusion-Led IT Partner" — the narrative pivot. */
export const JourneySection = () => (
  <Box component="section" aria-labelledby="journey-heading" sx={{ bgcolor: 'background.paper' }}>
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="journey-heading"
          eyebrow={storyJourney.eyebrow}
          heading={storyJourney.heading}
          maxWidth={720}
        />
        <Stack spacing={2.5} sx={{ maxWidth: 780, width: '100%' }}>
          {storyJourney.paragraphs.map((paragraph, idx) => (
            <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              {paragraph}
            </Typography>
          ))}
          <Highlight>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary', fontWeight: 600 }}>
              {storyJourney.highlight}
            </Typography>
          </Highlight>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
