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

const checkLength = (element, errorMessage = "This field is required", minLength = 2) => {
    console.log(element.target.id)

    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
    } 
    else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}


const validate = (e) => {
    switch(e.target.type) {
        case "text":
            checkLength(e, `You must enter a ${e.target.id}`, 2)
            break;
        case "email":
            break;
        case "textarea":
            checkLength(e, `You must enter a ${e.target.id}`, 5)
            break;
    }
}