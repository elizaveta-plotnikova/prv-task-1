/* Бургер-меню */

(function() {

    var burgerIcon = document.getElementById('js-burger-menu');
    var menu = document.getElementById('js-header-menu');
    var backgroundWrap = document.getElementById('js-background-wrap');
    var menuItemContacts = document.getElementById('js-menu-contacts');
    var burgerLinks = document.getElementsByClassName('anchor');
    
    function removeStyles() {
        burgerIcon.classList.remove('burger-menu--active');
        menu.classList.remove('menu--active');
        backgroundWrap.classList.remove('background-wrap--active');
    };

    function addStyles() {
        burgerIcon.classList.add('burger-menu--active');
        menu.classList.add('menu--active');
        menuItemContacts.classList.remove('hidden');
        menuItemContacts.classList.add('menu__item');
        backgroundWrap.classList.add('background-wrap--active');
    };

    burgerIcon.addEventListener('mousedown', function(event) {
        if (burgerIcon.classList.contains('burger-menu--active')) {
            removeStyles();
        
        } else {
            addStyles();
        }
    });

    backgroundWrap.addEventListener('mousedown', function(event) {
        removeStyles();
    }); 

    Array.from(burgerLinks).forEach(function(link) {
        link.addEventListener('click', function(event) {
            removeStyles();
        });
    }); 

}());

/* Плавная прокрутка страницы */

(function() {

    var NavLinks = document.getElementsByClassName('anchor');

    Array.from(NavLinks).forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = link.getAttribute('href');
            var id = href.slice(1);
            var anchor = document.getElementById(id);

            e.preventDefault();
            anchor.scrollIntoView({block: 'center', behavior: 'smooth'});
         });
    });

}());