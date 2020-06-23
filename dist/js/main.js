$(document).ready(function(){
    $('.slider-back').slick({
        arrows: false,
        touchMove: false,
        asNavFor: '.slider-front',
        fade: true,
        // variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 1
    });

    $('.slider-front').slick({
        asNavFor: '.slider-back',
        centerMode: true,
    });

    $('.mark__plus').on('click', function(e) {
        e.preventDefault();
        $('.mark__active').css('visibility', 'visible');
        setTimeout(function(){
            $('.mark__active').css('visibility', 'hidden');
          }, 2500);
    })

    $('.header__burger').click(function () {
       $('.header__burger,.nav,.header').toggleClass('active');
    });
});