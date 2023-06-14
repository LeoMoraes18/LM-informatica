window.onload = function(e) {
    var offset = document.getElementsByClassName('navbar')[0].offsetTop;
    var menu = document.getElementsByClassName('navbar')[0];

    document.addEventListener('scroll', function() {
        if (window.innerWidth >= 800) {
            if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset){
                menu.style.position = 'fixed';
            } else {
                menu.style.position = 'initial';
            }
        } else {
            // Restaurar o estilo padrão para telas menores
            menu.style.position = 'initial';
        }
    });
}
