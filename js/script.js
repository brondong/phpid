(function($) {

  $(".menu").click(function()
  {
    var icon = $(this).find(".glyphicon");

    if (icon.hasClass("glyphicon-chevron-right"))
    {
      icon
        .removeClass("glyphicon-chevron-right")
        .addClass("glyphicon-chevron-down")
    }
    else
    {
      icon
        .removeClass("glyphicon-chevron-down")
        .addClass("glyphicon-chevron-right")
    };
  });

})(jQuery);