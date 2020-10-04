'use strict';

let select = function () {
    let selectHeder = document.querySelectorAll('.select__header');

    let selectItem = document.querySelectorAll('select__item');

    selectHeder.forEach(item =>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item =>{
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose(){
        let text = this.innerText,
        currentText = this.closest('.select').querySelector('.select__current');
        currentText.innerText = text
    }
}

select();



// $(document).ready(function(){
//     $('.card__wrapper').slick({
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 3
//     })
//
// })

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});
