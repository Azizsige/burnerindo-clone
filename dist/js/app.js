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

const swiper = new Swiper(".mySwiper", {
  effect: "cards",
  lazy: true,
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
    1024: {
      items: 5,
      nav: true,
      loop: true,
    },
    1280: {
      items: 5,
      nav: true,
      loop: true,
    },
    1536: {
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
    1080: {
      items: 5,
      nav: true,
      loop: true,
    },
    1280: {
      items: 5,
      nav: true,
      loop: true,
    },
    1536: {
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
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// $("#demo").marquee({
//   allowCss3Support: true,
//   css3easing: "linear",
//   easing: "linear",
//   delayBeforeStart: 1000,
//   direction: "right",
//   duplicated: true,
//   duration: 1000,
//   gap: 20,
//   pauseOnCycle: false,
//   pauseOnHover: false,
//   startVisible: false,
// });

$("#demo").marquee({
  direction: "left",
  duplicated: false,
  duration: 2900,
  pauseOnCycle: false,
  pauseOnHover: true,
  startVisible: true,
});
