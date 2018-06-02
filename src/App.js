import React, { Component } from 'react';
import './App.css';
import Simple from './simple';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lab Math</h1>
        </header>
        <p className="App-intro">
          <Simple />
        </p>
      </div>
    );
  }
}

export default App;
