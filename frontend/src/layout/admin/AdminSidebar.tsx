import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useAppDispatch, logoutUser, useAppSelector } from '../../stores'

export const DRAWER_WIDTH = 270

const BrandContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const NavItemLink = styled('a', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 1.2,
  margin: theme.spacing(0.35, 1.5),
  padding: theme.spacing(1.2, 1.75),
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.09) : 'transparent',
  fontWeight: active ? 800 : 600,
  fontSize: '0.8875rem',
  textDecoration: 'none',
  transition: theme.transitions.create(['background-color', 'color', 'transform']),
  '&:hover': {
    backgroundColor: active ? alpha(theme.palette.primary.main, 0.14) : alpha(theme.palette.text.primary, 0.04),
    color: theme.palette.text.primary,
    transform: 'translateX(3px)',
  },
  '& .nav-icon': {
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    marginRight: theme.spacing(1.75),
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: 20,
    },
  },
}))

interface NavItem {
  id: string
  label: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin/dashboard', icon: <DashboardOutlinedIcon /> },
  { id: 'blogs', label: 'Blogs & Articles', href: '/admin/blogs', icon: <ArticleOutlinedIcon /> },
  { id: 'newsletters', label: 'Newsletters', href: '/admin/newsletters', icon: <MailOutlineOutlinedIcon /> },
  { id: 'ebooks', label: 'eBooks & Guides', href: '/admin/ebooks', icon: <MenuBookOutlinedIcon /> },
  { id: 'careers', label: 'Careers & Roles', href: '/admin/careers', icon: <WorkOutlineOutlinedIcon /> },
  { id: 'inquiries', label: 'Contact Inquiries', href: '/admin/inquiries', icon: <ContactMailOutlinedIcon /> },
  { id: 'testimonials', label: 'Testimonials', href: '/admin/testimonials', icon: <StarOutlineOutlinedIcon /> },
  { id: 'stories', label: 'Success Stories', href: '/admin/stories', icon: <EmojiEventsOutlinedIcon /> },
  { id: 'categories', label: 'Categories', href: '/admin/categories', icon: <CategoryOutlinedIcon /> },
]

interface AdminSidebarProps {
  mobileOpen: boolean
  onDrawerToggle: () => void
  currentPath?: string
}

export const AdminSidebar = ({ mobileOpen, onDrawerToggle, currentPath = '/admin/dashboard' }: AdminSidebarProps) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const handleLogout = () => {
    dispatch(logoutUser())
    window.location.href = '/admin/login'
  }

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Brand Header */}
      <BrandContainer>
        <Box
          component="a"
          href="/admin/dashboard"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Box
            sx={(theme) => ({
              width: 38,
              height: 38,
              borderRadius: Number(theme.shape.borderRadius) * 1.2,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.2rem',
              boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.35)}`,
            })}
          >
            W
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, lineHeight: 1.2, color: 'text.primary' }}>
              WinVinaya
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.725rem' }}>
              Admin Control Center
            </Typography>
          </Box>
        </Box>
      </BrandContainer>

      {/* Main Navigation List */}
      <Box sx={{ flex: 1, py: 2, overflowY: 'auto' }}>
        <Typography
          variant="caption"
          sx={{
            px: 3,
            py: 0.5,
            display: 'block',
            fontWeight: 800,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.675rem',
          }}
        >
          Management Portal
        </Typography>

        <List component="nav" sx={{ px: 0.5 }}>
          {navItems.map((item) => {
            const isActive = currentPath === item.href || (item.id === 'dashboard' && currentPath === '/admin')
            return (
              <ListItem key={item.id} disablePadding>
                <NavItemLink
                  href={item.href}
                  active={isActive}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavItemLink>
              </ListItem>
            )
          })}
        </List>
      </Box>

      <Divider />

      {/* Footer Profile & Logout */}
      <Box sx={{ p: 2, bgcolor: (theme) => alpha(theme.palette.background.default, 0.7) }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ overflow: 'hidden' }}>
            <Typography
              variant="caption"
              sx={{ fontWeight: 800, color: 'text.primary', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
              {user?.name || 'Administrator'}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', display: 'block', fontSize: '0.7rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
              {user?.email || 'admin@winvinaya.com'}
            </Typography>
          </Box>

          <IconButton
            onClick={handleLogout}
            size="small"
            sx={{
              p: 1,
              borderRadius: 1.5,
              color: 'error.main',
              '&:hover': { bgcolor: (theme) => alpha(theme.palette.error.main, 0.08) },
            }}
            title="Log Out"
          >
            <LogoutOutlinedIcon sx={{ fontSize: 19 }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )

  return (
    <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }} aria-label="admin navigation">
      {/* Mobile Temporary Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            bgcolor: 'background.paper',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  )
}

export default AdminSidebar
