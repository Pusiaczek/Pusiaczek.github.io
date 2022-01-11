(function () {
  "use strict";

  var tucCarousel = function () {
    $(".tuc-container").owlCarousel({
      loop: true,
      center: true,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      stagePadding: 15,
      nav: false,
      dots: false,
      dotsEach: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          margin: 50

        },
        992: {
          items: 3,
          margin: 20
        }
      }
    });
  };

  (function ($) {
    tucCarousel();
  })(jQuery);
})();
