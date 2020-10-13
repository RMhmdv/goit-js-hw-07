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


const foodMenu = ingredients.map(ingredient => {
  const ulItemEl = document.createElement('li');
  ulItemEl.textContent = ingredient;
  return ulItemEl;
});

ulEl.append(...foodMenu);

console.log(ulEl);