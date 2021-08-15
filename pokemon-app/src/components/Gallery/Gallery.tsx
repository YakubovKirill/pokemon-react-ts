import Pokemons from './Pokemons';
import React from 'react';

import { getPokemonsLengthSelector } from '../../selectors';
import { useSelector } from 'react-redux';

import '../../styles/gallery.scss';

const NO_POKEMON_LABLE = 'We haven\'t pokemons for you, sorry';

const Gallery: React.FC = () => {
	const pokemonsLength: number = useSelector(getPokemonsLengthSelector);
	return (
		<div className='gallery'>
			{ pokemonsLength ? <Pokemons /> : <h1>{NO_POKEMON_LABLE}</h1> }
		</div>
	);
};

export default React.memo(Gallery);
