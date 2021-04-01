import {Pokemon} from '../types'

const pokemonsReducer = (state: Pokemon[] = [], action: any): Pokemon[] => {
    switch (action.type) {
        case 'ADD_POKEMON': 
            state.push(action.payload)
            return state
        default:
            return state
    }
}

export {pokemonsReducer}