import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { AbilityColors, Pokemon, AbilityType } from '../../types'

const Ability: React.FC<PropsWithChildren<any>> = (ability: AbilityType) => {
    const abilityColor = (ability.is_hidden) ? AbilityColors.RED: AbilityColors.GREEN
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

export default PokemonCard