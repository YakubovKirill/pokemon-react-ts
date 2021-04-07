import { createSelector} from "reselect";
import { RootStateOrAny} from 'react-redux'
import { Pokemon } from "../types";

const selectAllPokemons = (state: RootStateOrAny) => state.pokemons

export const getAllPokemons = createSelector(
    selectAllPokemons,
    pokemons => pokemons
)

export const getPokemonByID = (id: number) => createSelector(
    selectAllPokemons,
    pokemons => pokemons.filter((pokemon: Pokemon) => {
        if (isNaN(id)) return pokemon.id === 0
        return pokemon.id === id
    })
)