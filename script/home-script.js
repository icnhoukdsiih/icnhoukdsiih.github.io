$(document).on('click', 'a[href*=#]', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 400, function () {

    });
});

$(document).ready(function () {
    $("#ky-co").click(function () {
        window.open('html/ky-co.html');
    });
    $("#thap-banh-it").click(function () {
        window.open('html/thap-banh-it.html');
    });
    $("#mui-vi-rong").click(function () {
        window.open('html/mui-vi-rong.html');
    });
    $("#ghenh-rang").click(function () {
        window.open('html/ghenh-rang.html');
    });
});