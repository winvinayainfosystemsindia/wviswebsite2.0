import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { AdminLoginPage, AdminDashboardPage } from '../pages/admin'
import { AdminAuthGuard } from '../components/admin'

export const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/login',
  component: AdminLoginPage,
})

export const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/dashboard',
  component: () => (
    <AdminAuthGuard>
      <AdminDashboardPage />
    </AdminAuthGuard>
  ),
})

export const adminRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => (
    <AdminAuthGuard>
      <AdminDashboardPage />
    </AdminAuthGuard>
  ),
})
