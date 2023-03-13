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
  Pencil,
} from 'phosphor-react'

// Roteamento
import { NavLink } from 'react-router-dom'

// Assets
import TwitterLogo from '../../assets/logo.twitter.svg'

// CSS
import './Sidebar.css'

export function Sidebar(){
  return(
    <aside className='sidebar'>
        <img src={TwitterLogo} alt="logo" className='logo' />

        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill' />
            <span>Home</span>
          </NavLink>

          <a href="">
            <Hash />
            <span>Explore</span>
          </a>

          <a href="">
            <Bell />
            <span>Notifications</span>
          </a>

          <a href="">
            <Envelope />
            <span>Mesages</span>
          </a>

          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>

          <a href="">
            <FileText />
            <span>Lists</span>
          </a>

          <a href="">
            <User />
            <span>Profile</span>
          </a>

          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
  )
}