const open1 = document.getElementById('open')
const close1 = document.getElementById('close')
const container = document.querySelector('.container')

open1.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close1.addEventListener('click', () => {
    container.classList.remove('show-nav')
})