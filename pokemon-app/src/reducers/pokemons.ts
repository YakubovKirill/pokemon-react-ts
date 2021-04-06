import {Actions, Pokemon} from '../types'

const pokemonsReducer = (state: Pokemon[] = [], action: any): Pokemon[] => {
    switch (action.type) {
        case Actions.ADD_POKEMON_ARR:
            state = []
            state = [...action.payload]
            return state
        default:
            return state
    }
}

export {pokemonsReducer}