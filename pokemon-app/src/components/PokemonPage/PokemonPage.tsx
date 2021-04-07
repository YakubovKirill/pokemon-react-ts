import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPokemonByID } from '../../selectors';
import { AbilityType, Pokemon, PokemonStat, PokemonType } from '../../types';

import '../../styles/aboutPage.scss'

// Interface for pokemon ID from router
interface PokemonParams {
    id?: number
}

const PokemonPage: React.FC = () => {
    const { id } = useParams() as PokemonParams
    const numberId = Number(id)
    const currentPokemon: Pokemon = useSelector(getPokemonByID(numberId))[0]
    
    // Cretae array with tpes elements
    const typesElementsArr: JSX.Element[] = useMemo(() => {
        return currentPokemon.types.map((type: PokemonType) => {
            return <div key={type.type.name} className='type'><span>{type.type.name}</span></div>
        })
    }, [currentPokemon.types])

    // Create array with abilities elements
    const abilitiesElementsArr: JSX.Element[] = useMemo(() => {
        return currentPokemon.abilities.map((ability: AbilityType) => {
            return <div key={ability.ability.name} className='ability'><span>{ability.ability.name}</span></div>
        })
    }, [currentPokemon.abilities])

    // Create array with stats elements
    const statsElementsArr: JSX.Element[] = useMemo(() => {
        return currentPokemon.stats.map((stat: PokemonStat) => {
            const statFieldStyle = {
                width: `${stat.base_stat * 2}px`
            }
            return (
                <div key={stat.stat.name}>
                    <div className='info-text'><span>{stat.stat.name}</span></div>
                    <div className='stat-wrap'>
                        <div style={statFieldStyle} className='stat-field'></div>
                        <span>{stat.base_stat}</span>
                    </div>
                </div>
            )
        })
    }, [currentPokemon.stats])

    return (
        <div className='about'>
            <div className='pokemon-header f-c'><span>{currentPokemon.name}</span></div>
            <div className='abilities f-c'>
                {typesElementsArr}
            </div>
            <div className='pokemon-image'>
                <div className='img-wrap f-c'>
                    <img src={currentPokemon.image} alt={currentPokemon.name} />
                </div>
            </div>
            <div className='abilities f-c'>
                {abilitiesElementsArr}
            </div>

            <div className='info f-c'>
                <div className='info-block'>
                    <div className='info-header f-c'><span>Stats</span></div>
                    {statsElementsArr}
                </div>
                <div className='info-block'>
                    <div className='info-header f-c'><span>Parametres</span></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Weigth</td>
                                <td>{currentPokemon.weight}</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>{currentPokemon.height}</td>
                            </tr>
                            <tr>
                                <td>Base expirience</td>
                                <td>{currentPokemon.baseExperience}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PokemonPage
