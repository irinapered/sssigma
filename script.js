$(document).ready(function() {
    $(".commands").click(function() {
      $(this).parent().find(".command-details").toggleClass("show-menu");
    });
  });
  
