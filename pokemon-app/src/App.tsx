import React from 'react';
import './App.css';
import './styles/mainStyle.css'
import './styles/footer.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='f-c'>
      <div className='wrapper'>
        <Header />
        <h1>Heey</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
