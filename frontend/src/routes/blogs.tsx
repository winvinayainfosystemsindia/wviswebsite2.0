import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { BlogsPage } from '../pages/BlogsPage'
import { BlogDetailsPage } from '../pages/BlogDetailsPage'

export const blogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/blogs',
  component: BlogsPage,
})

export const blogAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/blog',
  component: BlogsPage,
})

export const blogDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/blogs/$slug',
  component: BlogDetailsPage,
})

export const blogDetailsAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/blog/$slug',
  component: BlogDetailsPage,
})

