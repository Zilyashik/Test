'use strict'

$(document).ready(function() {
    $('.block__title').click(function (event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__item').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);

    });
});

$(document).ready(function() {
    $('.block__item').click(function (event) {
        $(this).toggleClass('active');
    });
});
