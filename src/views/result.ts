import menuData from '../data/menu.json'
import { restaurantNames, type Restaurant } from '../models/types'
import { rounds } from './quiz'
import { ExternalLink } from 'lucide-static'

const pesos: Record<string, number> = menuData.pesos

type Score = { restaurant: Restaurant; score: number }

const links: Record<Restaurant, string> = {
    'Local de Ensayo': "https://localdensayo.com/carta/#",
    'Alborada': "https://alboradarestaurante.com/index.php/carta",
    'Torombolo': "https://restaurantetorombolo.com/murcia/",
    'Bodguita': "https://www.bodeguitamurcia.com/menus/",
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

  if (winner) {
    const winnerColumn = root.querySelector<HTMLElement>('.chart-column.winner')
    winnerColumn?.addEventListener('click', () => {
        window.open(links[winner.restaurant], '_blank', 'noopener,noreferrer')
    })
  }
}
