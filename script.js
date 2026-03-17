AOS.init({
  duration: 1000,
  once: true,
});

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const faq = document.querySelectorAll(".faq-item");

faq.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
/* ANIMAÇÃO AO SCROLL */

AOS.init({
  duration: 1000,
  once: true,
});

/* MENU HAMBURGUER */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
/* ===================== */
/* NAVBAR SCROLL EFFECT */
/* ===================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ===================== */
/* SLIDER CORRIGIDO */
/* ===================== */

const slider = document.querySelector(".depoimentos-grid");

let scrollPosition = 0;

// GARANTE QUE COMEÇA DO INÍCIO
window.addEventListener("load", () => {
  if (slider) {
    slider.scrollLeft = 0;
  }
});

setInterval(() => {
  if (!slider) return;

  scrollPosition += 250;

  if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
    scrollPosition = 0;
  }

  slider.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
}, 4000);

setInterval(autoSlide, 4000);
const sobreTexto = document.querySelector(".sobre-texto");

function animarSobre() {
  if (!sobreTexto) return;

  const trigger = window.innerHeight * 0.85;
  const top = sobreTexto.getBoundingClientRect().top;

  if (top < trigger) {
    sobreTexto.classList.add("ativo");
  }
}

window.addEventListener("scroll", animarSobre);
window.addEventListener("load", animarSobre);

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});
