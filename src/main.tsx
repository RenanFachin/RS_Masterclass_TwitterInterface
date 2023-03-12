import React from 'react'
import ReactDOM from 'react-dom/client'

// ícones
import {
  Bell,
  Hash,
  House,
  Envelope,
  User,
  DotsThreeCircle,
  FileText,
  BookmarkSimple, Sparkle
} from 'phosphor-react'

// Assets
import TwitterLogo from './assets/logo.twitter.svg'

// Estilizações
import './global.css'
import { Tweet } from './components/Tweet'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img src={TwitterLogo} alt="logo" className='logo' />

        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill' />
            Home
          </a>

          <a href="">
            <Hash />
            Explore
          </a>

          <a href="">
            <Bell />
            Notifications
          </a>

          <a href="">
            <Envelope />
            Mesages
          </a>

          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>

          <a href="">
            <FileText />
            Lists
          </a>

          <a href="">
            <User />
            Profile
          </a>

          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          Tweet
        </button>
      </aside>

      <div className='content'>
        <main className='timeline'>
          <div className='timeline-header'>
            Home
            <Sparkle />
          </div>

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

          <div className='separator' />


          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />

        </main>
      </div>
    </div>
  </React.StrictMode>,
)
