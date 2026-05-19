// js/scripts.js
function initializeNavbar() {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}