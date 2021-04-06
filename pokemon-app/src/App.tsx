import React, { useEffect, useState } from 'react';
import './styles/mainStyle.scss'
import './styles/footer.scss'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonPage } from './components/PokemonPage/PokemonPage';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import { Pokemon } from './types';
import { addPokemonArr } from './actions';

function App() {
  const [pokemons, setPokemons]: any[] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
      const limit = 100
      const startFrom = 0
      const getPokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startFrom}`
      
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
                  image: `https://pokeres.bastionbot.org/images/pokemon/${data.data.id}.png`,
                  abilities: data.data.abilities
              }     
              setPokemons((prev: any[]) => [...prev, currentPokemon])
          }) 
        })
      })
  }, [])

  useEffect(() => {
    // Put all pokemons to redux store
    dispatch(addPokemonArr(pokemons))
  }, [pokemons])

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
