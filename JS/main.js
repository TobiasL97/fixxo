// Sliding menu for mobile 

const hamburger_menu = document.querySelector('.hamburger-menu');
const hamburger_icon = document.querySelector('.hamburger-icon');

const mobileMenu = () => {
    if (hamburger_icon.classList.contains('is-active')) //close hamburger-menu
    {
        hamburger_menu.classList.remove('is-active');
        hamburger_icon.classList.remove('is-active');
    }
    else { //open hamburger-menu
        hamburger_menu.classList.add('is-active');
        hamburger_icon.classList.add('is-active');
        
    }
    
}