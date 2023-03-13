// Components
import { Header } from '../components/Header/Header'
import { Separator } from '../components/Separator/Separator'
import { Tweet } from '../components/Tweet/Tweet'

import TextareaAutosize from 'react-textarea-autosize';

// CSS
import './Status.css'

// React
import { FormEvent, KeyboardEvent, useState } from 'react';

export function Status() {

  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabéns pelo progresso.'
  ])

  const [newAnswer, setNewAnswer] = useState('')

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    // Respeitando os princípios da imutabilidade
    setAnswers([newAnswer, ...answers])

    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    // Metakey é para usuários de mac
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey )){
      
      // Submit
      setAnswers([newAnswer, ...answers])

      setNewAnswer('')
    }
  }


  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aliquam, necessitatibus distinctio unde pariatur modi eaque deleniti eos enim aliquid. Consequuntur alias nisi, optio hic reprehenderit fugit quos fugiat quidem.'
      />

      <Separator />

      <form className='answer-tweet-form' onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/RenanFachin.png"
            alt="Imagem do usuário"
          />

          <TextareaAutosize
            id="tweet"
            placeholder="Tweet your answer"
            onKeyDown={handleHotKeySubmit}
            value={newAnswer}
            onChange={(event) => {setNewAnswer(event.target.value)}}
          />
        </label>

        <button type="submit">
          Answer
        </button>
      </form>



      {answers.map(answer => {
        return (
          <Tweet
            key={answer}
            content={answer}
          />
        )
      })}

    </main>
  )
}