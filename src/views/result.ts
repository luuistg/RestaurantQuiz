import menuData from '../data/menu.json'
import { restaurantNames, type Restaurant } from '../models/types'
import { rounds } from './quiz'
import { ExternalLink } from 'lucide-static'
import confetti from 'canvas-confetti'

const pesos: Record<string, number> = menuData.pesos

type Score = { restaurant: Restaurant; score: number }

const links: Record<Restaurant, string> = {
    'Local de Ensayo': "https://localdensayo.com/carta/#", 
    'Alborada': "https://alboradarestaurante.com/index.php/carta",
    'Torombolo': "https://restaurantetorombolo.com/murcia/",
    'Bodguita': "https://www.bodeguitamurcia.com/menus/",
}

const images: Record<Restaurant, string> = {
    'Local de Ensayo': `${import.meta.env.BASE_URL}localdeensayo.jpg`,
    'Alborada': `${import.meta.env.BASE_URL}alborada.jpg`,
    'Torombolo': `${import.meta.env.BASE_URL}torombolo.jpg`,
    'Bodguita': `${import.meta.env.BASE_URL}bodeguita.jpg`,
}

function getScores(selectedAnswers: Restaurant[]): Score[] {
  const counts: Record<Restaurant, number> = {
    'Local de Ensayo': 0,
    'Alborada': 0,
    'Torombolo': 0,
    'Bodguita': 0,
  }

  selectedAnswers.forEach((answer, index) => {
    const round = rounds[index]
    if (answer && round) {
      counts[answer] += pesos[round]
    }
  })

  return restaurantNames
    .map((restaurant) => ({ restaurant, score: counts[restaurant] }))
}


const CONFETTI_COLORS = ['#e43d12', '#d6536d', '#ffa2b6', '#efb11d', '#ebe9e1']

function randomEntre(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

// Traca de confeti bien exagerada: explosión inicial enorme desde varios
// puntos a la vez, una tanda de cañonazos laterales escalonados con mucha
// más cantidad, y por encima una lluvia continua cayendo desde arriba
// durante varios segundos para que nunca se quede "vacío" el aire.
function celebrarConConfeti(): void {
  const defaults: confetti.Options = {
    colors: CONFETTI_COLORS,
    disableForReducedMotion: true,
    ticks: 500,
  }

  // Explosión inicial, varias a la vez desde distintos puntos
  confetti({ ...defaults, particleCount: 1800, spread: 160, startVelocity: 75, scalar: 1.4, origin: { x: 0.5, y: 0.5 } })
  confetti({ ...defaults, particleCount: 1200, spread: 360, startVelocity: 60, scalar: 1.2, angle: 90, origin: { x: 0.5, y: 0.3 } })
  confetti({ ...defaults, particleCount: 900, spread: 100, startVelocity: 65, scalar: 1.3, origin: { x: 0.15, y: 0.5 } })
  confetti({ ...defaults, particleCount: 900, spread: 100, startVelocity: 65, scalar: 1.3, origin: { x: 0.85, y: 0.5 } })

  const bursts: { delay: number; origin: { x: number; y: number }; angle: number }[] = [
    { delay: 120, origin: { x: 0.0, y: 0.6 }, angle: 60 },
    { delay: 120, origin: { x: 1.0, y: 0.6 }, angle: 120 },
    { delay: 280, origin: { x: 0.08, y: 1 }, angle: 75 },
    { delay: 280, origin: { x: 0.92, y: 1 }, angle: 105 },
    { delay: 440, origin: { x: 0.0, y: 0.15 }, angle: 300 },
    { delay: 440, origin: { x: 1.0, y: 0.15 }, angle: 240 },
    { delay: 600, origin: { x: 0.5, y: 0.0 }, angle: 270 },
    { delay: 760, origin: { x: 0.25, y: 0.85 }, angle: 80 },
    { delay: 760, origin: { x: 0.75, y: 0.85 }, angle: 100 },
    { delay: 920, origin: { x: 0.1, y: 0.4 }, angle: 45 },
    { delay: 920, origin: { x: 0.9, y: 0.4 }, angle: 135 },
    { delay: 1080, origin: { x: 0.5, y: 0.5 }, angle: 90 },
    { delay: 1240, origin: { x: 0.0, y: 0.6 }, angle: 60 },
    { delay: 1240, origin: { x: 1.0, y: 0.6 }, angle: 120 },
    { delay: 1400, origin: { x: 0.3, y: 1 }, angle: 80 },
    { delay: 1400, origin: { x: 0.7, y: 1 }, angle: 100 },
    { delay: 1600, origin: { x: 0.0, y: 0.3 }, angle: 310 },
    { delay: 1600, origin: { x: 1.0, y: 0.3 }, angle: 230 },
    { delay: 1800, origin: { x: 0.5, y: 0.2 }, angle: 270 },
    { delay: 2000, origin: { x: 0.2, y: 0.9 }, angle: 70 },
    { delay: 2000, origin: { x: 0.8, y: 0.9 }, angle: 110 },
    { delay: 2250, origin: { x: 0.5, y: 0.5 }, angle: 90 },
  ]

  bursts.forEach(({ delay, origin, angle }) => {
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 720 + Math.floor(Math.random() * 600),
        spread: 70 + Math.floor(Math.random() * 70),
        startVelocity: 45 + Math.floor(Math.random() * 35),
        scalar: 1 + Math.random() * 0.7,
        origin,
        angle,
      })
    }, delay)
  })

  // Lluvia continua cayendo desde arriba, en puntos aleatorios, durante
  // unos segundos por encima de todo lo anterior.
  const rainEnd = Date.now() + 6000
  const rainInterval = window.setInterval(() => {
    if (Date.now() > rainEnd) {
      window.clearInterval(rainInterval)
      return
    }
    confetti({
      ...defaults,
      particleCount: 180,
      startVelocity: randomEntre(15, 30),
      spread: 100,
      scalar: randomEntre(0.8, 1.3),
      gravity: 0.9,
      angle: 90,
      origin: { x: Math.random(), y: -0.1 },
    })
  }, 90)
}

