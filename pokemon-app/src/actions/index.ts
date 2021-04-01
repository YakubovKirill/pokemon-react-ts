import { Pokemon } from "../types"

const addPokemon: any = (pokemon: Pokemon) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }
}  
export{}