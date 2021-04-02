import React from 'react';
import './App.css';
import './styles/mainStyle.css'
import './styles/footer.css'
import './styles/gallery.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';

function App() {
  return (
    <div className='f-c'>
      <div className='wrapper'>
        <Header />
        <div className='content f-c'>
          <Gallery />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
