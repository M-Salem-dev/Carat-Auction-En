// ==================================================
// Navbar
let menu = document.querySelector(".box-menu");
let listNav = document.querySelector(".box-list-link-nav-1");
menu.onclick = () => {
  listNav.classList.toggle("open");
};

// --------------------------------------
$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

// --------------------------------------
// let aboutOffsetTop = $("#about").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > 130) {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  } else {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  }
});

// ===========================================================================
$(document).ready(function () {
  $(".owl-product").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    lazyLoad: true,
    autoplayHoverPause: true,
    nav: true,

    rtl: true,

    responsive: {
      0: {
        items: 1.2,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      300: {
        items: 1.4,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      600: {
        items: 1.4,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      767: {
        items: 2,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      991: {
        items: 3,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});

// ===========================================================================
$(document).ready(function () {
  $(".owl-Brands").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    lazyLoad: true,
    autoplayHoverPause: true,
    nav: false,
    
    rtl: true,

    responsive: {
      0: {
        items: 2,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      600: {
        items: 3,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      700: {
        items: 3,
        nav: true,
        // center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      800: {
        items: 4,
        nav: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      1000: {
        items: 4,
        nav: true,
        center: true,
        
      },
      1000: {
        items: 5,
        nav: true,
        center: true,
        
      },
      1200: {
        items: 6,
        nav: true,
      },
    
    },
  });
});

// ===========================================================================
// swiper
var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 10,
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  rtl: true,

});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop: true,
  rtl: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// =================================================================================================
$(document).ready(function () {
  $("#btnLogIn").click(function () {
    $(".box-phone-login").hide();
    $(".box-otp-login").show();
  });
});