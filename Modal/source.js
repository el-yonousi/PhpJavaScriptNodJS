const modal = document.querySelector('#modal')

modal.style.display = 'none'


document.querySelector('#btn-open').addEventListener('click', () => {
    modal.style.display = 'grid'
})

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none'
})

document.querySelector('.exit').addEventListener('click', () => {
    modal.style.display = 'none'
})