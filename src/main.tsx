import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilizações
import './global.css'

// Componentes
import { Sidebar } from './components/Sidebar/Sidebar'

// Roteamento
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <div className='content'>
      <RouterProvider router={router} />
        
      </div>
    </div>
  </React.StrictMode>,
)