export const renderResult = (
  root: HTMLElement,
  selectedAnswers: Restaurant[],
  onRestart: () => void,
) => {
  const scores = getScores(selectedAnswers)
  const maxScore = Math.max(0, ...scores.map((s) => s.score))
  const winner = scores.find((s) => s.score === maxScore)

  root.innerHTML = `
    <section class="screen screen-result">
      <h2 class="result-title">¡FELICIDADES!</h2>
      <p class="description">Según tu elección, el restaurante ideal para tu cumpleaños es:</p>

      ${winner ? `
        <img
          class="winner-image"
          src="${images[winner.restaurant]}"
          alt="${winner.restaurant}"
        />
      ` : ''}

      <div class="chart">
        ${scores
          .map(({ restaurant, score }) => {
            const rawHeight = maxScore === 0 ? 0 : (score / maxScore) * 80
            const height = Math.max(rawHeight, 4)
            const isWinner = winner ? restaurant === winner.restaurant : false
            return `
              <div class="chart-column${isWinner ? ' winner' : ''}">
                <div class="chart-bar" style="height: ${height}%">
                  <span class="chart-label${isWinner ? ' chart-label-link' : ''}">
                    ${restaurant}${isWinner ? ExternalLink : ''}
                  </span>
                  <span class="chart-score">${score} pts</span>
                </div>
              </div>
            `
          })
          .join('')}
      </div>

      <button class="btn" id="btn-restart">Volver a empezar</button>
    </section>
  `

  const btnRestart = root.querySelector<HTMLButtonElement>('#btn-restart')!
  btnRestart.addEventListener('click', onRestart)

  celebrarConConfeti()

  if (winner) {
    const winnerColumn = root.querySelector<HTMLElement>('.chart-column.winner')
    winnerColumn?.addEventListener('click', () => {
        window.open(links[winner.restaurant], '_blank', 'noopener,noreferrer')
    })
  }
}
