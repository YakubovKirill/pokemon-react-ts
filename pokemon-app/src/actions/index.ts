import { Actions, ActionType, Pokemon } from "../types"

export const addPokemonArr = (pokemonsArr: Pokemon[] = []): ActionType => {
    return {
        type: Actions.ADD_POKEMON_ARR,
        payload: pokemonsArr
    }
}