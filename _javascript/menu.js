import classOfElements from './util.js'

// Menu Off canvas
const alternador = document.querySelector('.js-alternador')
const menuOffCanvas = document.querySelector('.js-menuOffCanva')
const hamburguerLine = document.querySelector('.js-hamburguerLine')
const headerLinks = document.querySelectorAll(".header-page__link")



function startMenuOffCanvas() {

    // Auxiliar
    function toggleMenu(){
        classOfElements.toggle('is-active', menuOffCanvas, hamburguerLine)
    }

    // Ativar e desativar menu off canvas
    alternador.addEventListener( 'click' , toggleMenu);

    // Evento de clique nos links do menu escondido
    for (const link of headerLinks) {
        link.addEventListener('click' , toggleMenu )
    }

    // Ao redimensionar a tela
    window.addEventListener('resize' , widthWindow)

    function widthWindow(){
        var width = window.innerWidth
        
        if(width > 554) classOfElements.remove('is-active' , menuOffCanvas, hamburguerLine)          
        
    }

    
}

export default startMenuOffCanvas