const panels = document.querySelectorAll(".panel")

panels.forEach(panel =>{
    panel.addEventListener('click',() =>{
        clearPanelsActive()
        panel.classList.add('active')
    })
})

function clearPanelsActive(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}