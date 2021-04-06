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
            <h1>This is pokemon page #{id}</h1>
            <Link to={randomPath}><h3>Go to random pokemon</h3></Link>
        </div>
    )
}

export default PokemonPage