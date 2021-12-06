/* eslint-disable linebreak-style */
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

export default function CreateSlider(
    minSlides,
    sliderSelector,
    sliderWrapperSelector,
    slidesSelector,
    maxSlidePerView = null,
    spaceBetweenSlides = 30
) {
    const slides = document.querySelectorAll(slidesSelector);
    const slider = document.querySelector(sliderSelector);

    if (slides.length > minSlides) {
        const sliderWrapper = document.querySelector(sliderWrapperSelector);

        if (sliderSelector !== ".cat-gallery-wrapper") {
            sliderWrapper.classList.remove(sliderWrapperSelector.slice(1));
        }

        slider.classList.add("swiper");
        // slider.update();
        sliderWrapper.classList.add("swiper-wrapper");

        slides.forEach((el) => {
            el.classList.add("swiper-slide");
        });

        const swiperNavs = slider.querySelectorAll(".swiper-nav");
        swiperNavs.forEach((el) => {
            el.classList.remove("swiper-nav");
        });

        let breakpoints = {};
        if (maxSlidePerView) {
            breakpoints = {
                // when window width is >= 320px
                320: {
                    slidesPerView:
                        maxSlidePerView - 1 > 0 ? maxSlidePerView - 1 : 1,
                },
                // when window width is >= 576px
                576: {
                    slidesPerView:
                        maxSlidePerView - 1 > 0 ? maxSlidePerView - 1 : 1,
                    spaceBetween: 30,
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: maxSlidePerView,
                    spaceBetween: 30,
                },
            };
        } else {
            breakpoints = {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                // when window width is >= 576px
                577: {
                    slidesPerView: 2,
                },
                // when window width is >= 992px
                993: {
                    slidesPerView: 3,
                },
            };
        }

        new Swiper(sliderSelector, {
            speed: 400,
            loop: true,
            lazy: true,
            centeredSlides: true,
            spaceBetween: 30,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: breakpoints,
        });
    }
}
