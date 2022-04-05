'use strict'

let emailReg = '\w*@\w*.\w*';

$(document).ready(function () {
    $('.email').on('input', function (event) {
        let value = event.target.value;
        let display;
        if (value.search(emailReg) === -1 && value.length > 0){
            display = 'block';
        } else {
            display = 'none';
        }
        document.getElementById('email__error').style.display = display;
    });
    $('.email').on('focusout', function () {
        document.getElementById('email__error').style.display = 'none';
    });
    $('.email').on('focusin', function (event) {
        let value = event.target.value;
        if (value.search(emailReg) === -1 && value.length > 0){
            document.getElementById('email__error').style.display = 'block';
        }});
});