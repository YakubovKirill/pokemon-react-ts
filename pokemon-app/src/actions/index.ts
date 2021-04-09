import { ACTIONS, Pokemon } from "../types";

export const addPokemonAction = (data: Pokemon[]): {
		type: ACTIONS;
		payload: Pokemon[];
	} => {
	return {
		type: ACTIONS.ADD_SAGA_POKEMON,
		payload: data
	};
};

export const fetchPokemon = (): {type: string} => {
	return {
		type: ACTIONS.FETCH_POKEMON
	};
};
