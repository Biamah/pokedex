import './App.css';
import React from 'react';
import logo from '../src/assets/logo.png';
import styled from "styled-components";
import SearchPokemon from './components/searchPokemon/SearchPokemon';
import CardsPokemon from './components/cardsPokemon/CardsPokemon';

const ContainerApp = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
`

const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  color: #000;
`

function App() {
  return (
    <div className="App">
      <ContainerApp>
        <HeaderLink href='/'>
          <img src={logo} alt='Pokebola em preto e branco' />
          <HeaderTitle>Pokémon</HeaderTitle>
        </HeaderLink>
      </ContainerApp>
      <main>
        <SearchPokemon />
        <CardsPokemon />
      </main>
    </div>
  );
}

export default App;
