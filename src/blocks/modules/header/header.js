const openMenuBtn = document.querySelector(".navigation__menus-burger");
const navigationMenuWrapper = document.querySelector(
   ".navigation__menus-wrapper"
);
const navigationMenuCloseBtn = document.querySelector(
   ".navigation__menus-close"
);
const pageBody = document.querySelector(".page__body");

openMenuBtn.addEventListener("click", navigationMenuOpen);

function navigationMenuOpen() {
   pageBody.classList.add("page__body--with-overlay");
   navigationMenuWrapper.classList.add("navigation__menus-wrapper--visible");
   navigationMenuCloseBtn.classList.add("navigation__menus-close--active");

   navigationMenuCloseBtn.addEventListener("click", navigationMenuClose);
}

function navigationMenuClose() {
   pageBody.classList.remove("page__body--with-overlay");
   navigationMenuWrapper.classList.remove("navigation__menus-wrapper--visible");
   navigationMenuCloseBtn.classList.remove("navigation__menus-close--active");

   navigationMenuCloseBtn.removeEventListener("click", navigationMenuClose);
}
