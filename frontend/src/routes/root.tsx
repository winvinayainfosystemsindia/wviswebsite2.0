import { createRootRoute, Outlet } from '@tanstack/react-router'
import { MainLayout } from '../layout'
import { NotFoundPage, ServerErrorPage } from '../pages/common'

export const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  notFoundComponent: NotFoundPage,
  errorComponent: ServerErrorPage,
})
