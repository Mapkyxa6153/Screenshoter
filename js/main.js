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

// @mixin container - зачем ты захардкодил брейкпоинты?

// "Делайте снимки и записывайте экран" - на макете вес больше, проверь ⏳

// контент время от времени уехжает влево, скрин - Screenshot at Jan 21 02-14-38.png, закинул в корень, потом удали ✅

// начнем с визуала, заголовок, "Делайте снимки и записывайте экран" - когда ты переносишь заголовки, ты не заканчиваешь строку на "и", ты переносишь и начинаешь с "и" новую строку ✅

// "в 1 клик" - не корректное выравнивание, в макете выравнивание по тексту, а не по краю рамки ✅

// надпись "Screenshoter+" - шрифт не тот (написание буквы "с" например посмотри), межбуквенное расстояние и вес скорее всего тоже не то ✅

// цветная линия, она не должна начинаться с ничего, она начинается от края экрана ✅

// _hero.scss - в .highlight before и after почти повторяют друг друга, можно сократить код, объединив их через запятую, и отдельно наисать только то, что отличается ✅

// тот "в 1 клик", у тебя квадратики кривые. причем все по-разному. Левые выехали за пределы рамки почти, средние под рамкой и не видны, а должны быть поровну на обе стороны, правые тоже съехали ✅

// flex-direction: row можно не писать, это значение по умолчанию ✅

// .logo__title - дважды указан размер шрифта ✅

// .logo__subtitle - вес захардкожен, вместо указания переменной ✅

// "Бесплатная программа для Windows" - межстрочное расстояние не то, проверь ✅

// navbar_item - на мой взгляд в макете вес больше, проверь ✅ 500 и по проекту, и по макету 🤷🏼‍♂️ ⚠️

// _fonts.scss - ты пропустил коммент, я тебе для этого пприсылал скрин чтобы ты проверил, внимательнее  ✅
