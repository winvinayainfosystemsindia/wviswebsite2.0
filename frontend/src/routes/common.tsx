import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { MaintenancePage, ServerErrorPage } from '../pages/common'

export const maintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/maintenance',
  component: MaintenancePage,
})

export const serverErrorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/server-error',
  component: ServerErrorPage,
})
