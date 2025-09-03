const express = require("express");
//for file reading
const fs = require('fs');
const path = require('path');

const app = express();
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
    fs.readFile(recipesFilePath, 'utf8', (err, data))

    //store json data as object
    const recipes = JSON.parse(data);

    //send json response
    res.json(recipes)
})

app.post("/recipes", (req, res) => {
    res.send("Recipe added :D");
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})