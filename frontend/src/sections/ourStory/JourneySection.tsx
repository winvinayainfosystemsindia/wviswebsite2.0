import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionHeading } from '../../components'
import { storyJourney } from '../../data'

const Highlight = styled(Box)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.accent.main}`,
  paddingLeft: theme.spacing(2.75),
  paddingRight: theme.spacing(2.5),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  backgroundColor: alpha(theme.palette.accent.main, 0.06),
  borderRadius: `0 ${Number(theme.shape.borderRadius) * 1.2}px ${Number(theme.shape.borderRadius) * 1.2}px 0`,
}))

/** "From Testing Company to Inclusion-Led IT Partner" — narrative pivot section. */
export const JourneySection = () => (
  <Box
    component="section"
    aria-labelledby="journey-heading"
    sx={(theme) => ({
      bgcolor: theme.palette.background.paper,
      borderTop: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={5} sx={{ alignItems: 'center' }}>
        <SectionHeading
          headingId="journey-heading"
          eyebrow={storyJourney.eyebrow}
          heading={storyJourney.heading}
          maxWidth={760}
        />
        <Stack spacing={3} sx={{ maxWidth: 820, width: '100%' }}>
          {storyJourney.paragraphs.map((paragraph, idx) => (
            <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.085rem', lineHeight: 1.8 }}>
              {paragraph}
            </Typography>
          ))}
          <Highlight>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary', fontWeight: 600, lineHeight: 1.65 }}>
              {storyJourney.highlight}
            </Typography>
          </Highlight>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
