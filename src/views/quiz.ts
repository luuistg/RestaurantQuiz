import menu from '../data/menu.json'
import { ChevronLeft, ChevronRight } from 'lucide-static'
import { type Restaurant } from '../models/types'

export const rounds = ['Snack1', 'Snack2', 'Entrante', 'Principal', 'Postre'] as const

const EXIT_STAGGER_MS = 55
const EXIT_DURATION_MS = 320

const ENTER_BASE_DELAY_MS = 90
const ENTER_STAGGER_MS = 70

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
              class="answer stagger-item ${selectedAnswer === 'Local de Ensayo' ? 'selected' : ''}"
              data-restaurant="Local de Ensayo"
            >
              ${menu.restaurantes['Local de Ensayo'][rounds[questionIndex]]}
            </button>

            <button
              class="answer stagger-item ${selectedAnswer === 'Alborada' ? 'selected' : ''}"
              data-restaurant="Alborada"
            >
              ${menu.restaurantes['Alborada'][rounds[questionIndex]]}
            </button>

            <button
              class="answer stagger-item ${selectedAnswer === 'Torombolo' ? 'selected' : ''}"
              data-restaurant="Torombolo"
            >
              ${menu.restaurantes['Torombolo'][rounds[questionIndex]]}
            </button>

            <button
              class="answer stagger-item ${selectedAnswer === 'Bodguita' ? 'selected' : ''}"
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

  // Entrada escalonada: cada elemento aparece deslizándose desde la derecha,
  // con un pequeño retraso respecto al anterior.
  const enterItems = root.querySelectorAll<HTMLElement>('.stagger-item')
  enterItems.forEach((item, index) => {
    item.style.animationDelay = `${ENTER_BASE_DELAY_MS + index * ENTER_STAGGER_MS}ms`
    item.classList.add('stagger-enter')
  })
}

// Clona SOLO cada botón de respuesta (no toda la tarjeta) y lo deja
// flotando en su sitio exacto mientras se anima hacia la izquierda. Así
// el resto de la pregunta (fondo, borde, cabecera, título) se sustituye
// al instante y no tapa la entrada de la siguiente pregunta, que puede
// empezar a animarse en el mismo momento sin esperar a que esto termine.
export function animateQuizExit(root: HTMLElement): void {
  const items = root.querySelectorAll<HTMLElement>('.stagger-item')

  items.forEach((original, index) => {
    const rect = original.getBoundingClientRect()
    const clone = original.cloneNode(true) as HTMLElement

    clone.style.position = 'fixed'
    clone.style.top = `${rect.top}px`
    clone.style.left = `${rect.left}px`
    clone.style.width = `${rect.width}px`
    clone.style.height = `${rect.height}px`
    clone.style.margin = '0'
    clone.style.pointerEvents = 'none'
    clone.style.zIndex = '100'

    const delay = index * EXIT_STAGGER_MS
    clone.style.animationDelay = `${delay}ms`
    clone.classList.remove('stagger-enter')
    clone.classList.add('stagger-exit')

    document.body.appendChild(clone)
    setTimeout(() => clone.remove(), delay + EXIT_DURATION_MS)
  })
}
