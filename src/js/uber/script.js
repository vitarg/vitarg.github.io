let menuBtn = document.querySelector(".u-humburger");
let menu = document.querySelector(".u-menu__list");

function humburger() {
    menu.classList.toggle("u-menu__list_active");
    menuBtn.classList.toggle("u-humburger_active");
}

menuBtn.addEventListener("click", humburger);
