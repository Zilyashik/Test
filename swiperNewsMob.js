'use strict'

const swiper1 = new Swiper ('.news__container-swiper-wrapper' , {
    breakpoints: {
        320: {
            loop: true,
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 20,
            initialSlide: 1,
        }
    }


});

