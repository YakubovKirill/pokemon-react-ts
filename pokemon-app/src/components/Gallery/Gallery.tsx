import React from 'react'
import { Pokemon } from '../../types'
import { PokemonCard } from './PokemonCard'

export const Gallery: React.FC = () => {
    const pokemon: Pokemon = {
        id: 1,
        name: 'Bulbik',
        image: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
        abilities: ['Eat', 'Seat']
    }
    return (
    <div className='gallery'>
        <PokemonCard {...pokemon} />
    </div>
    )
}