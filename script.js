$(document).ready(function() {
    $(".command-action").click(function() {
      var textElement = $(this).find(".command-text");
      var shevronIcon = $("#chevron-icon");
      var commandDetails = $(".command-details");
  
      if (textElement.text() === "показать") {
        textElement.text("скрыть");
        shevronIcon.css("transform", "rotate(180deg)");
        commandDetails.addClass("expanded");
      } else {
        textElement.text("показать");
        shevronIcon.css("transform", "rotate(0deg)");
        commandDetails.removeClass("expanded");
      }
    });
  });
  