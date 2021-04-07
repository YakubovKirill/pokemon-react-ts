import { combineReducers } from "redux"

import { pokemonsReducer } from "./pokemons"

export const allReducers = combineReducers({
    pokemons: pokemonsReducer
})
