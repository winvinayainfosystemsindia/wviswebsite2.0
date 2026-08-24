import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { AgenticAiCustomAppsPage } from '../pages/AgenticAiCustomAppsPage'

export const agenticAiCustomAppsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/agentic-ai-custom-application-development',
  component: AgenticAiCustomAppsPage,
})
