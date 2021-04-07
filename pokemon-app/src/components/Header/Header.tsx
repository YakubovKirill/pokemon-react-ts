import React from 'react'
import { Link } from 'react-router-dom'
import { PATH, PROJECT_NAME } from '../../constants'

import '../../styles/header.scss'

const Header: React.FC = () => (
  <header className='f-c'>
    <Link to={PATH.DEFAULT}><div className='logo'>{PROJECT_NAME}</div></Link>
  </header>
)

export default Header
