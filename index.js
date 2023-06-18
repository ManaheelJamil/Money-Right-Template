const mobile_nav = document.querySelector(".toggle-bar");
const header_nav = document.querySelector(".header");

const toggleNavbaropen = () => header_nav.classList.add("active");

mobile_nav.addEventListener("click", toggleNavbaropen);
const mobile_nav2 = document.querySelector(".cross-icon");
const header_nav2 = document.querySelector(".header");

const toggleNavbarclose = () => header_nav2.classList.remove("active");

mobile_nav2.addEventListener("click", toggleNavbarclose);
