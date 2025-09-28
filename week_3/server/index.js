//for cors
const cors = require('cors');

const express = require("express");
//for file reading
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors())
app.use(express.json())

const port = 3000;
const recipesFilePath = path.join(__dirname, 'recipes.json');

//create dummy apps to debug more easily :D

//req - request, res - response
app.get("/", (req, res) => {
    res.send("Hello from my homepage :3");
})

//.get => /route, (request, response)
app.get("/recipes", (req, res) => {
    //read json file => (path, text encoding, (potential errors, data upon success))
    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        //store json data as object
        const recipes = JSON.parse(data);

        //send json response
        res.json(recipes)
    });
})

app.post("/recipes", (req, res) => {

    const newRecipe = req.body
    console.log(newRecipe);

    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        //store json data as object
        const recipes = JSON.parse(data);

        //add new recipe to existing json file
        recipes.push(newRecipe)

        //write updated array to file
        fs.writeFile(recipesFilePath, JSON.stringify(recipes), () => { });

    });

    res.send("Recipe added :D");
})

//📝 WEEK 7 - DATA ANALYSIS
app.get("/cuisine-data", (req, res) => {
    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        const recipes = JSON.parse(data);
        const counts = recipes.reduce((accumulator, recipe) => {
            const cuisine = recipe.cuisine;
            if (accumulator[cuisine]) {
                accumulator[cuisine]++;
            } else {
                accumulator[cuisine] = 1;
            }
            return accumulator;
        }, {});
        console.log(counts)
        res.json(counts)
    });
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})