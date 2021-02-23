$(document).ready(function () {
    $(".carousel__inner").slick({
        prevArrow:
            '<button type="button" class="slick-prev"><img src="../icons/pulse/left-arrow.png"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="../icons/pulse/right-arrow.png"></button>',
    });

    /*   let advanceLink = $(".catalog-item__link");

    advanceLink.onclick("click", function () {
        $(".catalog-item__content").toggleClass("catalog-item__content_active");
        $(".catalog-item__list").toggleClass("catalog-item__list_active");
    }); */
});

let advanceLink = document.querySelector(".catalog-item__link");
let content = document.querySelector(".catalog-item__content");
let list = document.querySelector(".catalog-item__list");


function toggleList() {
    content.classList.toggle('catalog-item__content_active')
    list.classList.toggle('catalog-item__list_active')
}

advanceLink.addEventListener("click", toggleList);
