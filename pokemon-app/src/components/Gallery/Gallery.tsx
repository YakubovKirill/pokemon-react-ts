import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
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