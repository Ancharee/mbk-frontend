(function($) {
  'use strict';
  $(function() {

    $('.circle').circleProgress({
      size: 84,
      thickness: 8,
      startAngle: -Math.PI / 4 * 3,
      lineCap: 'round',
    });

  });
})(jQuery);