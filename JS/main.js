window.onload = function () {

    const menu_btn = document.querySelector('.navbar-menu')
    const mobile_menu = document.querySelector('.hamburger-menu');

    menu_btn.addEventListener('click', function () {
        mobile_menu.classList.add('is-active')
    });
}