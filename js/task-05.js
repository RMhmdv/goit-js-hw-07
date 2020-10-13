'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const input = document.querySelector('#name-input');
console.log(input);
const nameLabel = document.querySelector('#name-output'); 

input.addEventListener('input', onInputChange);

const fn = function onInputChange(event) {
    nameLabel.textContent = event.currentTarget.value;
};
   return nameLabel.textContent = "незнакомец";
};

console.log(nameLabel);