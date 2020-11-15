$(document).ready(function () {
  calcWidth($("#title0"));

  function calcWidth(obj) {

    var titles = $(obj).siblings(".space").children(".route").children(".item");

    $(titles).each(function (index, element) {
      var pTitleWidth = parseInt($(obj).css("width"));
      var leftOffset = parseInt($(obj).siblings(".space").css("padding-left"));

      var newWidth = pTitleWidth - leftOffset;

      if ($(obj).attr("id") == "title0") {

        newWidth = newWidth - 10;
      }

      $(element).css({
        width: newWidth,
      });

      calcWidth(element);
    });
  }

  const space$ = $(".space");
  if (space$.length) {
    $(".space").sortable({
      connectWith: ".space",
      handle: '.toolbar-right__item--sort',
      placeholder: '.......',
      tolerance: "intersect",
      receive: function (event, ui) {
        calcWidth($(this).siblings(".item"));
      },
    });

    // $(".space").disableSelection();

    $('.pell-content').click(function () {
      console.log('click editor')
    })
  }

});
