import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Pokemons } from './Pokemons'
import { Pokemon } from '../../types'

export const Gallery: React.FC = () => {
    const pokemons: Pokemon[] = useSelector((state: RootStateOrAny) => state.pokemons)

    return (
        <div className='gallery'>
            { pokemons.length ? <Pokemons /> : '' }
        </div>
    )
}