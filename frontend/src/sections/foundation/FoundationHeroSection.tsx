import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Button, Chip } from '../../components'
import { foundationHero } from '../../data'

const Root = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `radial-gradient(90% 100% at 100% 0%, ${alpha(theme.palette.accent.light, 0.14)} 0%, transparent 55%), radial-gradient(90% 100% at 0% 100%, ${alpha(theme.palette.primary.light, 0.12)} 0%, transparent 55%)`,
}))

/** Page hero: mission statement, the NASSCOM context stat, and the two headline actions (visit the Foundation, donate). */
export const FoundationHeroSection = () => (
  <Root aria-labelledby="foundation-hero-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 820 }}>
        <Chip
          label={foundationHero.eyebrow}
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
        <Typography id="foundation-hero-heading" variant="display" component="h1">
          {foundationHero.heading}
        </Typography>
        <Stack spacing={2}>
          {foundationHero.paragraphs.map((paragraph, idx) => (
            <Typography key={idx} variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {paragraph}
            </Typography>
          ))}
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
          <Button
            tone="primary"
            variant="contained"
            size="large"
            href={foundationHero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewOutlinedIcon />}
            aria-label={`${foundationHero.primaryCta.label} (opens in a new tab)`}
          >
            {foundationHero.primaryCta.label}
          </Button>
          <Button
            tone="accent"
            variant="contained"
            size="large"
            href={foundationHero.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<FavoriteOutlinedIcon />}
            aria-label={`${foundationHero.secondaryCta.label} (opens in a new tab)`}
          >
            {foundationHero.secondaryCta.label}
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Root>
)
