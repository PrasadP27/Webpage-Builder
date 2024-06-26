//for loader
const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
  loader.style.opacity = '0',
    document.body.style.cursor = 'wait'

  setTimeout(() => {
    loader.style.display = 'none',
      document.body.style.cursor = 'auto'
  }, 200)
})

// for smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)