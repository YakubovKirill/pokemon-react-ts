import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

export const Header: React.FC = () => (
  <header className='f-c'>
    <Link to='/'><div className='logo'>Pokemonix</div></Link>
  </header>
)