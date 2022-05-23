const blinkIconUp = document.getElementById("iconUp");
const blinkIconDown = document.getElementById("iconDown");
const btnHamburger = document.getElementById("btnHamburger");
const sidebar = document.getElementById("sidebar");
const open = document.getElementById("open");

window.onscroll = function () {
  const header = document.getElementById("navbar");
  const changedColor = document.getElementById("changedColor");
  const fixedHeader = header.offsetTop;

  if (window.pageYOffset > fixedHeader) {
    header.classList.add("stickyNavbar");
    changedColor.classList.add("changedColor");
    changedColor.classList.remove("xl:text-white");
    changedColor.classList.remove("text-gray-700");
    // header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("stickyNavbar");
    changedColor.classList.add("xl:text-white");
    changedColor.classList.add("text-gray-700");
    // header.classList.add("bg-transparent");
  }
};

btnHamburger.addEventListener("click", function () {
  sidebar.classList.toggle("left-[-100%]");
  sidebar.classList.toggle("left-[-2.5rem]");
  btnHamburger.classList.toggle("open");

  if (btnHamburger.classList.contains("open")) {
    btnHamburger.innerHTML = `
    <svg fill="currentColor" class="h-6 w-6 transition-all ease-in-out duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
    `;
    return;
  } else {
    btnHamburger.innerHTML = `
    <svg
    id="open"
    class="h-6 w-6 transition-all ease-in-out duration-300"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clip-rule="evenodd"
    ></path>
  </svg>
    `;
    return;
  }
});

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

// const collapse = new Collapse(targetEl, options);

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

$(".owl-flash").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
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
      items: 2,
      nav: true,
      loop: true,
    },
    1536: {
      items: 2,
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
  autoplayTimeout: 2000,
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
      items: 3,
      nav: true,
      loop: true,
    },
    1536: {
      items: 3,
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

$(".marquee").marquee({
  duration: 2900,
});

// Multi Language
var i18n = domI18n({
  selector: "[data-translatable]",
  separator: " // ",
  languages: ["id", "en"],
  defaultLanguage: "id",
  currentLanguage: "id",
});

let languange = document.querySelectorAll(".language");
languange.forEach(function (e) {
  e.addEventListener("click", function () {
    i18n.changeLanguage(this.getAttribute("data-lang-ref"));
    e.preventDefault();
  });
});
