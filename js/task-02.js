'use strict';
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ulEl = document.querySelector('#ingredients');
const ulItemEl = document.createElement('li');

const foodMenu = ingredients.forEach(ingredient => {
  ulItemEl.textContent = ingredient;
  ulEl.appendChild(ulItemEl);
});

console.log(foodMenu);