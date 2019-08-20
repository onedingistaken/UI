import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dnd from './Dnd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">Welcome to React DnD Tutorial</h3>
      </header>

      <div className="dnd-container">
        <Dnd />
      </div>
    </div>
  )
}

export default App;
