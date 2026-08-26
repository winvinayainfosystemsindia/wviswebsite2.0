import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { ContactUsPage } from '../pages/ContactUsPage'

export const contactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us',
  component: ContactUsPage,
})

export const contactAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactUsPage,
})
