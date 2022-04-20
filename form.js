'use strict';

let formName = document.querySelector('#name');
let regExpName = /[\w\d]+|(\d+\w+)/ig ;

formName.addEventListener('input', function (evt) {
    if (formName.validity.tooShort) {
        formName.setCustomValidity('Имя должно состоять минимум из двух букв');
        formName.classList.add('form--invalid');
    } else if (formName.validity.tooLong) {
        formName.setCustomValidity('Имя не должно превышать 10 букв');
        formName.classList.add('form--invalid');
    } else if (formName.validity.valueMissing) {
        formName.setCustomValidity('Обязательное поле');
        formName.classList.add('form--invalid');
    } else if (regExpName.test(formName.value)) {
        
        formName.setCustomValidity('Имя должно состоять из русских букв и не должно содержать цифры');
        formName.classList.add('form--invalid');
    } else {
        formName.setCustomValidity('');
        formName.classList.remove('form--invalid');
    }
})

let formTel = document.querySelector('#tel');
let regExpTel = /^\+7\(\d{3}\)\d{3}\-\d{4}$/;

formTel.addEventListener('input', function (evt) {
    if (!regExpTel.test(formTel.value)) {
        formTel.setCustomValidity('Введите, телефон в формате +7(000)000-0000');
        formTel.classList.add('form--invalid');
    }  else {
        formTel.setCustomValidity('');
        formTel.classList.remove('form--invalid');
    }
})


let formEmail = document.querySelector('#email');
let regExpEmail = /my[\.-]?mail@mail\.ru/i; 

formEmail.addEventListener('input', function (evt){
    if (!regExpEmail.test(formEmail.value)) {
        formEmail.setCustomValidity('Введите email в формате: "my.mail@mail.ru" или "mymail@mail.ru" или "my-mail@mail.ru" ');
        formEmail.classList.add('form--invalid');
    }  else {
        formEmail.setCustomValidity('');
        formEmail.classList.remove('form--invalid');
    }
})