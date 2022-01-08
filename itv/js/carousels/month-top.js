(function () {
  "use strict";

  var monthTopCarousel = function () {
    $(".month-top-container").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      nav: false,
      dots: false,
      dotsEach: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        992: {
          items: 5,
        }
      }
    });
  };

  (function ($) {
    monthTopCarousel();
  })(jQuery);
})();
