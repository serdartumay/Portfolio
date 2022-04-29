const navBars = document.querySelector(".nav__bars");
const navBar = document.querySelector(".nav__navbar");
const NavBarsImage = document.querySelector(".nav__bars__image");
let typed = new Typed(".auto-type", {
  strings: [
    "",
    "Hello World",
    "I am Serdar Tumay",
    "I have been learning programming for 1.5 years",
    "Please visit my GitHub page to see my codes :)",
  ],
  typeSpeed: 125,
  backSpeed: 65,
  loop: true,
  showCursor: false,
});

navBars.addEventListener("click", function () {
  if (!navBar.classList.contains("nav__navbar--transition")) {
    NavBarsImage.src = "images/close.png";
  } else {
    NavBarsImage.src = "images/menu.png";
  }
  navBar.classList.toggle("nav__navbar--transition");
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (
    window.innerwidth >= 900 ||
    e.target.href !== "https://github.com/serdar87?tab=repositories"
  ) {
    e.preventDefault();
  }

  if (e.target.closest(".nav__link")) {
    if (window.innerWidth <= 900) {
      navBar.classList.toggle("nav__navbar--transition");
      NavBarsImage.src = "images/menu.png";
    }
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
