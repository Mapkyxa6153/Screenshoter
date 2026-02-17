const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".navbar__menu");
const body = document.body;

let lastScrollY = window.scrollY;

function toggleMenu() {
  const isOpened = menu.classList.contains("navbar__menu--active");

  burger.classList.toggle("active");
  menu.classList.toggle("navbar__menu--active");

  if (!isOpened) {
    body.classList.add("no-scroll");
    burger.setAttribute("aria-expanded", "true");
  } else {
    body.classList.remove("no-scroll");
    burger.setAttribute("aria-expanded", "false");
  }
}

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

const menuLinks = document.querySelectorAll(".navbar__item");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("navbar__menu--active")) {
      toggleMenu();
    }
  });
});

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (menu.classList.contains("navbar__menu--active")) return;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScrollY = currentScrollY;
});

document.addEventListener("click", (e) => {
  if (!menu.classList.contains("navbar__menu--active")) return;

  const clickedInsideMenu = menu.contains(e.target);
  const clickedBurger = burger.contains(e.target);

  if (!clickedInsideMenu && !clickedBurger) {
    toggleMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (menu.classList.contains("navbar__menu--active")) toggleMenu();
});


// Моб меню цвет текста надо поменять ⚠️
// Поствил пока белый цвет, но тоже как будто такое себе

// navbar mobile menu, navbar (header while scroll is transparrent) ⚠️

// Waves placement ⚠️

// ++++++++++++

// брур под гифкой слишком теплых тонов ⚠️

// about -> иконки и текст на мобилке. Перепроверить похожую секцию


// Hero img position

// sections sizes, margins, paddings decorative elements (all added?)

// Instructions section (cards)

// useful section glass card above title

// faq - js + btn

// Instructions missing wave

// RECHECK BUTTONS (remove spans, divs for btns)