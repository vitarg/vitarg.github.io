let menuBtn = document.querySelector('.humburger')

function humburger() {
    let menu = document.querySelector('.menu')

    menu.classList.toggle('menu_active')
    menuBtn.classList.toggle('humburger_active')
}

menuBtn.addEventListener('click', humburger)