const blinkIconUp = document.getElementById("iconUp");
const blinkIconDown = document.getElementById("iconDown");
// console.log(blinkIcon.className);

setInterval(function () {
  blinkIconUp.classList.toggle("opacity-50");
  blinkIconDown.classList.toggle("opacity-50");
}, 800);

// set the target element that will be collapsed or expanded (eg. navbar menu)
const targetEl = document.getElementById("targetEl");

// optionally set a trigger element (eg. a button, hamburger icon)
const triggerEl = document.getElementById("triggerEl");

// optional options with default values and callback functions
const options = {
  triggerEl: triggerEl,
  onCollapse: () => {
    console.log("element has been collapsed");
  },
  onExpand: () => {
    console.log("element has been expanded");
  },
  onToggle: () => {
    console.log("element has been toggled");
  },
};

const collapse = new Collapse(targetEl, options);

import Swiper from "./swiper";
// import Swiper styles
import "swiper/css";

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  cardsEffect: {
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(".owl-flas").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 5,
      nav: true,
      loop: true,
    },
  },
});
$(".owl-best").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 5,
      nav: true,
      loop: true,
    },
  },
});

$(".owl-testimonial").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});
