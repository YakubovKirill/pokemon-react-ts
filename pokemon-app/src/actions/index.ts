import { Pokemon } from "../types"

export const addPokemon: any = (pokemon: Pokemon) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }
}

export const addPokemonArr: any = (pokemonsArr: Pokemon[]) => {
    return {
        type: 'ADD_POKEMON_ARR',
        payload: pokemonsArr
    }
}