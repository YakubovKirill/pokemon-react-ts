import React from 'react'
import { useSelector } from 'react-redux'

import { getAllPokemons } from '../../selectors'
import { Pokemon } from '../../types'
import PokemonCard from './PokemonCard'

const Pokemons: React.FC = () => {
    const pokemons: Pokemon[] = useSelector(getAllPokemons)
    const pokemonComponents: JSX.Element[] = []
    pokemons.forEach((pokemon) => {
        const component: JSX.Element = <PokemonCard 
            key={pokemon.id}
            {...pokemon}
        />
        pokemonComponents.push(component)
    })

    return (
        <>
            {pokemonComponents}
        </>
    )
}

export default React.memo(Pokemons)
