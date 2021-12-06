/* eslint-disable linebreak-style */
import AOS from "AOS";
import lightBox from "fslightbox";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import CreateSlider from "./CreateSlider";
AOS.init();

const popUpCloseBtn = document.querySelector(".pop-up__close");

if (popUpCloseBtn) {
    popUpCloseBtn.addEventListener("click", popUpClose);
}

function popUpClose(evt) {
    evt.target.closest(".pop-up--active").classList.remove("pop-up--active");
    document.body.classList.remove("page__body--pop-up-active");
}

const orderBTn = [...document.querySelectorAll(".order-btn")];
orderBTn.forEach((btn) => {
    btn.addEventListener("click", orderBtnHandler);
});

function orderBtnHandler() {
    const orderPopUp = document.querySelector(".pop-up");
    orderPopUp.classList.add("pop-up--active");
    document.body.classList.add("page__body--pop-up-active");
}

CreateSlider(3, "#sales-slider", ".sales-slider-wrapper", ".sales-slide");
CreateSlider(
    3,
    ".photo-gallery__slider",
    ".photo-gallery__slider-wrapper",
    ".photo-gallery__item"
);

const productSlider = document.querySelector(".product__slider");
const productSliderThumbs = document.querySelector(".product__slider-thumbs");

if (productSlider) {
    productSliderThumbs.addEventListener("click", function (evt) {
        evt.preventDefault();
        const target = evt.target.closest("img");
        const mainImg = productSlider.querySelector("img");

        mainImg.src = target.src;
    });

    const brs = productSliderThumbs.querySelectorAll("br");
    brs.forEach((el) => {
        el.remove();
    });
}

const catGalleryWrappers = document.querySelectorAll(".cat-gallery-wrapper");

catGalleryWrappers.forEach((catGalleryWrapper) => {
    createCatSlider(catGalleryWrapper);
});

function createCatSlider(sliderWrapper) {
    const sliderItems = [...sliderWrapper.querySelectorAll(".gallery-item")];

    const brs = sliderWrapper.querySelectorAll("br");
    brs.forEach((el) => {
        el.remove();
    });

    sliderItems.forEach((el) => {
        el.classList.add("swiper-slide");

        const galLink = el.querySelector("a");

        // console.log(galLink.closest(".gallery").id);
        const galleryID = galLink.closest(".gallery").id;

        if (galLink) {
            // galLink.dataset.fslightbox = galleryID;
            galLink.setAttribute("data-fslightbox", `${galleryID}`);
        }
    });
    refreshFsLightbox();

    if (sliderItems.length > 4) {
        if (sliderWrapper) {
            sliderWrapper.classList.remove("cat-gallery-wrapper--simple");
            sliderWrapper.classList.add("swiper");

            sliderWrapper.querySelector("div").classList.add("swiper-wrapper");

            const swiperNavs = sliderWrapper.querySelectorAll(".swiper-nav");
            swiperNavs.forEach((el) => {
                el.classList.remove("swiper-nav");
            });

            const catGallerySlider = new Swiper(sliderWrapper, {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
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
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            });
        }
    }
}
