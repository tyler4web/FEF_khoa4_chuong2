// Service Carousel
$(".service__carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 3,
    },
    950: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

// CAROUSEL 2
$(".review__carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".project__carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
