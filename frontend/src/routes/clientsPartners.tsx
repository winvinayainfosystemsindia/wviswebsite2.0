import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { ClientsPartnersPage } from '../pages/ClientsPartnersPage'

export const clientsPartnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact/clients-partners',
  component: ClientsPartnersPage,
})
