import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import {
  AdminLoginPage,
  AdminDashboardPage,
  AdminBlogsPage,
  AdminNewslettersPage,
  AdminEbooksPage,
  AdminCareersPage,
  AdminInquiriesPage,
  AdminTestimonialsPage,
  AdminStoriesPage,
  AdminCategoriesPage,
} from '../pages/admin'
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

export const adminBlogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/blogs',
  component: () => (
    <AdminAuthGuard>
      <AdminBlogsPage />
    </AdminAuthGuard>
  ),
})

export const adminNewslettersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/newsletters',
  component: () => (
    <AdminAuthGuard>
      <AdminNewslettersPage />
    </AdminAuthGuard>
  ),
})

export const adminEbooksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/ebooks',
  component: () => (
    <AdminAuthGuard>
      <AdminEbooksPage />
    </AdminAuthGuard>
  ),
})

export const adminCareersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/careers',
  component: () => (
    <AdminAuthGuard>
      <AdminCareersPage />
    </AdminAuthGuard>
  ),
})

export const adminInquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/inquiries',
  component: () => (
    <AdminAuthGuard>
      <AdminInquiriesPage />
    </AdminAuthGuard>
  ),
})

export const adminTestimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/testimonials',
  component: () => (
    <AdminAuthGuard>
      <AdminTestimonialsPage />
    </AdminAuthGuard>
  ),
})

export const adminStoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/stories',
  component: () => (
    <AdminAuthGuard>
      <AdminStoriesPage />
    </AdminAuthGuard>
  ),
})

export const adminCategoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/categories',
  component: () => (
    <AdminAuthGuard>
      <AdminCategoriesPage />
    </AdminAuthGuard>
  ),
})
