import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/header.scss';

const DEFAULT_PATH = '/';
const PROJECT_NAME = 'Pokemonix';

const Header: React.FC = () => {
	return (
		<header className='f-c'>
			<Link to={`${DEFAULT_PATH}`}><div className='logo'>{PROJECT_NAME}</div></Link>
		</header>
	);
};

export default Header;
