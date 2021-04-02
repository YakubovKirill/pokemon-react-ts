import React from 'react'
import { PokemonCard } from './PokemonCard'

export const Gallery: React.FC = () => (
    <div className='gallery'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
    </div>
)