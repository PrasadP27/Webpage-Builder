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

//for navbar 
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("change", window.scrollY > 0);
});

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

//for gsap 
let t1Hero = gsap.timeline()

t1Hero.from('#home h1', {
  yPercent: 100,
  opacity: 0,
  ease: "back.out(1.7)",
  duration: 1.2
}),

  t1Hero.from('#home p, #home a', {
    yPercent: 100,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 1.2,
    delay: '-1'
  })

//home video
let t1video = gsap.timeline({
  scrollTrigger: {
    trigger: '#home',
    start: '40% 50%',
    end: '60% 50%',
    // markers: true,
    scrub: true,
  }
})

t1video.to('.home-video', {
  scale: 1.05,
  y: '-50px',
  ease: 'none'
})

//home text
let t1text = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: '30% 70%',
    end: '30% 70%',
    // markers: true,
    scrub: false,
  }
})

t1text.from('.about-text', {
  xPercent: -70,
  stagger: 0.5,
  opacity: 0,
  ease: "none"
})

//about-info
let t1about = gsap.timeline({
  scrollTrigger: {
    trigger: '#about-info',
    start: '25% 70%',
    end: '25% 70%',
    // markers: true,
    scrub: false,
  }
})

t1about.from('#about-info img', {
  scale: 0,
  opacity: 0,
  ease: "none"
})

t1about.from('#about-info .content h2', {
  xPercent: 40,
  opacity: 0,
  ease: "none",
})

t1about.from('#about-info .content p', {
  xPercent: 40,
  opacity: 0,
  ease: "none",
})

//features
let t1features = gsap.timeline({
  scrollTrigger: {
    trigger: '#features',
    start: '25% 70%',
    end: '25% 70%',
    // markers: true,
    scrub: false,
  }
})

t1features.from('.feature-content', {
  yPercent: 50,
  opacity: 0
})

let t1howToUse = gsap.timeline({
  scrollTrigger: {
    trigger: '#howToUse',
    start: '25% 70%',
    end: '25% 70%',
    // markers: true,
    scrub: false,
  }
})

t1howToUse.from('#howToUse .content',{
  yPercent: -50,
  opacity: 0
})