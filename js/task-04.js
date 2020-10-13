'use strict';
const counterEl = document.querySelector('#counter');
const spanValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
// const counterValue = Number(spanValue.textContent);
let counterValue = 0;

incrementBtn.addEventListener('click', onBtnIncrement);
decrementBtn.addEventListener('click', onBtnDecrement);

function onBtnIncrement(event) {
    counterValue += 1;
    spanValue.textContent = counterValue;
};

function onBtnDecrement(event) {
    counterValue -= 1;
    spanValue.textContent = counterValue;
};
