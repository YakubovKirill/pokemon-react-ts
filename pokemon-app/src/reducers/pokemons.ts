import {ACTIONS, Pokemon} from '../types';

const pokemonsReducer = (
	state: Pokemon[] = [], action: {type: ACTIONS, payload: Pokemon[]}): Pokemon[] => {
	switch(action.type) {
	    case ACTIONS.ADD_SAGA_POKEMON:
		    if (!action.payload) return state;
		    return action.payload;
	    default: return state;
	}
};

export {pokemonsReducer};
