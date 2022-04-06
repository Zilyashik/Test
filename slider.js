'use strict'

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-buttonN',
        prevEl: '.swiper-buttonP',
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 80,
    initialSlide: 1,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1.5,
        }
    }
});
