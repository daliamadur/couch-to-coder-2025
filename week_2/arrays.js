//denoted in square brackets, accessed using zero indexing
const ingredients = ["chicken", "butter", "salt", "pepper"]

console.log(ingredients[0]) //📤 chicken
console.log(ingredients[2]) //📤 salt

console.log(ingredients[9]) //📤 undefined (out of bounds)

//objects and array contents defined with const can have their contents modified :D
ingredients[0] = "tofu"
console.log(ingredients) //updates even though ingredients is const


console.log(ingredients.length) //📤 4

ingredients.push("cheese") //adds element to end of array
console.log(ingredients)

const removedIngredient = ingredients.pop() //removes last element + returns
console.log(ingredients)
console.log(removedIngredient) //📤 cheese