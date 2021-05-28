import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPokemonByIDSelector, getPokemonsLengthSelector } from '../../selectors';
import { AbilityType, Pokemon, PokemonStat, PokemonType } from '../../types';

import '../../styles/aboutPage.scss';

const LABLES = {
	NO_POKEMON_MESSAGE: 'We have not this pokemon',
	STATS_LABEL: 'Stats',
	PARAMETRES_LABEL: 'Parametres',
	WEIGHT_LABEL: 'Weight',
	HEIGHT_LABEL: 'Height',
	BASE_EPIRIENCE_LABEL: 'Base expirience'
} as const;

const PokemonPage: React.FC = () => {
	const { id }: { id: string } = useParams();
	const numberId = Number(id);
	const currentPokemon: Pokemon = useSelector(getPokemonByIDSelector(numberId));
	const pokemonsCount: number = useSelector(getPokemonsLengthSelector);

	// Create array with tpes elements
	const typesElementsArr: JSX.Element[] | undefined = useMemo(() => {
		if (currentPokemon)
			return currentPokemon.types.map((type: PokemonType) => {
				return (
					<div key={type.type.name} className='type'>
						<span>{type.type.name}</span>
					</div>
				);
			});
	}, [currentPokemon]);

	// Create array with abilities elements
	const abilitiesElementsArr: JSX.Element[] | undefined = useMemo(() => {
		if (currentPokemon)
			return currentPokemon.abilities.map((ability: AbilityType) => {
				return (
					<div key={ability.ability.name} className='ability'>
						<span>{ability.ability.name}</span>
					</div>
				);
			});
	}, [currentPokemon]);

	// Create array with stats elements
	const statsElementsArr: JSX.Element[] | undefined = useMemo(() => {
		if (currentPokemon)
			return currentPokemon.stats.map((stat: PokemonStat) => {
				const statFieldStyle = {
					width: `${stat.base_stat * 2}px`
				};
				return (
					<div key={stat.stat.name}>
						<div className='info-text'><span>{stat.stat.name}</span></div>
						<div className='stat-wrap'>
							<div style={statFieldStyle} className='stat-field'></div>
							<span>{stat.base_stat}</span>
						</div>
					</div>
				);
			});
	}, [currentPokemon]);

	useEffect(() => {
		window.scrollTo({top: 0});
	}, []);

	if ( !pokemonsCount || !currentPokemon) return (
		<div className='about f-c'>
			<h1>{LABLES.NO_POKEMON_MESSAGE}</h1>
		</div>
	);

	return (
		<div className='about'>
			<div className='pokemon-header f-c'><span>{currentPokemon.name}</span></div>
			<div className='abilities f-c'>
				{typesElementsArr}
			</div>
			<div className='pokemon-image'>
				<div className='img-wrap f-c'>
					<img src={currentPokemon.image} alt={currentPokemon.name} />
				</div>
			</div>
			<div className='abilities f-c'>
				{abilitiesElementsArr}
			</div>

			<div className='info f-c'>
				<div className='info-block'>
					<div className='info-header f-c'><span>{LABLES.STATS_LABEL}</span></div>
					{statsElementsArr}
				</div>
				<div className='info-block'>
					<div className='info-header f-c'><span>{LABLES.PARAMETRES_LABEL}</span></div>
					<table>
						<tbody>
							<tr>
								<td>{LABLES.WEIGHT_LABEL}</td>
								<td>{currentPokemon.weight}</td>
							</tr>
							<tr>
								<td>{LABLES.HEIGHT_LABEL}</td>
								<td>{currentPokemon.height}</td>
							</tr>
							<tr>
								<td>{LABLES.BASE_EPIRIENCE_LABEL}</td>
								<td>{currentPokemon.baseExperience}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PokemonPage;
