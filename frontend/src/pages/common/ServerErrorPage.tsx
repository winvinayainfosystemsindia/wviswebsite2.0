import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined'
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Button, Chip, IconBadge } from '../../components'

const ErrorCodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.error.main, 0.06),
  border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  padding: theme.spacing(2.5),
  fontFamily: 'monospace',
  maxWidth: 540,
  width: '100%',
}))

export interface ServerErrorPageProps {
  error?: Error | string
  reset?: () => void
}

/**
 * Common Server Error Page (500) shown when backend server is down or unresponsive.
 */
export const ServerErrorPage = ({ error, reset }: ServerErrorPageProps) => {
  const handleRetry = () => {
    if (reset) {
      reset()
    } else {
      window.location.reload()
    }
  }

  const errorMessage = typeof error === 'string' ? error : error?.message || 'ERR_SERVER_CONNECTION_FAILED'

  return (
    <Box
      component="main"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
          <IconBadge icon={<CloudOffOutlinedIcon />} tone="accent" size="lg" />

          <Chip
            label="500 - Server Unavailable"
            tone="neutral"
            variant="outlined"
            size="small"
            sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, borderColor: 'error.main', color: 'error.main' }}
          />

          <Stack spacing={1.5} sx={{ maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Server Down or Unreachable
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
              We are unable to connect to the WinVinaya server right now. This may be due to temporary network disruptions or backend service maintenance.
            </Typography>
          </Stack>

          <ErrorCodeBox>
            <Typography variant="caption" sx={{ color: 'error.main', fontWeight: 700, display: 'block', mb: 0.5 }}>
              DIAGNOSTIC STATUS
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary', wordBreak: 'break-word' }}>
              {errorMessage}
            </Typography>
          </ErrorCodeBox>

          <Stack direction="row" spacing={2}>
            <Button tone="accent" variant="contained" onClick={handleRetry} startIcon={<ReplayOutlinedIcon />}>
              Try Reconnecting
            </Button>
            <Button tone="primary" variant="outlined" href="/" startIcon={<HomeOutlinedIcon />}>
              Return to Homepage
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
