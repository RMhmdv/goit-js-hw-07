'use strict';
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
    

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
const numberCharacters = input.dataset.length; 

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (input.value.length == numberCharacters) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        return
    } if (input.value.length === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    }
    if (input.value.length !== numberCharacters && input.value.length !== 0) {
        input.classList.add("invalid");
    } 
};

