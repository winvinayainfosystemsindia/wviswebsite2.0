import { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import MenuIcon from '@mui/icons-material/Menu'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LogoutIcon from '@mui/icons-material/Logout'
import ShieldIcon from '@mui/icons-material/Shield'
import { useAppSelector, useAppDispatch, logoutUser } from '../../stores'
import { Button } from '../../components'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 2px 10px ${alpha(theme.palette.text.primary, 0.03)}`,
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
}))

interface AdminAppBarProps {
  onDrawerToggle: () => void
  title?: string
}

export const AdminAppBar = ({ onDrawerToggle, title = 'Dashboard Overview' }: AdminAppBarProps) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleCloseMenu()
    dispatch(logoutUser())
    window.location.href = '/admin/login'
  }

  const userInitials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : 'AD'

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar sx={{ minHeight: { xs: 64, md: 70 }, px: { xs: 2, md: 3.5 } }}>
        {/* Mobile Hamburger Drawer Toggle */}
        <IconButton
          color="inherit"
          aria-label="open sidebar drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Section Heading & Breadcrumb */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              color: 'text.primary',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </Typography>

          <Chip
            icon={<ShieldIcon sx={{ fontSize: '13px !important' }} />}
            label="Admin Portal"
            size="small"
            sx={(theme) => ({
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: '0.725rem',
              display: { xs: 'none', sm: 'inline-flex' },
            })}
          />
        </Box>

        {/* Actions on Right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          {/* View Live Website Button */}
          <Button
            tone="primary"
            variant="outlined"
            size="small"
            component="a"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              px: 2,
              py: 0.6,
              fontWeight: 700,
              fontSize: '0.8125rem',
            }}
          >
            View Live Site
          </Button>

          {/* User Profile Avatar & Dropdown */}
          <Tooltip title="Account Settings & Logout">
            <IconButton
              onClick={handleOpenMenu}
              size="small"
              sx={{
                p: 0.5,
                border: (theme) => `2px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                '&:hover': {
                  border: (theme) => `2px solid ${theme.palette.primary.main}`,
                },
              }}
              aria-controls={openMenu ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
            >
              <Avatar
                sx={(theme) => ({
                  width: 36,
                  height: 36,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 800,
                  fontSize: '0.875rem',
                })}
              >
                {userInitials}
              </Avatar>
            </IconButton>
          </Tooltip>

          {/* Account Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            slotProps={{
              paper: {
                elevation: 4,
                sx: (theme) => ({
                  width: 250,
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.12))',
                  mt: 1.5,
                  borderRadius: Number(theme.shape.borderRadius) * 1.5,
                  border: `1px solid ${theme.palette.divider}`,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                }),
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {/* User Info Header */}
            <Box sx={{ px: 2.5, py: 1.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                {user?.name || 'Administrator'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.75 }}>
                {user?.email || 'admin@winvinaya.com'}
              </Typography>
              <Chip
                label={user?.role || 'SUPERADMIN'}
                size="small"
                color="primary"
                sx={{ fontWeight: 800, fontSize: '0.675rem', height: 20 }}
              />
            </Box>

            <Divider />

            <MenuItem component="a" href="/" target="_blank" rel="noopener noreferrer">
              <OpenInNewIcon sx={{ mr: 1.5, fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                View Public Site
              </Typography>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
              <LogoutIcon sx={{ mr: 1.5, fontSize: 18 }} />
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Log Out
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}
