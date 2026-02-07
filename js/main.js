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

// абзац сразу под заголовком - чтобы тоже не оставляем в конце строки при переносе

// @mixin container - зачем ты захардкодил брейкпоинты? ⚠️

// "Делайте снимки и записывайте экран" - на макете вес больше, проверь ⏳

// Моб меню цвет текста надо поменять ⚠️
// Поствил пока белый цвет, но тоже как будто такое себе

// navbar mobile menu, navbar (header while scroll is transparrent) ⚠️

// Recording glass element ✅
// UPDATE MIXIN ⚠️

// Recording mixins ⚠️

// Recording margin-bottom is approximate ⚠️

// Waves placement

// Hero main img placement, move from border of the page

// ++++++++++++

// ширина текста в хиро секции

// картинка в хиро секции - проверь размеры и расположение, она ниже и левее чем должна быть

// текст "снимок экрана, записать видео и поделиться" и тд - в макете выглядит жирнее чем в верстке

// тот же абзац переносы и тд, проверь. Есть строгая логика в типографике и переносах, ты как будто забил на это дело

// то же самое в карточках - проверь переносы тескта

// брур под гифкой слишком теплых тонов

// все то же самое с текстом, что и ранее

// стрелка в конце хиро слева (кстати хз для чего она нужна) - проверь позиционирование, она в макете вровень с нижним краем фиолетового фона ✅

// гифка ландшафтная, не портретная ✅
