'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

let data_num;

function showNavMenu(event) {
    if (data_num !== undefined) {
        closeNavMenu();
    }
    let num = getDataNum(event);
    console.log(typeof num, typeof data_num)

    if (num !== data_num) {
        data_num = num;

        show(['subMenu_' + num, 'black', 'fade', 'menu_link_' + num], true);
        return;
    }
    data_num = undefined;
}

function closeNavMenu() {
    show(['subMenu_' + data_num, 'black', 'fade', 'menu_link_' + data_num], false);
}

function show(idArray, show) {
    idArray.map(function (value) {
        let elem = document.getElementById(value);
        if (show) {
            elem.classList.add('move');
        } else {
            elem.classList.remove('move');
        }
    });
}

function getDataNum(event) {
    return event.target.attributes['data-num'].value;
}

$(document).ready(function () {
    $('.icon').click(function (event) {
        $('.icon').toggleClass('active');
        $('.fade').toggleClass('active');
        $('.menu__body').toggleClass('active');
    });

    $('.exit').click(function (event) {
        $('.icon').removeClass('active');
        $('.fade').removeClass('active');
        $('.menu__body').removeClass('active');
    });
});
