(function () {
  "use strict";

  var carousels = function () {
    $(".carousel-main-container").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
        },
        768: {
          items: 1,
          stagePadding: 100,
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
