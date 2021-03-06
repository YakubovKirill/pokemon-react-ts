import React from 'react';

import { ABILITY_COLORS,  AbilityType, Pokemon } from '../../types';
import { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Ability: React.FC<PropsWithChildren<AbilityType>> = (ability: AbilityType): JSX.Element => {
	const abilityColor = useMemo(() => {
		return (ability.is_hidden) ? ABILITY_COLORS.RED: ABILITY_COLORS.GREEN;
	}, [ability]);
	const abilityClasses = `ability ${abilityColor} f-c`;

	return (
		<div className={abilityClasses}><span>{ability.ability.name}</span></div>
	);
};

const PokemonCard: React.FC<PropsWithChildren<Pokemon>> = (pokemon: Pokemon) => {
	const abilitiesArr: JSX.Element[] = useMemo(() => {
		return pokemon.abilities.map((ability: AbilityType) => {
			return <Ability key={ability.ability.name} {...ability} />;
		});
	}, [pokemon.abilities]);
	const POKEMON_PATH = `/pokemon/${pokemon.id}`;

	return (
		<Link to={POKEMON_PATH}>
			<div className='pokemon-card'>
				<div className='pokemon-image f-c'>
					<img src={pokemon.image} alt={pokemon.name} />
				</div>
				<div className='pokemon-name f-c'><span>{pokemon.name}</span></div>
				<div className='pokemon-abilities'>
					{abilitiesArr}
				</div>
			</div>
		</Link>
	);
};

export default React.memo(PokemonCard);
