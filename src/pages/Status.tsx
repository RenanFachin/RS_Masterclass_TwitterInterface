// Components
import { Header } from '../components/Header/Header'
import { Separator } from '../components/Separator/Separator'
import { Tweet } from '../components/Tweet/Tweet'

import TextareaAutosize from 'react-textarea-autosize';

// CSS
import './Status.css'

// Utils
const answers = [
  'Concordo...',
  'Olha, faz sentido',
  'Parabéns pelo progresso.'
]

export function Status() {
  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aliquam, necessitatibus distinctio unde pariatur modi eaque deleniti eos enim aliquid. Consequuntur alias nisi, optio hic reprehenderit fugit quos fugiat quidem.'
      />

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img
            src="https://github.com/RenanFachin.png"
            alt="Imagem do usuário"
          />

          <TextareaAutosize
            id="tweet"
            placeholder="Tweet your answer"
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