import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { CapacityBuildingPage } from '../pages/CapacityBuildingPage'

export const capacityBuildingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/capacity-building-adoption',
  component: CapacityBuildingPage,
})
