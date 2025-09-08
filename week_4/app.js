const recipeList = document.querySelector("ul");

//dynamically create elements and insert them into the document
const titleTag = document.createElement("h1");
titleTag.textContent = "Spaghetti Cabonara";

//create paragraph elements for recipe details
const timeTag = document.createElement("p");
timeTag.textContent = "Time: 30";
const cuisineTag = document.createElement("p");
cuisineTag.textContent = "Cuisine: Italian"
const ingredientListTag = document.createElement("ul");
const ingredientListElementTag = document.createElement("li");
ingredientListElementTag.textContent = "Get all ingredients";
ingredientListTag.appendChild(ingredientListElementTag);

//create ul element for list and li elements for list items
const stepListTag = document.createElement("ul");
const stepListElementTag = document.createElement("li");
stepListElementTag.textContent = "Do all the steps";
stepListTag.appendChild(stepListElementTag);

//create div to nest all tags inside :3
const recipe = document.createElement("div");
recipe.appendChild(titleTag)
recipe.appendChild(timeTag)
recipe.appendChild(cuisineTag)
recipe.appendChild(ingredientListTag)
recipe.appendChild(stepListTag)

//add recipe div to recipe list ul 
recipeList.appendChild(recipe)