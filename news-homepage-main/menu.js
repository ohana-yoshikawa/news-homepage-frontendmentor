
let btnMenu = document.getElementById('menu-open')
let menumobile = document.getElementById('menu-mobileid')
let overlay = document.getElementById('overlay-menuid')

btnMenu.addEventListener('click', ()=>{
    menumobile.classList.add('abrir-menu')
})

menumobile.addEventListener('click', ()=>{
    menumobile.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menumobile.classList.remove('abrir-menu')
})