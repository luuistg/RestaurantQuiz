import menu from '../data/menu.json'
import { ChevronLeft, ChevronRight } from 'lucide-static'
import { type Restaurant } from '../models/types'

export const rounds = ['Snack1', 'Snack2', 'Entrante', 'Principal', 'Postre'] as const

export function renderQuiz(
  root: HTMLElement,
  questionIndex: number,
  selectedAnswer: Restaurant | undefined,
  onAnswer: (restaurant: Restaurant) => void,
  onBack: () => void,
  onNext: () => void,
  onEnd: () => void
) {
  root.innerHTML = `
    <section class="screen screen-quiz">
        <div class="quiz-header">
            <div class="progress-bar">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="quiz-navigation">
                <button class="btn btn-back" id="btn-back">${ChevronLeft}</button>
                <button class="btn btn-next" id="btn-next">${ChevronRight}</button>
                <button class="btn btn-end hidden" id="btn-end">Confirmar</button>
            </div>
        </div>
        <h2 class="quiz-title">Pregunta ${questionIndex + 1}</h2>
        <p class="description description-quiz">¿QUÉ PLATO PREFIERES?</p>
        <div class="quiz-options">
            <button
              class="answer ${selectedAnswer === 'Local de Ensayo' ? 'selected' : ''}"
              data-restaurant="Local de Ensayo"
            >
              ${menu.restaurantes['Local de Ensayo'][rounds[questionIndex]]}
            </button>

            <button
              class="answer ${selectedAnswer === 'Alborada' ? 'selected' : ''}"
              data-restaurant="Alborada"
            >
              ${menu.restaurantes['Alborada'][rounds[questionIndex]]}
            </button>

            <button
              class="answer ${selectedAnswer === 'Torombolo' ? 'selected' : ''}"
              data-restaurant="Torombolo"
            >
              ${menu.restaurantes['Torombolo'][rounds[questionIndex]]}
            </button>

            <button
              class="answer ${selectedAnswer === 'Bodguita' ? 'selected' : ''}"
              data-restaurant="Bodguita"
            >
              ${menu.restaurantes['Bodguita'][rounds[questionIndex]]}
            </button>
        </div>

    </section>
  `
    
  const progressBar = root.querySelector('.progress-bar')
  const squares = progressBar?.querySelectorAll('.square')
  squares?.forEach((square, index) => {
    if (index <= questionIndex) {
      square.classList.add('active')
    } else {
      square.classList.remove('active')
    }
  })

  const btnBack = root.querySelector<HTMLButtonElement>('#btn-back')!
  const btnNext = root.querySelector<HTMLButtonElement>('#btn-next')!
  const btnEnd = root.querySelector<HTMLButtonElement>('#btn-end')!

  btnBack.addEventListener('click', onBack)
  btnNext.addEventListener('click', onNext)
  btnEnd.addEventListener('click', onEnd)

  if (questionIndex === 0) {
    btnBack.classList.add('hidden')
  } else {
    btnBack.classList.remove('hidden')
  }

  if (questionIndex === rounds.length - 1) {
    btnNext.classList.add('hidden')
    btnEnd.classList.remove('hidden')
  } else {
    btnNext.classList.remove('hidden')
    btnEnd.classList.add('hidden')
  }

  root.querySelectorAll<HTMLButtonElement>('.answer').forEach((button) => {
    button.addEventListener('click', () => {
      const restaurant = button.dataset.restaurant

      if (restaurant && restaurant in menu.restaurantes) {
        root
          .querySelectorAll('.answer')
          .forEach((answer) => answer.classList.remove('selected'))

        button.classList.add('selected')

        onAnswer(restaurant as Restaurant)
      }
    })
  })

}
