import { useState, useEffect } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import KeyIcon from '@mui/icons-material/Key'
import LoginIcon from '@mui/icons-material/Login'
import { Button } from '../../components'
import authService from '../../services/authService'
import { useAppDispatch, setCredentials } from '../../stores'

const AuthBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, 0.08)} 1px, transparent 1px), radial-gradient(${alpha(theme.palette.accent.main, 0.06)} 1px, transparent 1px)`,
  backgroundSize: '32px 32px',
  backgroundPosition: '0 0, 16px 16px',
}))

const AuthCard = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 460,
  padding: theme.spacing(5, 4.5),
  borderRadius: Number(theme.shape.borderRadius) * 2.5,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 24px 64px -12px ${alpha(theme.palette.primary.main, 0.16)}, 0 4px 16px ${alpha(theme.palette.common.black, 0.04)}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3.5, 3),
  },
}))

export const AdminLoginPage = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Admin Portal Login | WinVinaya Infosystems'
    // If already authenticated, redirect to dashboard
    if (authService.isAuthenticated()) {
      window.location.href = '/admin/dashboard'
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return

    setLoading(true)
    setError(null)

    try {
      const res = await authService.login({ email, password })
      if (res.success && res.token && res.user) {
        dispatch(setCredentials({ user: res.user, token: res.token }))
        window.location.href = '/admin/dashboard'
      } else {
        setError(res.message || 'Invalid email or password.')
      }
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
            ? err
            : 'Invalid email or password. Please check your credentials.'
      setError(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  const handleFillDemoAdmin = () => {
    setEmail('info@winvinaya.com')
    setPassword('WinVinaya@2026!')
    setError(null)
  }

  return (
    <AuthBackground>
      <Container maxWidth="xs" sx={{ p: 0 }}>
        <AuthCard>
          {/* Header Brand */}
          <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center', mb: 3.5 }}>
            <Box
              sx={(theme) => ({
                width: 52,
                height: 52,
                borderRadius: Number(theme.shape.borderRadius) * 1.5,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
              })}
            >
              <LockOutlinedIcon sx={{ fontSize: 28 }} />
            </Box>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary', letterSpacing: '-0.01em' }}>
                Admin Control Center
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Sign in with your enterprise credentials to manage content and inquiries.
              </Typography>
            </Box>
          </Stack>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5}>
              <TextField
                id="admin-email"
                label="Admin Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@winvinaya.com"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                id="admin-password"
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Button
                tone="primary"
                variant="contained"
                size="large"
                type="submit"
                loading={loading}
                disabled={!email || !password}
                endIcon={<LoginIcon />}
                fullWidth
                sx={{
                  py: 1.4,
                  fontWeight: 800,
                  fontSize: '0.975rem',
                  boxShadow: (theme) => `0 4px 16px ${alpha(theme.palette.primary.main, 0.35)}`,
                }}
              >
                Sign In to Dashboard
              </Button>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              QUICK ACCESS
            </Typography>
          </Divider>

          {/* Quick Demo Credential Filler */}
          <Button
            tone="secondary"
            variant="outlined"
            size="small"
            onClick={handleFillDemoAdmin}
            startIcon={<KeyIcon />}
            fullWidth
            sx={{
              py: 0.9,
              fontWeight: 700,
              fontSize: '0.8125rem',
            }}
          >
            Autofill SuperAdmin Credentials
          </Button>

          {/* Return to Public Site */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Box
              component="a"
              href="/"
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                color: theme.palette.text.secondary,
                fontSize: '0.8125rem',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { color: theme.palette.primary.main, textDecoration: 'underline' },
              })}
            >
              <ArrowBackIcon sx={{ fontSize: 15 }} />
              Return to Public Website
            </Box>
          </Box>
        </AuthCard>
      </Container>
    </AuthBackground>
  )
}

export default AdminLoginPage
