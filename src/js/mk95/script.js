let menuBtn = document.querySelector(".m-humburger");
let menu = document.querySelector(".m-menu");

function humburger() {
    menu.classList.toggle("m-menu_active");
    menuBtn.classList.toggle("m-humburger_active");
}

menuBtn.addEventListener("click", humburger);

let singIn = document.querySelector(".m-header__sign-in-icon");
let overlay = document.querySelector(".overlay");
let cancel = document.querySelector(".modal__btn-cancel");

singIn.addEventListener("click", openModal);
cancel.addEventListener("click", openModal);

function openModal() {
    overlay.classList.toggle("overlay_active");
    document.body.classList.toggle("hidden");
}

function hasTouch() {
    return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
}

if (hasTouch()) {
    // remove all the :hover stylesheets
    try {
        // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(":hover")) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
