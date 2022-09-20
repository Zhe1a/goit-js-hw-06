const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = document.querySelector('#ingredients');

const listName = ingredients.map(value => {
const elements = document.createElement("li");
elements.classList.add('item');
elements.textContent = value;
return elements;
})
items.append(...listName)