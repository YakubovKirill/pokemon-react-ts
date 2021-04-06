import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import Pokemons from './Pokemons'
import { Pokemon } from '../../types'
import '../../styles/gallery.scss'
import { getAllPokemons } from '../../selectors'

const Gallery: React.FC = () => {
    const pokemons: Pokemon[] = useSelector(getAllPokemons)
    return (
        <div className='gallery'>
            { pokemons.length ? <Pokemons /> : '' }
        </div>
    )
}

export default Gallery