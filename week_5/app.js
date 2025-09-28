//make request
document.addEventListener("DOMContentLoaded", async () => {
    //capture response
    const response = await fetch("http://localhost:3000/recipes");

    //convert to js
    const recipes = await response.json();
    console.log(recipes);

    //loop through recipes
    for (let recipe of recipes) {
        console.log(recipe);

        //create html component
        const recipeContainer = document.createElement("div");

        //populate text
        //heading
        const nameTag = document.createElement("h3");
        nameTag.innerText = `📜 ${recipe.name}`
        recipeContainer.appendChild(nameTag);
        //cuisine + tags
        const cuisineTag = document.createElement("p");
        cuisineTag.innerText = `🗺️ ${recipe.cuisine}`;

        recipeContainer.appendChild(cuisineTag);

        const timeTag = document.createElement("p");
        timeTag.innerText = `⏲️ ${recipe.time}`;

        recipeContainer.appendChild(timeTag);

        const ingredientListTag = document.createElement("ul");

        recipeContainer.appendChild(document.createElement("br"));

        const ingredients = document.createElement("h4");
        ingredients.innerText = "Ingredients";
        recipeContainer.appendChild(ingredients);

        for (let ingredient of recipe.ingredients) {
            const ingredientListItemTag = document.createElement("li");
            ingredientListItemTag.innerText = ingredient;
            ingredientListTag.appendChild(ingredientListItemTag);
        }

        recipeContainer.appendChild(ingredientListTag);

        recipeContainer.appendChild(document.createElement("br"));

        recipeContainer.appendChild(document.createElement("hr"));

        const stepsListTag = document.createElement("ol");

        const steps = document.createElement("h4");
        steps.innerText = "Steps";
        recipeContainer.appendChild(steps);

        for (let step of recipe.steps) {
            const stepsListItemTag = document.createElement("li");
            stepsListItemTag.innerText = step;
            stepsListTag.appendChild(stepsListItemTag);
        }

        recipeContainer.appendChild(stepsListTag);

        //append recipe to webpage
        const recipeList = document.querySelector("#recipe-list")
        recipeList.appendChild(recipeContainer);
    }

    //week 7
    const cuisineDataResponse = await fetch("http://localhost:3000/cuisine-data");
    const cuisineData = await cuisineDataResponse.json();

    const xValues = Object.keys(cuisineData);
    const yValues = Object.values(cuisineData);
    const colours = [
        "#6a9c89", "#568b83", "#467a7c", "#3b6972", "#345966", "#2f4858",
    ]

    new Chart("cuisineDataChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [
                {
                    data: yValues,
                    backgroundColor: colours
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: "Cuisine Popularity"
            }
        }
    }
    )
})

const newRecipeForm = document.querySelector("form");

newRecipeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRecipe = {};
    newRecipe.name = event.target.name.value;
    newRecipe.cuisine = event.target.cuisine.value;
    newRecipe.time = event.target.time.value;
    const ingredients = event.target.ingredients.value.split(/\r?\n/);
    newRecipe.ingredients = ingredients;
    const steps = event.target.steps.value.split(/\r?\n/);
    newRecipe.steps = steps;

    fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    })
})