import React from 'react';
import logo from './kazuma.png';
import './App.css';
import Christmas from './Christmas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Christmas />

      </header>
    </div>
  );
}

export default App;
