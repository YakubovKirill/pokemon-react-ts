import { combineReducers } from "redux"
import { pokemonsReducer } from "./pokemons"

const allReducers = combineReducers({
    pokemons: pokemonsReducer
})
export {allReducers}