let bars = document.querySelector('.bars')
let xmark = document.querySelector('.xmark')
let menu = document.querySelector('.nav-menu')

bars.addEventListener('click', () => {

    bars.style.display = 'none'
    xmark.style.display = 'inline-block'
    menu.style.display = 'block'

})

xmark.addEventListener('click', () => {

    xmark.style.display = 'none'
    bars.style.display = 'inline-block'
    menu.style.display = 'none'
})