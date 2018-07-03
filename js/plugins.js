//resize carousal screen view
//
$(function () {

    'use strict';
    var winh = $(window).height(),
            //            upperh = $('.before-nav').innerHeight(),
            //            searchh =$('.search').innerHeight(),
        navh = $('.main-nav').innerHeight();
        //        if (screen.width >= 600) {
    $('.carousel').height(winh - navh);
        //        }
    $('.carousel').carousel({
        interval: 5000
    });



        //    ----------------

        //Transperent NAVBAR
    function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

            if ($(window).scrollTop() > startY) {
                $('.navbar').addClass("scrolled");
            } else {
                $('.navbar').removeClass("scrolled");
            }
        }

        if ($('.navbar').length > 0) {
            $(window).on("scroll load resize", function () {
                checkScroll();
            });
        }


        var typed = new Typed('.typing', {
            strings: ["SMOOTH DESIGN", "MORE RESPONSIVE", "AWESOME DESIGN"],
            typeSpeed: 20,
            backSpeed: 0,
            fadeOut: true,
            loop: false,
        });







    })
    //    //------------------

$('.tabs li').click(function () {

    $(this).addClass('selected').siblings().removeClass('selected');
    $('.work .section > div').hide();
    $('.' + $(this).data('class')).show();
    //        window.console.log($(this).data('class'));
});

//-----------OWN SLIDER-------------------------------------------
