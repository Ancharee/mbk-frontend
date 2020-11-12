(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });
    $('[data-toggle="offcanvas-list"]').on("click", function() {
      $('.sidebar-list-offcanvas').toggleClass('active')
      $('.main-panel').toggleClass('active');
    });
  });
})(jQuery);