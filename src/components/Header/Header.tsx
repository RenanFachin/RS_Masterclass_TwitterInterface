// ícones
import { Sparkle } from 'phosphor-react'

//CSS
import './Header.css'

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className='timeline-header'>
      {title}
      <Sparkle />
    </div>
  )
}