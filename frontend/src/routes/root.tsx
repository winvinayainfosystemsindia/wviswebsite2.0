import { createRootRoute, Outlet } from '@tanstack/react-router'
import { MainLayout } from '../layout'

export const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
})
