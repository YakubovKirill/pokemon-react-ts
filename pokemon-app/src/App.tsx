import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import PokemonPage from './components/PokemonPage/PokemonPage';
import { IInputPokemon, IInputPokemonsData, Pokemon, PokemonInput } from './types';
import { addPokemonArr } from './actions';

import './styles/mainStyle.scss';
import './styles/footer.scss';

const LIMIT = process.env.REACT_APP_LIMIT;
const START_FROM = process.env.REACT_APP_START_POKEMONS_FROM;
const HOME_PAGE_PATH = process.env.REACT_APP_PATH_DEFAULT;
const POKEMON_ID_PATH = process.env.REACT_APP_POKEMON_ID_PATH;
const POKEMON_API_PATH = process.env.REACT_APP_PATH_POKEMON_API;
const POKEMON_IMG_PATH = process.env.REACT_APP_PATH_POKEMON_IMAGE;

function App() {
	const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
	const dispatch = useDispatch();
	const firstLetterUpperCase = (word: string) => {
		const wordArr = word.split('');
		wordArr[0] = wordArr[0].toUpperCase();
		return wordArr.join('');
	};

	useEffect(() => {
		const getPokemonsUrl = `${POKEMON_API_PATH}?limit=${LIMIT}&offset=${START_FROM}`;
      
		// Clear array of previous version
		setPokemons([]);

		// get all pokemons from API
		axios.request({
			url: getPokemonsUrl,
			method: 'get',
			responseType: 'json',
			transformResponse: (response: IInputPokemonsData) => response.results
		}).then((data) => {
			const pokemonsArr: PokemonInput[] = data.data;

			// get information about every pokemon
			pokemonsArr.forEach((pokemon: PokemonInput) => {
				axios.request({
					url: pokemon.url,
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
				}).then((data) => {
					const currentPokemon: Pokemon = {
						...data.data,
						image: `${POKEMON_IMG_PATH}${data.data.id}.png`
					};
					setPokemons((prev: Pokemon[]) => [...prev, currentPokemon]);
				});
			});
		});
	}, []);

	useEffect(() => {
		// Put all pokemons to redux store
		dispatch(addPokemonArr(pokemons));
	}, [pokemons, dispatch]);

	return (
		<Router>
			<div className='f-c'>
				<div className='wrapper'>
					<Header />
					<div className='content f-c'>
						<Switch>
							<Route path={HOME_PAGE_PATH} exact component={Gallery} />
							<Route path={POKEMON_ID_PATH} exact component={PokemonPage} />
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default connect()(App);
