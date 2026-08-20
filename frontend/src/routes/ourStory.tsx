import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { OurStoryPage } from '../pages/OurStoryPage'

export const ourStoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/our-story',
  component: OurStoryPage,
})
