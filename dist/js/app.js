const blinkIconUp = document.getElementById('iconUp');
const blinkIconDown = document.getElementById('iconDown');
// console.log(blinkIcon.className);

setInterval(function(){
  blinkIconUp.classList.toggle('opacity-50')
  blinkIconDown.classList.toggle('opacity-50')
}, 800)


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

var swiper = new Swiper(".swiper-sale", {
  slidesPerView: 5,
        spaceBetween: 30,
        loop: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
var swiper = new Swiper(".swiper-Bestsale", {
  slidesPerView: 5,
        spaceBetween: 30,
        loop: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

