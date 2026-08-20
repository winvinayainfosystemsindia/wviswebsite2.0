import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Chip } from '../../components'
import { awardsHero } from '../../data'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `radial-gradient(90% 100% at 100% 0%, ${alpha(theme.palette.accent.light, 0.14)} 0%, transparent 55%), radial-gradient(90% 100% at 0% 100%, ${alpha(theme.palette.primary.light, 0.12)} 0%, transparent 55%)`,
}))

/** Page hero: framing recognition as something earned through practice, not trophies. */
export const AwardsHeroSection = () => (
  <Root aria-labelledby="awards-hero-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 780 }}>
        <Chip
          label={awardsHero.eyebrow}
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
        <Typography id="awards-hero-heading" variant="display" component="h1">
          {awardsHero.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
          {awardsHero.body}
        </Typography>
      </Stack>
    </Container>
  </Root>
)
