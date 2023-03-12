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
  BookmarkSimple} from 'phosphor-react'

// Assets
import TwitterLogo from './assets/logo.twitter.svg'

// Estilizações
import './global.css'



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
        content
      </div>
    </div>
  </React.StrictMode>,
)
