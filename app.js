const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const leftControl = $('.left-control')
const rightControl = $('.right-control')

const imagesContent = $$('.images-content img')
const carruselItem = $$('.carrusel-item article')

rightControl.addEventListener('click', e => {
  e.preventDefault()

  let cont = Array.from(carruselItem).find(item => item.classList.contains('active'))
    .dataset.id
  Array.from(carruselItem).map(item => item.classList.remove('active'))
  Array.from(imagesContent).map(item => item.classList.remove('marked'))

  cont++

  console.log(cont)
  if (cont == 4) {
    $('.images-content').scrollLeft = 200
  }

  if (cont === carruselItem.length + 1) {
    carruselItem[0].classList.add('active')
    imagesContent[0].classList.add('marked')
    $('.images-content').scrollLeft = 10
  } else {
    carruselItem[cont - 1].classList.add('active')
    imagesContent[cont - 1].classList.add('marked')
  }
})

leftControl.addEventListener('click', e => {
  e.preventDefault()

  let cont = Array.from(carruselItem).find(item => item.classList.contains('active'))
    .dataset.id
  console.log(cont)

  Array.from(carruselItem).map(item => item.classList.remove('active'))

  Array.from(imagesContent).map(item => item.classList.remove('marked'))
  cont--

  if (cont == 1) {
    $('.images-content').scrollLeft = 10
  }

  if (cont == 0) {
    carruselItem[3].classList.add('active')
    imagesContent[3].classList.add('marked')
    $('.images-content').scrollLeft = 200
  } else {
    carruselItem[cont - 1].classList.add('active')
    imagesContent[cont - 1].classList.add('marked')
  }
})

imagesContent.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    Array.from(imagesContent).map(item => item.classList.remove('marked'))
    Array.from(carruselItem).map(item => item.classList.remove('active'))
    e.target.classList.add('marked')
    carruselItem[e.target.dataset.idImage - 1].classList.add('active')

    if (e.target.dataset.idImage == 1) {
      $('.images-content').scrollLeft = 10
    }
    if (e.target.dataset.idImage == 4) {
      $('.images-content').scrollLeft = 200
    }
  })
})
