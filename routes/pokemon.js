const express = require("express");

const pokemonRoute = express.Router()
const allPokemon = require("../data")

pokemonRoute.post("/add", (req,res) => {
    let list = allPokemon
    console.log(req)
    list.push(req.body)
    res.send(list)
})

pokemonRoute.delete("/:id", (req,res) => {
    let list = allPokemon
    list = list.filter(pokemon => {return (pokemon.id != req.params.id)})
    res.send(list)
})


exports.pokemonRoute = pokemonRoute