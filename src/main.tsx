import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilizações
import './global.css'

// Roteamento
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

