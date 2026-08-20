import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppThemeProvider } from './themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <div>Hello</div>
    </AppThemeProvider>
  </StrictMode>,
)
