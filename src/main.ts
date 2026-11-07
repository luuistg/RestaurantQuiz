import './style.css'

// Import fonts
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/600.css'

// src/main.ts
import './style.css'
import { renderLanding } from './views/landing'
import { renderQuiz, rounds, animateQuizExit } from './views/quiz'
import { renderResult } from './views/result'
import { type Restaurant } from './models/types'

const app = document.querySelector<HTMLDivElement>('#app')!

let questionIndex = 0

const selectedAnswers: (Restaurant | undefined)[] = []

function showQuestion() {
  renderQuiz(
    app,
    questionIndex,
    selectedAnswers[questionIndex],
    (selectedRestaurant) => {
      selectedAnswers[questionIndex] = selectedRestaurant
    },
    () => {
      goToQuestion(questionIndex - 1)
    },
    () => {
      goToQuestion(questionIndex + 1)
    },
    () => {
        const allAnswered = selectedAnswers.every(isDefined)
        if (allAnswered) {
          goToResult()
        }
    }
  )
}

function clearQuestion() {
    selectedAnswers.forEach((_, index) => {
        selectedAnswers[index] = undefined
    })
    showQuestion()
}

function goToQuestion(index: number) {
  if (index < 0 || index >= rounds.length) {
    return
  }

  animateQuizExit(app)
  questionIndex = index
  showQuestion()
}

renderLanding(app, () => {
  questionIndex = 0
  showQuestion()
})

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

function getAnsweredRestaurants(): Restaurant[] {
  return selectedAnswers.filter(isDefined)
}

function goToResult() {
  renderResult(app, getAnsweredRestaurants(), () => {
    questionIndex = 0
    clearQuestion()
  })
}

