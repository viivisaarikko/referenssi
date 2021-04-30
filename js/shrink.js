jQuery(document).ready(function($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) { 
            $('.ylapalkki').addClass('shrink');
        }
        else{
            $('.ylapalkki').removeClass('shrink');
        }
    });
});