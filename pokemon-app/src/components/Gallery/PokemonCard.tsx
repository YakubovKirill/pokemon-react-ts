import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../types'

const Ability: React.FC<PropsWithChildren<any>> = (ability: any) => {
    const abilityColor = (ability.is_hidden) ? 'red': 'green'
    const abilityClasses = `ability ${abilityColor} f-c`
    return (
        <div className={abilityClasses}><span>{ability.ability.name}</span></div>
    )
}

const PokemonCard: React.FC<PropsWithChildren<Pokemon>> = (pokemon: Pokemon) => {
    const abilitiesArr: any[] = []
    const pokemonPath = `/pokemon/${pokemon.id}`
    let key = 0
    pokemon.abilities.forEach((ability: any) => {
        const component = <Ability key={key} {...ability} />
        key ++
        abilitiesArr.push(component)
    })
    
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