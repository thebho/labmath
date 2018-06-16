import React, { Component } from 'react';
import './App.css';
import Simple from './simple';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pediatric IV Fluid using D70%</h1>
        </header>
        <div className="App-intro">
          <Simple />
        </div>
      </div>
    );
  }
}

export default App;
