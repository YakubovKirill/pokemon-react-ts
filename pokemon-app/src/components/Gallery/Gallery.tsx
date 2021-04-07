import React from 'react'
import { useSelector } from 'react-redux'

import Pokemons from './Pokemons'
import { Pokemon } from '../../types'
import { getAllPokemons } from '../../selectors'

import '../../styles/gallery.scss'

const Gallery: React.FC = () => {
    const pokemons: Pokemon[] = useSelector(getAllPokemons)
    return (
        <div className='gallery'>
            { pokemons.length ? <Pokemons /> : '' }
        </div>
    )
}

export default React.memo(Gallery)
