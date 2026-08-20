import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { WinVinayaFoundationPage } from '../pages/WinVinayaFoundationPage'

export const winVinayaFoundationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/winvinaya-foundation',
  component: WinVinayaFoundationPage,
})
