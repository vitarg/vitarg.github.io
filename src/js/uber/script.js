let menuBtn = document.querySelector('.u-humburger')

function humburger() {
    let menu = document.querySelector('.u-menu')

    menu.classList.toggle('u-menu__active')
    menuBtn.classList.toggle('u-humburger_active')
}

menuBtn.addEventListener('click', humburger)