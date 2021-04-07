import React from 'react'
import { useSelector } from 'react-redux'

import Pokemons from './Pokemons'
import { getPokemonsLength } from '../../selectors'

import '../../styles/gallery.scss'

const Gallery: React.FC = () => {
    const pokemonsLength: number = useSelector(getPokemonsLength)
    return (
        <div className='gallery'>
            { pokemonsLength ? <Pokemons /> : <h1>We haven't pokemons for you, sorry</h1> }
        </div>
    )
}

export default React.memo(Gallery)
