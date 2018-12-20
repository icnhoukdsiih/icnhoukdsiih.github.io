$(window).on("load resize",function() {
    $("#main").removeClass("hidden");
    $(".row p").each(function () {
        var h = parseInt($(this).css("height"),10);
        var h1 = parseInt($(this).find("span").css("height"),10);
        $(this).find("span").css({"padding-top":((h1 < h)?(h-h1)/2:0)+"px"});
    });
    var h = parseInt($(".left-col").css("height"),10);
    var h1 = parseInt($(".right-col").css("height"),10);
    $(".right-col").css({"padding-top":((h1 < h)?(h-h1)/2:0)+"px"});
    $(".left-col").css({"padding-top":((h1 > h)?(h1-h)/2:0)+"px"});
});