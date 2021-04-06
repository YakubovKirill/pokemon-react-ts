import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Pokemon } from '../../types'
import PokemonCard from './PokemonCard'

const Pokemons: React.FC = () => {
    const pokemons: Pokemon[] = useSelector((state: RootStateOrAny) => state.pokemons)
    const pokemonComponents: any[] = []
    pokemons.forEach((pokemon) => {
        const component = <PokemonCard 
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

export default Pokemons