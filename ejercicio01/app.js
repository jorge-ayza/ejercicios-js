const bPrev = document.querySelector('#bPrev')
const bNext = document.querySelector('#bNext')
const items = document.querySelectorAll('.item')

let i = 0
ocultarItems()
mostrarItems(i)

bNext.addEventListener('click', e => {
    if(i < items.length - 1){
        i++
        ocultarItems()
        mostrarItems(i)
    }
})

bPrev.addEventListener('click', e => {
    if(i > 0){
        i--
        ocultarItems()
        mostrarItems(i)
    }
})

function ocultarItems(){
    items.forEach(item => {
        item.classList.add('hidden')
    })
}

function mostrarItems(i) {
    items[i].classList.remove('hidden')
}