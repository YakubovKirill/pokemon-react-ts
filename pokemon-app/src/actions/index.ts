import { Pokemon } from "../types"
import axios from 'axios'

export const addPokemon: any = (pokemon: Pokemon) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }
}

export const addPokemonArr: any = (pokemonsArr: any[]) => {
    return {
        type: 'ADD_POKEMON_ARR',
        payload: pokemonsArr
    }
}

export const getPokemonsFormServer: any = (url: string, count: number, offset: number) => {
    return (dispatch: any) => {
        axios.get(url)
        .then((data) => {
            dispatch(addPokemonArr(data.data.results))
        })
    }
}