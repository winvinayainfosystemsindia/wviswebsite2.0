import { alpha, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import { Button, IconBadge } from '../../components'
import { donate } from '../../data'

const Root = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.accent.light, 0.08),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const Panel = styled(Stack)(({ theme }) => ({
  maxWidth: 720,
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(5, 4),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
  boxShadow: `0 24px 48px -20px ${alpha(theme.palette.accent.main, 0.25)}`,
}))

/** Dedicated, high-emphasis donation call-out — deliberately its own section rather than folded into the closing CTA band. */
export const DonateSection = () => (
  <Root aria-labelledby="donate-heading">
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Panel spacing={2.5}>
        <IconBadge icon={<FavoriteOutlinedIcon />} tone="accent" size="lg" />
        <Typography variant="eyebrow" color="accent.main">
          {donate.eyebrow}
        </Typography>
        <Typography id="donate-heading" variant="h2">
          {donate.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
          {donate.body}
        </Typography>
        <Button
          tone="accent"
          variant="contained"
          size="large"
          href={donate.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewOutlinedIcon />}
          aria-label={`${donate.cta.label} (opens in a new tab)`}
          sx={{ mt: 1 }}
        >
          {donate.cta.label}
        </Button>
      </Panel>
    </Container>
  </Root>
)
