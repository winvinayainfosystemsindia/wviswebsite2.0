import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded'
import { Button, Chip } from '../../components'
import { heroContent } from '../../data'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `radial-gradient(120% 100% at 100% 0%, ${alpha(theme.palette.primary.light, 0.12)} 0%, transparent 55%), radial-gradient(120% 100% at 0% 100%, ${alpha(theme.palette.accent.light, 0.1)} 0%, transparent 55%)`,
}))

const Visual = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '4 / 3',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.22)}, ${alpha(theme.palette.accent.light, 0.22)})`,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 30px 60px -30px ${alpha(theme.palette.common.black, 0.25)}`,
  '& svg': {
    fontSize: 'min(28vw, 200px)',
    color: alpha(theme.palette.primary.dark, 0.35),
  },
}))

/**
 * Hero: eyebrow + headline + subheadline + two CTAs, split against a
 * visual panel. The visual is an intentional placeholder — swap `Visual`
 * for a real photo of the team at work as soon as one is available;
 * authenticity there is the differentiator the copy promises, so a stock
 * photo would be worse than this abstract placeholder.
 */
export const HeroSection = () => (
  <Root aria-labelledby="hero-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
      <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3} sx={{ maxWidth: 640 }}>
            <Chip
              label={heroContent.eyebrow}
              tone="accent"
              variant="outlined"
              size="small"
              sx={{ alignSelf: 'flex-start', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}
            />
            <Typography id="hero-heading" variant="display" component="h1">
              {heroContent.headline}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
              {heroContent.subheadline}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button tone="primary" variant="contained" href={heroContent.primaryCta.href} size="large">
                {heroContent.primaryCta.label}
              </Button>
              <Button tone="primary" variant="outlined" href={heroContent.secondaryCta.href} size="large">
                {heroContent.secondaryCta.label}
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Visual aria-hidden="true">
            <Diversity3RoundedIcon />
          </Visual>
        </Grid>
      </Grid>
    </Container>
  </Root>
)
