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

// collapse.expand();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 100,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
