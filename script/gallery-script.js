var wall = [["../image/wall1-cu-lao-xanh-quy-nhon.jpg","CÙ LAO XANH", "Quy Nhơn, Bình Định"],
        ["../image/wall2-hon-kho-quy-nhon.jpg","HÒN KHÔ", "Quy Nhơn, Bình Định"],
        ["../image/wall3-nha-tho-lang-song-tuy-phuoc.jpg","NHÀ THỜ LÀNG SÔNG", "Tuy Phước, Bình Định"],
        ["../image/wall4-chua-thien-hung-an-nhon.jpg","CHÙA THIÊN HƯNG","An Nhơn, Bình Định"],
        ["../image/wall5-bien-quy-nhon.jpg","BIỂN QUY NHƠN", "Quy Nhơn, Bình Định"],
        ["../image/wall6-eo-gio-quy-nhon.jpg","EO GIÓ QUY NHƠN","Quy Nhơn, Bình Định"],
        ["../image/wall7-bien-hoai-nhon.jpg","BIỂN TAM QUAN NAM","Hoài Nhơn, Bình Định"],
        ["../image/wall8-trung-luong-phu-cat.jpg","TRUNG LƯƠNG","Phù Cát, Bình Định"],
        ["../image/wall9-bien-quy-nhon.jpg","BIỂN QUY NHƠN", "Quy Nhơn, Bình Định"],
        ["../image/wall10-phu-my.jpg","SÔNG NƯỚC AN XUYÊN","Mỹ Chánh, Phù Mỹ, Bình Định"]];
var last = 0;

$(document).ready(function () {
    $('#slider-left').click(function () {
        $(".banner::before").addClass('hidden');
        $('.banner').animate({opacity: 0},'slow', function () {
            last = (last+9)%10;
            $(".banner")
                .css("background-image","url("+wall[last][0]+")")
                .animate({opacity: 1});
            $(".banner-content h1").text(wall[last][1]);
            $(".banner-content p").text(wall[last][2]);
        });
        $(".banner::before").removeClass('hidden');
    });
    $('#slider-right').click(function () {
        $(".banner::before").addClass('hidden');
        $('.banner').animate({opacity: 0},'slow', function () {
            last = (last+1)%10;
            $(".banner")
                .css("background-image","url("+wall[last][0]+")")
                .animate({opacity: 1});
            $(".banner-content h1").text(wall[last][1]);
            $(".banner-content p").text(wall[last][2]);
        });
        $(".banner::before").removeClass('hidden');
    });
});
