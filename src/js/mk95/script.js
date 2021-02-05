let menuBtn = document.querySelector(".m-humburger");
let menu = document.querySelector(".m-menu");

function humburger() {
    menu.classList.toggle("m-menu_active");
    menuBtn.classList.toggle("m-humburger_active");
}

menuBtn.addEventListener("click", humburger);
