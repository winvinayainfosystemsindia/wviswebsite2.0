import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { NewslettersPage } from '../pages/NewslettersPage'

export const newslettersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/newsletters',
  component: NewslettersPage,
})

export const newsletterAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources/newsletter',
  component: NewslettersPage,
})
