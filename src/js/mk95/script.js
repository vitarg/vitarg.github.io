let menuBtn = document.querySelector(".m-humburger");
let menu = document.querySelector(".m-menu");

function humburger() {
    menu.classList.toggle("m-menu_active");
    menuBtn.classList.toggle("m-humburger_active");
}

menuBtn.addEventListener("click", humburger);

let singIn = document.querySelector(".m-header__sign-in-icon");
let overlay = document.querySelector(".overlay");


singIn.addEventListener("click", openModal);

function openModal() {
    overlay.classList.toggle("overlay_active");
}