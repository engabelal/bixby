//resize carousal screen view
//
$(function () {

    'use strict';


    $('.tabs li').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');
        //        $('.work .section > div').hide();
        //        $('.' + $(this).data('class')).show();
        window.console.log($(this).data('class'));
    });


});





