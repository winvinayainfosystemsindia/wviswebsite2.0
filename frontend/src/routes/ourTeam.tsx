import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { OurTeamPage } from '../pages/OurTeamPage'

export const ourTeamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/our-team',
  component: OurTeamPage,
})
