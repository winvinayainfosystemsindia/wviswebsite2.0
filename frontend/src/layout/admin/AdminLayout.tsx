import { useState, type ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { AdminAppBar } from './AdminAppBar'
import { AdminSidebar, DRAWER_WIDTH } from './AdminSidebar'

const RootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: alpha(theme.palette.accent.light, 0.03),
}))

const MainContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${DRAWER_WIDTH}px)`,
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const PageContainer = styled('main')(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3.5, 4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5, 2),
  },
}))

export interface AdminLayoutProps {
  children: ReactNode
  title?: string
}

export const AdminLayout = ({ children, title = 'Dashboard Overview' }: AdminLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <RootBox>
      <CssBaseline />
      {/* Left Sidebar Drawer */}
      <AdminSidebar
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
        currentPath={typeof window !== 'undefined' ? window.location.pathname : '/admin/dashboard'}
      />

      {/* Right Main Area */}
      <MainContentWrapper>
        <AdminAppBar onDrawerToggle={handleDrawerToggle} title={title} />
        <PageContainer id="admin-main-content">
          {children}
        </PageContainer>
      </MainContentWrapper>
    </RootBox>
  )
}

export default AdminLayout
