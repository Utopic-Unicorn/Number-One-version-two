const panels = document.querySelectorAll('.panel');

panels.forEach((panels) =>{
    panels.addEventListener('click', ()=>{
        removeClasses()
        panels.classList.add('active')
    })
})

function removeClasses(){
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}