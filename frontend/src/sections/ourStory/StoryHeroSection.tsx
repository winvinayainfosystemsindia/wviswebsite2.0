import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Chip } from '../../components'
import { storyHero } from '../../data'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `radial-gradient(90% 100% at 100% 0%, ${alpha(theme.palette.accent.light, 0.14)} 0%, transparent 55%), radial-gradient(90% 100% at 0% 100%, ${alpha(theme.palette.primary.light, 0.12)} 0%, transparent 55%)`,
}))

const Milestone = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: 999,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 4px 14px -4px ${alpha(theme.palette.common.black, 0.06)}`,
}))

/** Page hero: founding story plus a compact 2013 → 2016 → Today milestone strip. */
export const StoryHeroSection = () => (
  <Root aria-labelledby="story-hero-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 780 }}>
        <Chip
          label={storyHero.eyebrow}
          tone="accent"
          variant="outlined"
          size="small"
          sx={{
            alignSelf: 'flex-start',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.75rem',
            fontWeight: 700,
          }}
        />
        <Typography id="story-hero-heading" variant="display" component="h1">
          {storyHero.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
          {storyHero.body}
        </Typography>

        <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', gap: 1.5, pt: 1 }}>
          {storyHero.milestones.map((milestone) => (
            <Milestone key={milestone.year}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'accent.main' }}>
                {milestone.year}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {milestone.label}
              </Typography>
            </Milestone>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Root>
)
