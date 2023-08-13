$(document).ready(function() {
    $(".navigation-block").hover(
      function() {
        $(this).prevAll(".navigation-block").addClass("hovered");
      },
      function() {
        $(this).prevAll(".navigation-block").removeClass("hovered");
      }
    );
  });
