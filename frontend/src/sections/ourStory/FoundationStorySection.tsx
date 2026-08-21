import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, IconBadge, SectionHeading } from '../../components'
import { storyFoundation } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.07),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

/** "The Foundation That Shapes Everything" — accent-tinted narrative section. */
export const FoundationStorySection = () => (
  <Root aria-labelledby="foundation-story-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 800, mx: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <IconBadge icon={<Diversity2OutlinedIcon />} tone="accent" size="lg" />
        <SectionHeading
          headingId="foundation-story-heading"
          eyebrow={storyFoundation.eyebrow}
          heading={storyFoundation.heading}
          maxWidth={760}
        />
        <Stack spacing={2.75}>
          {storyFoundation.paragraphs.map((paragraph, idx) => (
            <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.085rem', lineHeight: 1.8 }}>
              {paragraph}
            </Typography>
          ))}
        </Stack>
        <Box sx={{ pt: 1 }}>
          <Button tone="accent" variant="contained" size="large" href={storyFoundation.cta.href} endIcon={<ArrowForwardIcon />}>
            {storyFoundation.cta.label}
          </Button>
        </Box>
      </Stack>
    </Container>
  </Root>
)
