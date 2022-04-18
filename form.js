'use strict';

let formName = document.querySelector('#name');
let regExpName = /[\w\d]+|(\d+\w+)/ig ;

formName.addEventListener('input', function (evt) {
    if (formName.validity.tooShort) {
        formName.setCustomValidity('Имя должно состоять минимум из двух букв');
    } else if (formName.validity.tooLong) {
        formName.setCustomValidity('Имя не должно превышать 10 букв');
    } else if (formName.validity.valueMissing) {
        formName.setCustomValidity('Обязательное поле');
    } else if (regExpName.test(formName.value)) {
        formName.setCustomValidity('Имя должно состоять из русских букв и не должно содержать цифры');
    } else {
        formName.setCustomValidity('');
    }
})

let formTel = document.querySelector('#tel');
let regExpTel = /^\+7\(\d{3}\)\d{3}\-\d{4}$/;

formTel.addEventListener('input', function (evt) {
    if (!regExpTel.test(formTel.value)) {
        formTel.setCustomValidity('Введите, телефон в формате +7(000)000-0000')
    }  else {
        formTel.setCustomValidity('');
    }
})


let formEmail = document.querySelector('#email');
let regExpEmail = /my[\.-]?mail@mail\.ru/i; 

formEmail.addEventListener('input', function (evt){
    if (!regExpEmail.test(formEmail.value)) {
        formEmail.setCustomValidity('Введите email в формате: "my.mail@mail.ru" или "mymail@mail.ru" или "my-mail@mail.ru" ')
    }  else {
        formEmail.setCustomValidity('');
    }
})