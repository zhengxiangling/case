$(function() {
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    var $winswidth = $(window).width();
    if ($winswidth < 768) {
        $(".nav-effect-1 li").removeClass("hvr-sink");
    }
    if ($winswidth > 500) {
        $(".village-a > ul > li > p").css({ "float": "right" });
    }
})
