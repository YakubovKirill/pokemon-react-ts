import axios from 'axios';
import { call, CallEffect, ForkEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { addPokemonAction } from '../actions';
import { ACTIONS, IInputPokemon, IInputPokemonsData, Pokemon, PokemonInput } from '../types';

const POKEMON_API_PATH = 'https://pokeapi.co/api/v2/pokemon';
const LIMIT = 100;
const START_FROM = 0;
const POKEMON_IMG_PATH = 'https://pokeres.bastionbot.org/images/pokemon/';

const firstLetterUpperCase = (word: string) => {
	const wordArr = word.split('');
	wordArr[0] = wordArr[0].toUpperCase();
	return wordArr.join('');
};

const getSinglePokemon = async (path: string) => {
	try {
		const pokemon: Pokemon = await axios.request({
			url: path,
			method: 'get',
			responseType: 'json',
			transformResponse: (response: IInputPokemon) => {
				return {
					abilities: response.abilities,
					baseExperience: response.base_experience,
					height: response.height,
					id: response.id,
					name: firstLetterUpperCase(response.name),
					stats: response.stats,
					types: response.types,
					weight: response.weight
				};
			}
		}).then(data => data.data);
		pokemon.image = `${POKEMON_IMG_PATH}${pokemon.id}.png`;
		return pokemon;
	}
	catch (error) {
		console.log(error);
	}
};

const getPokemon = async () => {
	try {
		const getPokemonsUrl = `${POKEMON_API_PATH}?limit=${LIMIT}&offset=${START_FROM}`;
		const pokemonsList: PokemonInput[] = await axios.request({
			url: getPokemonsUrl,
			method: 'get',
			responseType: 'json',
			transformResponse: (response: IInputPokemonsData) => response.results
		}).then(data => data.data);
		const pokemons1: Promise<Pokemon | undefined>[] = pokemonsList.map((elem) => 
			getSinglePokemon(elem.url).then((data) => data));
		const pokemons: Pokemon[] =
            await Promise.all(pokemons1).then(data => data) as Pokemon[];
		return pokemons;
	}
	catch (error) {
		console.log(error);
	}
};

export function* fetchPokemonAsync(): Generator<CallEffect<Pokemon[] | undefined> | PutEffect<{
        type: ACTIONS;
        payload: Pokemon[];
    }>, void, Pokemon[]> {
	try {
		const data: Pokemon[] = yield call(getPokemon);
		yield put(addPokemonAction(data));
	} catch (error) {
		console.log(error);
	}
}

export function* watchFetchPokemon(): Generator<ForkEffect<never>, void, unknown> {
	yield takeEvery(ACTIONS.FETCH_POKEMON, fetchPokemonAsync);
}


