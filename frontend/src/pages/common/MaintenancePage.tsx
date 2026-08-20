import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { Button, Chip, IconBadge } from '../../components'

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(4),
  boxShadow: `0 8px 32px -8px ${alpha(theme.palette.common.black, 0.08)}`,
  maxWidth: 640,
  width: '100%',
}))

/**
 * Common Maintenance Page shown when system is undergoing scheduled updates.
 */
export const MaintenancePage = () => {
  const handleRefresh = () => {
    window.location.reload()
  }

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
          <IconBadge icon={<BuildOutlinedIcon />} tone="accent" size="lg" />

          <Chip
            label="System Under Maintenance"
            tone="accent"
            variant="outlined"
            size="small"
            sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}
          />

          <Stack spacing={1.5} sx={{ maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              We'll Be Back Soon
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
              WinVinaya Infosystems is currently undergoing scheduled system upgrades to bring you enhanced accessibility tools and performance.
            </Typography>
          </Stack>

          <Card>
            <Stack spacing={2.5}>
              <Box
                sx={(theme) => ({
                  p: 2,
                  borderRadius: Number(theme.shape.borderRadius),
                  bgcolor: alpha(theme.palette.accent.main, 0.06),
                  border: `1px solid ${alpha(theme.palette.accent.main, 0.15)}`,
                })}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'accent.main' }}>
                  Estimated Completion: Under 2 Hours
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  All services will resume automatically once updates are verified.
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                Need urgent assistance during maintenance?
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <EmailOutlinedIcon fontSize="small" sx={{ color: 'accent.main' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    info@winvinaya.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <PhoneOutlinedIcon fontSize="small" sx={{ color: 'accent.main' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    +91 99805 25374
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Card>

          <Stack direction="row" spacing={2}>
            <Button tone="accent" variant="contained" onClick={handleRefresh} startIcon={<RefreshOutlinedIcon />}>
              Refresh Page
            </Button>
            <Button tone="primary" variant="outlined" href="/">
              Return Home
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
