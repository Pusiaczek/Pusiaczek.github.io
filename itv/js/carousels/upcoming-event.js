(function () {
  "use strict";

  var upcomingEventCarousel = function () {
    $(".upcoming-event-list").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: false,
      nav: false,
      dots: true,
      dotsEach: true,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      autoHeight: true,
      items: 1
      
    });
  };

  (function ($) {
    upcomingEventCarousel();
  })(jQuery);
})();
