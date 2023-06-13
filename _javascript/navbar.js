window.onload = function(e) {
    var offset = document.getElementsByClassName('navbar')[0].offsetTop;
    var menu = document.getElementsByClassName('navbar')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > 210){
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'initial';
        }
    });
}