import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { EbooksGuidesPage } from '../pages/EbooksGuidesPage'

export const ebooksGuidesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/ebooks-guides',
  component: EbooksGuidesPage,
})

export const ebookAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/ebook',
  component: EbooksGuidesPage,
})

export const ebooksAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/ebooks',
  component: EbooksGuidesPage,
})

export const guidesAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/guides',
  component: EbooksGuidesPage,
})
