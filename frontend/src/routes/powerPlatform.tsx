import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { PowerPlatformPage } from '../pages/PowerPlatformPage'

export const powerPlatformRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/microsoft-power-platform-solutions',
  component: PowerPlatformPage,
})
