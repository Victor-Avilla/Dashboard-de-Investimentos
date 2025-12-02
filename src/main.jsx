import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Router />
    </StrictMode>
  </BrowserRouter>

)
