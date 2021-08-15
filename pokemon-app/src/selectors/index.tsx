import { createSelector, OutputSelector} from "reselect";
import { RootStateOrAny} from 'react-redux';
import { Pokemon } from "../types";

const selectAllPokemonsSaga = (state: RootStateOrAny) => state.pokemons;

export const getAllPokemonsSelector = createSelector(
	selectAllPokemonsSaga,
	pokemons => pokemons
);

export const getPokemonByIDSelector = (id: number): 
	OutputSelector<Pokemon, Pokemon, (res: Pokemon) => Pokemon> => createSelector(
	selectAllPokemonsSaga,
	pokemons => pokemons.find((pokemon: Pokemon) => {
		if (isNaN(id)) return pokemon.id === 0;
		return pokemon.id === id;
	})
);

export const getPokemonsLengthSelector = createSelector(
	selectAllPokemonsSaga,
	pokemons => pokemons.length
);
