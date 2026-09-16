/* Wally Wilson site script.
   Trimmed from the MegaOne freelancer demo: count-up (it comma-formats numbers),
   owl carousels and cube portfolio are removed with the sections that used them. */

$(window).on("load", function () {
    "use strict";
    $('.side-menu').removeClass('hidden');
    setTimeout(function () { $('.loader-bg').fadeOut(); }, 500);
});

jQuery(function ($) {
    "use strict";

    $(".scroll").on("click", function (event) {
        var target = $(this.hash);
        if (!target.length) { return; }
        event.preventDefault();
        $("html,body").animate({scrollTop: target.offset().top - 78}, 900);
    });

    function closeMenu() {
        $(".side-menu").removeClass("side-menu-active");
        $("#close_side_menu").fadeOut(200);
    }
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").addClass("side-menu-active");
        $("#close_side_menu").fadeIn(700);
    });
    $("#close_side_menu, #btn_sideNavClose, .side-nav .navbar-nav .nav-link").on("click", closeMenu);
});
