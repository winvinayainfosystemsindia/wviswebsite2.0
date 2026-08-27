import type { ReactNode } from 'react'
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export interface MainLayoutProps {
  children: ReactNode
}

const SkipLink = styled('a')(({ theme }) => ({
  position: 'absolute',
  left: 16,
  top: -80,
  zIndex: theme.zIndex.tooltip,
  padding: theme.spacing(1.25, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.accent.main,
  color: theme.palette.accent.contrastText,
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'top 150ms ease',
  '&:focus-visible': {
    top: 16,
    outline: `3px solid ${alpha(theme.palette.accent.main, 0.6)}`,
    outlineOffset: 2,
  },
}))

/**
 * Page shell: skip link, sticky navbar, main content landmark, footer.
 * Wrap route content with this so every page gets consistent nav/footer.
 * If viewing /admin routes, bypass the public navbar/footer.
 */
export const MainLayout = ({ children }: MainLayoutProps) => {
  const isAdminRoute =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')

  if (isAdminRoute) {
    return <>{children}</>
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <Navbar />
      <Box component="main" id="main-content" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
