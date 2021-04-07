import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import PokemonPage from './components/PokemonPage/PokemonPage';
import { IInputPokemon, IInputPokemonsData, Pokemon, PokemonInput } from './types';
import { addPokemonArr } from './actions';

import './styles/mainStyle.scss'
import './styles/footer.scss'
import { LIMIT, PATH, START_POKEMONS_FROM } from './constants';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([] as Pokemon[])
  const dispatch = useDispatch()
  const firstLetterUpperCase = (word: string) => {
    let wordArr = word.split('')
    wordArr[0] = wordArr[0].toUpperCase()
    return wordArr.join('')
  }

  useEffect(() => {
      const getPokemonsUrl = `${PATH.POKEMON_API}?limit=${LIMIT}&offset=${START_POKEMONS_FROM}`
      
      // Clear array of previous version
      setPokemons([])

      // get all pokemons from API
      axios.request({
        url: getPokemonsUrl,
        method: 'get',
        responseType: 'json',
        transformResponse: (response: IInputPokemonsData) => response.results
      }).then((data) => {
        const pokemonsArr: PokemonInput[] = data.data

        // get information about every pokemon
        pokemonsArr.forEach((pokemon: PokemonInput) => {
          axios.request({
            url: pokemon.url,
            method: 'get',
            responseType: 'json',
            transformResponse: (response: IInputPokemon) => {
              return {
                abilities: response.abilities,
                baseExperience: response.base_experience,
                height: response.height,
                id: response.id,
                name: firstLetterUpperCase(response.name),
                stats: response.stats,
                types: response.types,
                weight: response.weight
              }
            }
          }).then((data) => {
            const currentPokemon: Pokemon = {
              ...data.data,
              image: `${PATH.POKEMON_IMAGE}${data.data.id}.png`
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
