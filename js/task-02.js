const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElemRef = document.querySelector('#ingredients')

console.log(listElemRef)

const addIngredients = ingredients.map(ingredient => {
  console.log(ingredient)

  const newIngredients = document.createElement('li');

  newIngredients.textContent = ingredient;
// console.log(newIngredients)
  return newIngredients
})



listElemRef.append(...addIngredients)

// console.log(listElemRef)
