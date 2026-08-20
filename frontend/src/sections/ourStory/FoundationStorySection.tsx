import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, IconBadge, SectionHeading } from '../../components'
import { storyFoundation } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.08),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

/** "The Foundation That Shapes Everything" — accent-tinted band, mirroring the homepage's foundation teaser. */
export const FoundationStorySection = () => (
  <Root aria-labelledby="foundation-story-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 780, mx: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <IconBadge icon={<Diversity2OutlinedIcon />} tone="accent" size="lg" />
        <SectionHeading
          headingId="foundation-story-heading"
          eyebrow={storyFoundation.eyebrow}
          heading={storyFoundation.heading}
          maxWidth={720}
        />
        <Stack spacing={2.5}>
          {storyFoundation.paragraphs.map((paragraph, idx) => (
            <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              {paragraph}
            </Typography>
          ))}
        </Stack>
        <Button tone="accent" variant="contained" size="large" href={storyFoundation.cta.href} endIcon={<ArrowForwardIcon />}>
          {storyFoundation.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
