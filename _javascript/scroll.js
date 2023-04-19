import classOfElements from './util.js'

export default function scrollPage(){

    // --------- ANIMAÇÃO DO NAV-TOP ---------
    
        const navbar = document.querySelector(".nav-top");
        const btn = document.getElementsByClassName("nav-top__btn");
    
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            
            classOfElements.add('scroll', navbar)
            classOfElements.add('btn--opaco', btn)
            classOfElements.remove('btn--nav', btn)
        } else {
            classOfElements.remove('scroll', navbar)    
            classOfElements.add('btn--nav', btn)
            classOfElements.remove('btn--opaco' , btn) 
        }
    
    
    
    // --------- ANIMAÇÃO DO GRID - SEÇÃO 1 ---------
    
        const grid = document.querySelector(".main-content__grid");
    
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            classOfElements.remove('pre-load', grid)
        } else {
            classOfElements.add('pre-laod', grid)
        }
    
    
    
    // --------- ANIMAÇÃO DA IMAGEM - SEÇÃO 3 ---------
    
        const mainContentPicture = document.querySelector(".main-content__picture");
        
         if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
             classOfElements.remove('scroll', mainContentPicture)        
        } else {
            classOfElements.add('scroll', mainContentPicture)
        }
    
    
    
    // --------- ANIMAÇÃO DA IMAGEM - SEÇÃO 4 ---------    
     
        const picturesSection4 = document.querySelectorAll('.js-pictureSection4')
    
        if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {    
            classOfElements.remove('scroll', picturesSection4 )
            
        } else {       
            classOfElements.add('scroll', picturesSection4 )
        }
    
}