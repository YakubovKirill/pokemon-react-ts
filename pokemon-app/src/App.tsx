import React, { useEffect } from 'react';
import './App.css';
import './styles/mainStyle.css'
import './styles/footer.css'
import './styles/gallery.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonPage } from './components/PokemonPage/PokemonPage';
import { useDispatch } from 'react-redux';
import { getPokemonsFormServer } from './actions';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
    dispatch(getPokemonsFormServer(getPokemonsUrl))
  }, [])

  return (
    <Router>
      <div className='f-c'>
        <div className='wrapper'>
          <Header />
          <div className='content f-c'>
            <Switch>
              <Route path='/' exact component={Gallery} />
              <Route path='/pokemon/:id' exact component={PokemonPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
