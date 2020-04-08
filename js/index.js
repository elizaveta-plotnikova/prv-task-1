document.getElementById('js-burger-menu').addEventListener("mousedown", function( event ) {

    var menuIcon = document.getElementById('js-burger-menu');
    var menu = document.getElementById('js-left-menu');

    
    if( menuIcon.classList.contains('burger-menu--active') ) {

        menuIcon.classList.remove('burger-menu--active');
        menu.classList.remove('left-menu');
       
    
    } else {
    
        menuIcon.classList.add('burger-menu--active');
        menu.classList.add('left-menu');
    
    }
  
} ) 




