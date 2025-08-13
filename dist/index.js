const preloader = document.querySelector('#preloader');
const nav = document.querySelector('#top');
const navContent = document.querySelector('#top-content');
const orderBtn = document.querySelector('#order_btn');
const logo = document.querySelector('#logo');
const logo2 = document.querySelector('#logo_two');
const menuIcon = document.querySelector('#menu_icon');
const menu = document.querySelector('#menu');

//Preloader
window.addEventListener('load', () => {
  preloader.style.display = "none";
})

//Scroll Effect
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-change', window.scrollY > 0);
  if (nav.classList.contains("nav-change")) {
    navContent.classList.add("nv-cntnt-chng");
    orderBtn.classList.add("change-b-color");
    logo.classList.add("hidden");
    logo2.classList.remove("hidden");
  } else {
    navContent.classList.remove("nv-cntnt-chng");
    orderBtn.classList.remove("change-b-color")
    logo2.classList.add("hidden");
    logo.classList.remove("hidden");
  }
});

//Navbar Effect 
menuIcon.addEventListener('click', () => {
  // menu.classList.toggle("max-960:hidden");
  menu.classList.toggle("max-960:w-0");
  menu.classList.toggle("max-960:opacity-0");
  menu.classList.toggle("max-960:pointer-events-none");
  menu.classList.toggle("menu_show");
});

window.addEventListener('scroll', () => {
  // menu.classList.add("max-960:hidden");
  menu.classList.add("max-960:w-0");
  menu.classList.add("max-960:opacity-0");
  menu.classList.add("max-960:pointer-events-none");
  menu.classList.remove("menu_show");
});

// nav.classList.toggle('show', window.scrollY > 0);
// search.classList.remove("show");
// navbar.classList.remove("show");