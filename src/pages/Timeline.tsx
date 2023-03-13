// React Imports
import { FormEvent, useEffect, useState } from "react";

// Componentes
import { Header } from "../components/Header/Header"
import { Separator } from "../components/Separator/Separator"
import { Tweet } from "../components/Tweet/Tweet"

import TextareaAutosize from 'react-textarea-autosize';

// CSS
import './Timeline.css'

export function Timeline() {
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Meu segundo tweet',
    'Meu terceiro tweet'
  ])

  const [newTweet, setNewTweet] = useState('')

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    // Respeitando os princípios da imutabilidade
    setTweets([newTweet, ...tweets])
  }



  return (
    <main className='timeline'>
      <Header title='Home' />

      <form className='new-tweet-form' onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/RenanFachin.png"
            alt="Imagem do usuário"
          />

          <TextareaAutosize
            id="tweet"
            placeholder="What's happening?"
            onChange={e => setNewTweet(e.target.value)}
          />
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