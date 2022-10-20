import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import styled from "styled-components";

const ContainerApp = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`

const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
`

const HeaderImg = styled.img``

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  color: #000;
  text-decoration: none;
`

function App() {
  return (
    <div className="App">
      <ContainerApp>
        <HeaderLink href='/'>
          <HeaderImg src={logo} alt='Pokebola em preto e branco' />
          <HeaderTitle>Pokémon</HeaderTitle>
        </HeaderLink>
      </ContainerApp>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
