const express = require("express");

const PORT = 4000;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send(allPokemon)
})

app.get("/pokemon/:id", (req, res) => {
    let filtered = allPokemon.filter(pokemon => {return (pokemon.id == req.params.id)})
    res.send(filtered)
})


app.get("/search", (req, res) => {
    let filtered = allPokemon
    if (req.query.name) {
        filtered = filtered.filter(pokemon => {return pokemon.name === req.query.name})
    }
    if (req.query.type) {
        filtered = filtered.filter(pokemon => {return pokemon.types.includes(req.query.type)})
    }
    res.send(filtered)
})

app.post("/add", (req,res) => {
    let list = allPokemon
    console.log(req)
    list.push(req.body)
    res.send(list)
})

app.delete("/pokemon/:id", (req,res) => {
    let list = allPokemon
    list = list.filter(pokemon => {return (pokemon.id !== req.params.id)})
})

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
