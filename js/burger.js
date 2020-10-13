$('.mobile__menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('mobile__menu-btn_active');
    $('.mobile__menu').toggleClass('mobile__menu_active')
});