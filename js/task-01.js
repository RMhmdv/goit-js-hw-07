'use strict';
const itemEl = document.querySelectorAll(".item");
console.log(`В списке ${itemEl.length} категории.`);
const categoriesAr = [...itemEl].map(
categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`).join("\n");
console.log(categoriesAr);


