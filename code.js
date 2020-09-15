let select = document.getElementById('select_form');
let adaptive_menu = document.querySelector(".adaptive_menu");

select.onblur = () => {
    select.style.color = 'black';
}

let nav_mobile = document.querySelector(".nav_mobile");
adaptive_menu.onclick = () =>{
    nav_mobile.classList.toggle("see_helper");
    nav_mobile.classList.toggle("animate__flipInY");
}