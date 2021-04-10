(function($) {
  'use strict';
  $(function() {
    $(document).on('change', '.file-upload-default', function () {
      $(this).prev().html($(this).val().replace(/C:\\fakepath\\/i, ''));
    });

    $(document).on('click', '.file-upload-default-delete', function () {
      const parent = $(this).parents('.form-group');
      parent.find('input').val(null);
      parent.find('label').html('');
    });
  });
})(jQuery);
