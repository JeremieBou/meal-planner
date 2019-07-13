import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import Header from 'components/layout/header/Header'
import Results from 'components/sections/results/Results'
import Schedule from 'components/sections/schedule/Schedule'
import Meals from 'components/sections/meals/Meals'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Results></Results>
          <Schedule></Schedule>
          <Meals></Meals>

        </Container>

      </div>
    );
  }
}

export default App;
