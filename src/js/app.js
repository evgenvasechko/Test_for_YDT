import $ from 'jquery'

window.$ = $

window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let burgerButton = document.querySelector('.header-burger');
    let mobileMenu = document.querySelector('.header-menu_mobile');

    burgerButton.addEventListener('click', function(){
        mobileMenu.classList.toggle("show");
    });

    
});

// $(document).ready(function(){
//     $('.hero__image').slick();
// });