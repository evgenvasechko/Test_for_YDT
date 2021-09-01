import $ from 'jquery'

window.$ = $

window.addEventListener('DOMContentLoaded', function() {
    let burgerButton = document.querySelector('.header-burger');
    let mobileMenu = document.querySelector('.header-menu_mobile');

    burgerButton.addEventListener('click', function(){
        mobileMenu.classList.toggle("show");
    });
});