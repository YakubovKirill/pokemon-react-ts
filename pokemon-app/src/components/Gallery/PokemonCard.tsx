import React, { PropsWithChildren, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { ABILITY_COLORS, Pokemon, AbilityType } from '../../types'

const Ability: React.FC<PropsWithChildren<AbilityType>> = (ability: AbilityType): JSX.Element => {
    const abilityColor = (ability.is_hidden) ? ABILITY_COLORS.RED: ABILITY_COLORS.GREEN
    const abilityClasses = `ability ${abilityColor} f-c`
    return (
        <div className={abilityClasses}><span>{ability.ability.name}</span></div>
    )
}

const PokemonCard: React.FC<PropsWithChildren<Pokemon>> = (pokemon: Pokemon) => {
    const abilitiesArr: JSX.Element[] = pokemon.abilities.map((ability) => {
        return <Ability key={ability.ability.name} {...ability} />
    })
    const pokemonPath = `/pokemon/${pokemon.id}`
    
    return (
        <Link to={pokemonPath}>
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
    )
}

export default React.memo(PokemonCard)
