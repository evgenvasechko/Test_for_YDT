import $ from 'jquery'

window.$ = $

window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let burgerButton = document.querySelector('.header-burger');
    let mobileMenu = document.querySelector('.header-menu_mobile');

    burgerButton.addEventListener('click', function(){
        mobileMenu.classList.toggle("show");
    });

    let picture = document.querySelectorAll(".picture");
    console.log(picture);

    



    let slider = function(){
        for(let i=0; i<=picture.length; i++){
            if(window.screen.width < 480) {
                break;
            } else if(i+1 >= picture.length){
                i = 0;
            }
            picture[i+1].classList.toggle("hidden");
            picture[i].classList.toggle("hidden");
            break;
        };
    };

    setInterval(slider, 3000);

    
});