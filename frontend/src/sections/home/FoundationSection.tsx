import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, IconBadge } from '../../components'
import { foundationTeaser } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.08),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

/** "WinVinaya Foundation" teaser — the social-impact tie-in, given a warm accent-tinted band. */
export const FoundationSection = () => (
  <Root aria-labelledby="foundation-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3} sx={{ maxWidth: 680, mx: 'auto', alignItems: 'center', textAlign: 'center' }}>
        <IconBadge icon={<Diversity2OutlinedIcon />} tone="accent" size="lg" />
        <Typography variant="overline" color="accent.main" sx={{ fontWeight: 700 }}>
          {foundationTeaser.eyebrow}
        </Typography>
        <Typography id="foundation-heading" variant="h2">
          {foundationTeaser.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {foundationTeaser.body}
        </Typography>
        <Button tone="accent" variant="contained" href={foundationTeaser.cta.href} endIcon={<ArrowForwardIcon />}>
          {foundationTeaser.cta.label}
        </Button>
      </Stack>
    </Container>
  </Root>
)
