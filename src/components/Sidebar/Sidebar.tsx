// ícones
import {
  Bell,
  Hash,
  House,
  Envelope,
  User,
  DotsThreeCircle,
  FileText,
  BookmarkSimple,
} from 'phosphor-react'

// Roteamento
import { Link } from 'react-router-dom'

// Assets
import TwitterLogo from '../../assets/logo.twitter.svg'

// CSS
import './Sidebar.css'

export function Sidebar(){
  return(
    <aside className='sidebar'>
        <img src={TwitterLogo} alt="logo" className='logo' />

        <nav className='main-navigation'>
          <Link className='active' to="/">
            <House weight='fill' />
            Home
          </Link>

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
  )
}