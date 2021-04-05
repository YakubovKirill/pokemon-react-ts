import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { PokemonCard } from './PokemonCard'

export const Gallery: React.FC = () => {
    const pokemons = useSelector((state: RootStateOrAny) => state.pokemons)
    return (
    <div className='gallery'>
        { pokemons.length ? pokemons[0].name : '' }
    </div>
    )
}