import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import PokemonPage from './components/PokemonPage/PokemonPage';
import { Pokemon } from './types';
import { addPokemonArr } from './actions';

import './styles/mainStyle.scss'
import './styles/footer.scss'
import { LIMIT, PATH, START_POKEMONS_FROM } from './constants';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([] as Pokemon[])
  const dispatch = useDispatch()

  useEffect(() => {
      const getPokemonsUrl = `${PATH.POKEMON_API}?limit=${LIMIT}&offset=${START_POKEMONS_FROM}`
      
      // Clear array of previous version
      setPokemons([])
      
      // get pokemon list from API
      axios.get(getPokemonsUrl).then((data: any) => {
        const pokemonsArr: any[] = data.data.results

        // get information about every pokemon
        pokemonsArr.forEach((pokemon: any) => {
          axios.get(pokemon.url).then((data) => {
              // Create valid pokemon object
              const currentPokemon: Pokemon = {
                  id: data.data.id,
                  name: data.data.name,
                  image: `${PATH.POKEMON_IMAGE}${data.data.id}.png`,
                  abilities: data.data.abilities
              }     
              setPokemons((prev: Pokemon[]) => [...prev, currentPokemon])
          }) 
        })
      })
  }, [])

  useEffect(() => {
    // Put all pokemons to redux store
    dispatch(addPokemonArr(pokemons))
  }, [pokemons, dispatch])

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

export default connect()(App);
