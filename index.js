const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const social = document.querySelector("div.social ul");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const landing = document.querySelector(".landing");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  line1.classList.toggle("changeShape1");
  line2.classList.toggle("changeShape2");
  line3.classList.toggle("changeShape3");

  //   setTimeout(() => landing.classList.toggle("disapear"), 250);

  navLinks.classList.toggle("open");
  nav.classList.toggle("changeColor");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  if (window.innerHeight > 500) {
    social.classList.toggle("atbottom");
  } else return;
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 800) {
      line1.classList.toggle("changeShape1");
      line2.classList.toggle("changeShape2");
      line3.classList.toggle("changeShape3");
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    }
  });
});
