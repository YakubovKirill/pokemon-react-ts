import { Actions, ActionType, Pokemon } from "../types"

export const addPokemonArr: ActionType = (pokemonsArr: Pokemon[] = []) => {
    return {
        type: Actions.ADD_POKEMON_ARR,
        payload: pokemonsArr
    }
}