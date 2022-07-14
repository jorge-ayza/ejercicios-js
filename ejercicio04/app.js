// referencia de botones
const tabs = document.querySelectorAll('.tab')
// referencia del contenido
const contents = document.querySelectorAll('.content')

let index = 0

cambiarTab(index)

tabs.forEach(function(tab, i) {
    tab.addEventListener('click', e => {
        // index = i
        cambiarTab(i)
    })
})

function cambiarTab(index){
    contents.forEach(content => {
        content.style.display = 'none'
    })

    tabs.forEach(tab => {
        tab.classList.remove('active-tab')
    })

    tabs[index].classList.add('active-tab')
    contents[index].style.display = 'block'
}