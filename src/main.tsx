import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import { MobileMenuProvider } from './Context/ContextMobileMenu'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <MobileMenuProvider>
        <Home />
      </MobileMenuProvider>
    </div>
  </StrictMode>
)
