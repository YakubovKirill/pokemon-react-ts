import React from 'react'

export const PokemonCard: React.FC = () => (
    <div className='pokemon-card'>
        <div className='pokemon-image'></div>
        <div className='pokemon-name f-c'><span>Pokemon</span></div>
        <div className='pokemon-abilities'>
            <div className='ability red f-c'><span>Ability_1</span></div>
            <div className='ability green f-c'><span>Ability_2</span></div>
            <div className='ability red f-c'><span>Ability_3</span></div>
            <div className='ability green f-c'><span>Ability_2</span></div>
            <div className='ability red f-c'><span>Ability_2</span></div>
        </div>
    </div>
)