import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilizações
import './global.css'

// Componentes
import { Tweet } from './components/Tweet/Tweet'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Header } from './components/Header/Header'
import { Separator } from './components/Separator/Separator'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <div className='content'>
        <main className='timeline'>
          <Header title='Home'/>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img
                src="https://github.com/RenanFachin.png"
                alt="Imagem do usuário"
              />

              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">
              Tweet
            </button>
          </form>

          <Separator />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />

        </main>
      </div>
    </div>
  </React.StrictMode>,
)
