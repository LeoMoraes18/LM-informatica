import scrollPage from '../_javascript/scroll.js'
import classOfElements from '../_javascript/util.js'
import startMenuOffCanvas from '../_javascript/menu.js'

// Header Elements
const itensHeader = document.querySelectorAll('.js-itensHeader')

const App = {

    start(){
        // Ao carregar a página
        window.onload =  () => {    
            classOfElements.remove("pre-load" , itensHeader)  
            startMenuOffCanvas() 
        }

        // Ao scrollar a página
        window.onscroll = () => scrollPage();
    }
}


export default App