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

// на макете нет тени как у тебя снизу на стекле с текстом

// на макете фиолетовый фон под картинкой Hero уходит вправо до края, у тебя закругляется и заканчивается

// сама картинка расположена иначе в сравнении с макетом 

// квадратики на "в 1 клик" поплыли

// 