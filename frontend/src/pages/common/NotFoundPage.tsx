import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Button, Chip, IconBadge } from '../../components'

/**
 * Common 404 Not Found Page shown when an unknown route URL is accessed.
 */
export const NotFoundPage = () => {
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
          <IconBadge icon={<SearchOffOutlinedIcon />} tone="accent" size="lg" />

          <Chip
            label="404 - Page Not Found"
            tone="neutral"
            variant="outlined"
            size="small"
            sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}
          />

          <Stack spacing={1.5} sx={{ maxWidth: 600 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Page Doesn't Exist
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
              The page you are looking for might have been moved, renamed, or is temporarily unavailable. Please check the URL or return to our main pages.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button tone="accent" variant="contained" href="/" startIcon={<HomeOutlinedIcon />}>
              Go to Homepage
            </Button>
            <Button tone="primary" variant="outlined" href="/contact-us">
              Contact Support
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
