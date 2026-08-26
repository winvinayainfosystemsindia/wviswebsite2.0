import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { CareersPage } from '../pages/CareersPage'

export const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: CareersPage,
})
