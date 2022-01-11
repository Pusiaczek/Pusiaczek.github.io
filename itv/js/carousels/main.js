(function () {
  "use strict";

  var mainCarousel = function () {
    $(".carousel-main-container").owlCarousel({
      loop: true,
      center: true,
      margin: 25,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      nav: false,
      dots: true,
      dotsEach: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
        },
        768: {
          items: 1,
          stagePadding: 100,
        },
        992: {
          items: 1,
          stagePadding: 100,
        }
      }
    });
  };

  (function ($) {
    mainCarousel();
  })(jQuery);
})();
