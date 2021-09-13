/* eslint-disable linebreak-style */

const productColorList = [
    ...document.querySelectorAll(".product__params-link"),
];
const productColorsWrapper = document.querySelector(".product__params-list");

if (productColorList.length) {
    productColorList.forEach((el) => {
        // console.log(el.dataset.color);
        el.style.backgroundColor = el.dataset.color;
    });
}

if (productColorsWrapper) {
    productColorsWrapper.addEventListener("click", productColorSelect);
}

function productColorSelect(evt) {
    evt.preventDefault();
    productColorList.forEach((el) => {
        el.classList.remove("product__params-link--checked");
    });

    evt.target
        .closest(".product__params-link")
        .classList.add("product__params-link--checked");
}

const productTabMenu = document.querySelector(
    ".product-description__tabs-menu"
);

if (productTabMenu) {
    productTabMenu.addEventListener("click", productTabHandler);
}
// product-description__tabs-link

function productTabHandler(evt) {
    evt.preventDefault();

    const currentTabLink = evt.target.closest(
        ".product-description__tabs-link"
    );

    if (currentTabLink) {
        const productTabLinks = [
            ...document.querySelectorAll(".product-description__tabs-link"),
        ];

        productTabLinks.forEach((el) => {
            el.classList.remove("product-description__tabs-link--active");
        });

        currentTabLink.classList.add("product-description__tabs-link--active");

        const targetTab = currentTabLink.getAttribute("href");

        const productTabsContent = [
            ...document.querySelectorAll(".tabs-content__item"),
        ];

        productTabsContent.forEach((el) => {
            el.classList.remove("tabs-content__item--active");
        });

        document
            .querySelector(targetTab)
            .classList.add("tabs-content__item--active");
    }
}

import CreateSlider from "../../../js/import/CreateSlider.js";

CreateSlider(
    3,
    "#allready-viewed-slider",
    ".allready-viewed__slider-wrapper",
    ".allready-viewed__item"
);
