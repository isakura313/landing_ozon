/*let select = document.getElementById('application select');
select.onblur = () => {
    select.style.color = 'black';
}*/

let select = document.getElementById('application_select');
let btn = document.querySelector('.nav__adaptive_btn');
let menu = document.querySelector('.nav__adaptive');

select.onblur = () => {
    select.style.color = 'black';
}

btn.onclick = () =>{
    menu.classList.toggle('visibility_switcher');
}