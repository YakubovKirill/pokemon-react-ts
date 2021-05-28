import React from 'react';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import PokemonPage from './components/PokemonPage/PokemonPage';

import './styles/mainStyle.scss';
import './styles/footer.scss';
import { fetchPokemon } from './actions';

const HOME_PAGE_PATH = '/';
const POKEMON_ID_PATH = '/pokemon/:id';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPokemon());
	}, [dispatch]);

	return (
		<Router>
			<div className='f-c'>
				<div className='wrapper'>
					<Header />
					<div className='content f-c'>
						<Switch>
							<Route path={HOME_PAGE_PATH} exact component={Gallery} />
							<Route path={POKEMON_ID_PATH} exact component={PokemonPage} />
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default connect()(App);
