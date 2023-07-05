const open = document.querySelector('.hamburger')

open.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

const close = document.querySelector('.close')

close.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

