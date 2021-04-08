import { ACTIONS, ActionType, Pokemon } from "../types";

export const addPokemonArr = (pokemonsArr: Pokemon[] = []): ActionType => {
	return {
		type: ACTIONS.ADD_POKEMON_ARR,
		payload: pokemonsArr
	};
};
