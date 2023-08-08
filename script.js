$(document).ready(function() {
    $(".command-action").click(function() {
        var textElement = $(this).find(".command-action-text");
        var shevronIcon = $("#chevron-icon");
        var commandList = $(".command-list");

        if ($(event.target).closest('.command-block-url').length === 0) {
            $(".command-list").toggleClass("expanded");
        }
        
        if (textElement.text() === "показать") {
            textElement.text("скрыть");
            shevronIcon.css("transform", "rotate(180deg)");
            commandList.addClass("expanded");
        }

        else {
            textElement.text("показать");
            shevronIcon.css("transform", "rotate(0deg)");
            commandList.removeClass("expanded");
        }
    });

    $(".command-block-url").click(function() {
        var link = $(this).data("link");
        window.location.href = link;
    });
});
