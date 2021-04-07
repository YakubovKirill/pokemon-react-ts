import React from 'react'
import { useParams, Link } from 'react-router-dom';

import '../../styles/aboutPage.scss'

interface PokemonParams {
    id: string
}

const PokemonPage: React.FC = () => {
    const { id } = useParams() as PokemonParams
    const randomID: number = Math.floor(Math.random() * 10)
    const randomPath = `/pokemon/${randomID}`

    return (
        <div className='about'>
            <div className='pokemon-header f-c'><span>Pokemon #{id}</span></div>
            <div className='abilities f-c'>
                <div className='type'><span>Type1</span></div>
                <div className='type'><span>Type1</span></div>
            </div>
            <div className='pokemon-image'>
                <div className='img-wrap f-c'>
                    <img src="https://pokeres.bastionbot.org/images/pokemon/2.png" alt="2" />
                </div>
            </div>
            <div className='abilities f-c'>
                <div className='ability'><span>ability1</span></div>
                <div className='ability'><span>ability2</span></div>
                <div className='ability'><span>ability3</span></div>
            </div>

            <div className='info f-c'>
                <div className='info-block'>
                    <div className='info-header f-c'><span>Stats</span></div>
                    <div className='info-text'><span>Stat name 1</span></div>
                    <div className='stat-wrap'>
                        <div className='stat-field-1 stat-field'></div>
                        <span>50</span>
                    </div>
                    <div className='info-text'><span>Stat name 2</span></div>
                    <div className='stat-wrap'>
                        <div className='stat-field-2 stat-field'></div>
                        <span>70</span>
                    </div>
                    <div className='info-text'><span>Stat name 3</span></div>
                    <div className='stat-wrap'>
                        <div className='stat-field-3 stat-field'></div>
                        <span>30</span>
                    </div>
                </div>
                <div className='info-block'>
                    <div className='info-header f-c'><span>Parametres</span></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Weigth</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Base expirience</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h1>This is pokemon page #{id}</h1>
            <Link to={randomPath}><h3>Go to random pokemon</h3></Link>
        </div>
    )
}

export default PokemonPage
