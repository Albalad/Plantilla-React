import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'

import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
