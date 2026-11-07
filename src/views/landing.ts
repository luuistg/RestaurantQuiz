// src/views/landing.ts
export function renderLanding(root: HTMLElement, onStart: () => void) {
  root.innerHTML = `
    <section class="screen screen-landing">
      <h2 class="landing-title">¡FELICIDADES!</h2>
      <header class="header">
        <p class="eyebrow">Feliz</p>
        <h1 class="title-block">Cumpleaños</h1>
      </header>
      <p class="description">Es tu cumpleaños y un pequeño menú desgustación lo va a acompañar. Elige los platos perfectos y descubrirás donde lo vamos a celebrar.</p>
      <div class="badge-container">
        <p class="badge">x2 Snacks</p>
        <p class="badge">x1 Entrante</p>
        <p class="badge">x1 Principal</p>
        <p class="badge">x1 Postre</p>
      </div>
      <button class="btn" id="btn-start">Empezar a elegir</button>
    </section>
  `
  root.querySelector('#btn-start')!.addEventListener('click', onStart)
}