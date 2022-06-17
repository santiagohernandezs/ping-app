import makeping from './ping.js'

const start = document.getElementById('start')

start.addEventListener('click', () => {
  makeping()
})
