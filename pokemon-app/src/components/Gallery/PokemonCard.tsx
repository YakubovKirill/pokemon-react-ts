import React, { PropsWithChildren } from 'react'
import { Pokemon } from '../../types'

export const PokemonCard: React.FC<PropsWithChildren<Pokemon>> = (pokemon: Pokemon) => (
    <div className='pokemon-card'>
        <div className='pokemon-image f-c'>
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className='pokemon-name f-c'><span>{pokemon.name}</span></div>
        <div className='pokemon-abilities'>
            <div className='ability red f-c'><span>{pokemon.abilities[0]}</span></div>
            <div className='ability green f-c'><span>{pokemon.abilities[1]}</span></div>
            <div className='ability red f-c'><span>Ability_3</span></div>
            <div className='ability green f-c'><span>Ability_2</span></div>
            <div className='ability red f-c'><span>Ability_2</span></div>
        </div>
    </div>
)