const  hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const  $menu = document.getElementById('menu');
const  header = document.querySelector('.header');


hamburger.onclick = function(){
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}
document.onscroll =function () {
    var scroll_pos = window.scrollY;
    if (scroll_pos>550) {
        header.style.backgroundColor='#29323c';
    }
    else{
        header.style.backgroundColor='transparent';
    }
}
menu_item.forEach(item => {
    item.onclick = function(){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    }
});