import React from 'react';
import './App.css';
import './styles/mainStyle.css'
import './styles/footer.css'
import './styles/gallery.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pokemon } from './components/PokemonPage/Pokemon';

function App() {
  return (
    <Router>
      <div className='f-c'>
        <div className='wrapper'>
          <Header />
          <div className='content f-c'>
            <Switch>
              <Route path='/' exact component={Gallery} />
              <Route path='/pokemon/:id' exact component={Pokemon} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
