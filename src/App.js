import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cliente from './Cliente'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cliente 
          nome="Adamastor Pedrada" 
          endereco="Rua das Flores, n. 123">
        </Cliente>
      </header>      
    </div>
  );
}

export default App;
