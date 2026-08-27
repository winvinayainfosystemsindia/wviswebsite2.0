import { useEffect, useState, type ReactNode } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import authService from '../../services/authService'
import { useAppDispatch, useAppSelector, setCredentials } from '../../stores'

interface AdminAuthGuardProps {
  children: ReactNode
}

export const AdminAuthGuard = ({ children }: AdminAuthGuardProps) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token)
  const user = useAppSelector((state) => state.auth.user)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = authService.getToken()

      if (!storedToken) {
        window.location.href = '/admin/login'
        return
      }

      if (!user) {
        try {
          const res = await authService.getProfile()
          if (res.success && res.user) {
            dispatch(setCredentials({ user: res.user, token: storedToken }))
          }
        } catch (err) {
          console.warn('Could not refresh profile, redirecting to login:', err)
          authService.logout()
          window.location.href = '/admin/login'
          return
        }
      }

      setChecking(false)
    }

    checkAuth()
  }, [dispatch, token, user])

  if (checking) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <CircularProgress size={48} color="primary" />
        <Typography variant="body2" sx={{ mt: 2.5, color: 'text.secondary', fontWeight: 600 }}>
          Verifying administrator session...
        </Typography>
      </Box>
    )
  }

  return <>{children}</>
}

export default AdminAuthGuard
