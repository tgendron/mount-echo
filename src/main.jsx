import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { LocaleProvider } from './contexts/LocaleContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
