(function ($){
"use strict";

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: '<div class="slider-prev"><img src="img/shape/Shape_2.png"></div>',
        nextArrow: '<div class="slider-next"><img src="img/Arrow_left_2019-05-17/Arrow_left.png"></div>',
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

})(jQuery);

