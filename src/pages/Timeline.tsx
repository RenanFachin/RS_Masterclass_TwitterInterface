// Componentes
import { Header } from "../components/Header/Header"
import { Separator } from "../components/Separator/Separator"
import { Tweet } from "../components/Tweet/Tweet"

// CSS
import './Timeline.css'

// Utils
const tweets = [
  'Meu primeiro tweet',
  'Meu segundo tweet',
  'Meu terceiro tweet'
]

export function Timeline() {
  return (
    <main className='timeline'>
      <Header title='Home' />

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

      {tweets.map(tweet => {
        return (
          <Tweet
            key={tweet}
            content={tweet}
          />
        )
      })}

    </main>
  )
}