(function($) {
  'use strict';
  $(function() {
    $('.file-upload-default').on('change', function() {
      $(this).prev().html($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
  });
})(jQuery);
