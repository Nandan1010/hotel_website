let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function validateName() {

    const fullname = document.getElementById("fullname").value;
    var checker = 0;

    for(var i=0; i<checker.length; i++) {
        if((fullname[i] >=97 && fullname[i] <= 122) || (fullname[i] >=65 && fullname[i] <= 90)) {
            checker = 0;
            document.getElementById("invalid").innerHTML = 'Name cannot contain any special symbols or numbers!';
        }
        else {
            document.getElementById("valid").innerHTML = 'Valid :)';
        }
    }


    

}
function getInTouch() {

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


}


// onsearch
// oninput
// onfocus
// onchange
// onkeypress
// onkeyup
// onkeydown (similar for mouse)
// onload
