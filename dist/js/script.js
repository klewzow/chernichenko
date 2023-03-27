function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();

var burger = document.querySelector('.burger__menu');
var burger_page = document.querySelector('.header__menu');

burger.addEventListener('click', function () {
    burger.classList.toggle("_active");
    burger_page.classList.toggle("_active");
    document.querySelector('body').classList.toggle("_active");
}
);



let logoSwiper = new Swiper(".reviews", {
    loop: false,

    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides : false,
    slidesOffsetBefore :  0,
    slidesOffsetAfter :  0,
    grabCursor: true,
    autoHeight: false,

    breakpoints: {


        
        730: {
            slidesPerView: 1,
        },
        999: {
            slidesPerView: 4,
        },
        1360: {
            slidesPerView: 4,
        },
    },

});






