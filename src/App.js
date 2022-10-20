import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../src/assets/logo.png';

function App() {
  return (
    <div className="App">
      <div>
        <a href='/'>
          <img src={logo} alt='Pokebola em preto e branco' />
          <h1>Pokémon</h1>
        </a>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
