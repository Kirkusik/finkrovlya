/* eslint-disable linebreak-style */
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

export default function CreateSlider(
    minSlides,
    sliderSelector,
    sliderWrapperSelector,
    slidesSelector
) {
    const slides = document.querySelectorAll(slidesSelector);

    if (slides.length > minSlides) {
        const slider = document.querySelector(sliderSelector);
        slider.classList.add("swiper");

        const sliderWrapper = document.querySelector(sliderWrapperSelector);
        sliderWrapper.classList.add("swiper-wrapper");

        if (sliderSelector !== ".cat-gallery-wrapper") {
            sliderWrapper.classList.remove(sliderWrapperSelector);
        }

        slides.forEach((el) => {
            el.classList.add("swiper-slide");
        });

        const swiperNavs = slider.querySelectorAll(".swiper-nav");
        swiperNavs.forEach((el) => {
            el.classList.remove("swiper-nav");
        });

        new Swiper(sliderSelector, {
            speed: 400,
            loop: true,
            lazy: true,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                // when window width is >= 576px
                576: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }
}
