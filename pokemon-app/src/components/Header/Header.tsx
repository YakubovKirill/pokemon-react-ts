import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/header.scss'

const DEFAULT_PATH = process.env.REACT_APP_PATH_DEFAULT

const Header: React.FC = () => (
  <header className='f-c'>
    <Link to={`${DEFAULT_PATH}`}><div className='logo'>Pokemonix</div></Link>
  </header>
)

export default Header
